function promises() {
  $.ajax(
    url,
    (response) => {},
    (error) => {}
  );

  fs.readFile(path, (error, file) => {
    if (error) {
      // handle error
      return;
    }

    // process file
  });

  $.ajax(
    url,
    (response) => {},
    (error) => {}
  );
  console.log("Done.");

  $.ajax(
    url,
    (response) => {
      console.log("Done.");
    },
    (error) => {}
  );

  // Problem 1:
  // callback hell / Hadouken code
  $.ajax(
    url1,
    (response1) => {
      $.ajax(
        url2,
        (response2) => {
          console.log(response1, response2);
        },
        (error2) => {
          console.error(error2);
        }
      );
    },
    (error1) => {
      console.error(error1);
    }
  );

  // Problem 2:
  // concurrency / parallelism
  $.ajax(
    url1,
    (response1) => {
      console.log(response1);
    },
    (error1) => {
      console.error(error1);
    }
  );
  $.ajax(
    url2,
    (response2) => {
      console.log(response2);
    },
    (error2) => {
      console.error(error2);
    }
  );
  console.log(reponse1, response2);

  // Solution 1:
  // naming callbacks
  // against structured programming
  const handleResponse1 = (response1) => {
    $.ajax(url2, handleResponse2, handleError2);
  };
  const handleError1 = (error1) => {
    console.error(error1);
  };
  const handleResponse2 = (response2) => {
    console.log(response1, response2);
  };
  const handleError2 = (error2) => {
    console.error(error2);
  };

  $.ajax(url1, handleResponse1, handleError1);

  // Solution 2:
  // no idea

  // solution to all: promises

  const promise = $.ajax(url); // promise is 'pending'
  promise.then((response) => console.log(response)); // promise is 'resolved' / 'fulfilled'
  promise.catch((error) => console.error(error)); // promise is 'rejected'
  promise.finally(() => {}); // promise is 'settled'

  $.ajax(url1)
    .then((response1) => {
      $.ajax(url2)
        .then((response2) => {
          console.log(response1, response2);
        })
        .catch((error2) => {
          console.error(error2);
        });
    })
    .catch((error1) => {
      console.error(error1);
    });

  // promise chaining
  // solves problem 1
  // 1. structured programming
  // 2. similar to array methods
  // 3. variables not globally available
  $.ajax(url1)
    .then((response1) => $.ajax(url2))
    .then((response2) => console.log(response2))
    .catch((error) => console.error(error))
    .finally(() => {});

  // solves problem 2

  Promise.all([$.ajax(url1), $.ajax(url2)])
    .then(([response1, response2]) => console.log(response1, response2)) // all resolved
    .catch((error) => console.error(error)); // at least rejected

  Promise.allSettled([$.ajax(url1), $.ajax(url2)]).then(
    ([result1, result2]) => console.log(result1, result2) // promises can resolve or reject
  );

  Promise.race([$.ajax(url1), $.ajax(url2)]).then((firstResponse) =>
    console.log(firstResponse)
  );
}

fetch("https://www.swapi.tech/api/people/1/")
  .then((response) => response.text())
  .then((text) => {
    console.log(text);
  });

fetch("https://www.swapi.tech/api/people/1/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

fetch("https://www.swapi.tech/api/people/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({}),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

new Promise((resolve, reject) => {
  // a bunch sync/async operations...
  if (true) {
    resolve("Success!");
  } else {
    reject("Uh-oh...");
  }
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

// promisify
setTimeout(() => {
  console.log("Three seconds have passed!");
}, 3000);

const timeout = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Three seconds have passed!");
  }, 3000);
});

const requestWithTimeout = Promise.race([fetch(url), timeout])
  .then((response) => {})
  .catch((timeoutMessage) => console.error(timeoutMessage));
