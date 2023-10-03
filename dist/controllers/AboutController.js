"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var aboutPage = function aboutPage(req, res) {
  return res.render("index", {
    data: {
      title: 'About website',
      content: 'admin@abc.com.vn',
      page: 'about'
    }
  });
};
var _default = exports["default"] = aboutPage;