// global namespace pollution

// CommonJS
{
  const $ = require("jquery");
  const setMap = require("./07-set-map.js");
  require("./07-set-map"); // without extension
  const myModule = require("./my-module/index.js");
  require("./my-module"); // without index.js

  module.exports = { $, myModule };
}

// ES6 Modules
{
  // default export
  import $ from "jquery";
  export default $;

  // named exports
  import { $, _ as lodash } from "jquery";
  export const $ = {};
  export const _ = {};
  import * as jquery from "jquery";
  console.log(jquery.$, jquery._);
}

{
  import { a } from "mario";
  import { a } from "luigi";

  import { a as marioA } from "mario";
  import { a as luigiA } from "luigi";

  import * as mario from "mario";
  import * as luigi from "luigi";

  console.log(mario.a, luigi.a);
}
