"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _promise = _interopRequireDefault(require("mysql2/promise"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var connection = _promise["default"].createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejs',
  password: ''
});
var _default = exports["default"] = connection;