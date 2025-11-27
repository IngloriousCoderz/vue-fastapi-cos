// 1. function declaration

{
  // function hoisting
  console.log(sum(2, 3));

  function sum(a, b) {
    return a + b;
  }
}

// 2. function expression - obsolete

{
  const sum = function (a, b) {
    return a + b;
  };

  // no hoisting
  console.log(sum(2, 3));

  // button.onclick = function(event) {}
  // button.addEventListener("click", function (event) {});
}

// 3. arrow function

{
  const sum = (a, b) => {
    return a + b;
  };

  // no hoisting
  console.log(sum(2, 3));

  // button.onclick = (event) => {}
  // button.addEventListener("click", (event) => {});
}

// perk 1: conciseness
{
  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}

// perk 2: auto-binding
function autoBinding() {
  {
    button.onclick = function (event) {
      console.log(this, event.target); // button, button
    };
  }

  {
    const that = this;
    button.onclick = function (event) {
      console.log(that, event.target); // window, button
    };
  }

  {
    button.onclick = function (event) {
      console.log(this, event.target); // window, button
    }.bind(this);
  }

  {
    button.onclick = (event) => console.log(this, event.target); // window, button
  }
}

// default parameters

{
  function sum(a, b) {
    if (typeof a === "undefined") {
      a = 0;
    }

    if (typeof b === "undefined") {
      b = 0;
    }

    return a + b;
  }
  console.log(sum());
}

{
  function sum(a = 0, b = 0) {
    return a + b;
  }

  console.log(sum(0));
  console.log(sum(null, null));
}
