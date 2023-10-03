"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var configViewEngine = function configViewEngine(app) {
  app.set("view engine", "ejs");
  app.set("views", "./src/view");
};
var _default = exports["default"] = configViewEngine;