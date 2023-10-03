"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var handleNotFound = function handleNotFound(req, res) {
  res.status(404).send('Lỗi 404, không tìm thấy trang');
};
var _default = exports["default"] = handleNotFound;