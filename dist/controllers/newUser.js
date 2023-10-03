"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var register = function register(req, res) {
  return res.render("index", {
    data: {
      title: 'Tạo tài khoản',
      page: 'newUser'
    }
  });
};
var _default = exports["default"] = register;