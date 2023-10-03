"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _viewEngine = _interopRequireDefault(require("./configs/viewEngine.js"));
var _webRoute = _interopRequireDefault(require("./route/webRoute.js"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
_dotenv["default"].config();
var port = process.env.PORT;
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
(0, _viewEngine["default"])(app);
(0, _webRoute["default"])(app);
app.use(_express["default"]["static"](_path["default"].join(import.meta.url, 'public')));
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});