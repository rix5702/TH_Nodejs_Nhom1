"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _HomeController = _interopRequireDefault(require("../controllers/HomeController.js"));
var _AboutController = _interopRequireDefault(require("../controllers/AboutController.js"));
var _ErrorController = _interopRequireDefault(require("../controllers/ErrorController.js"));
var _newUser = _interopRequireDefault(require("../controllers/newUser.js"));
var _UserController = _interopRequireDefault(require("../controllers/UserController.js"));
var _AddController = _interopRequireDefault(require("../controllers/AddController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', _HomeController["default"]);
router.get('/about', _AboutController["default"]);
router.get('/register', _newUser["default"]);
router.post('/add-user', _AddController["default"].postAddUser);
router.get('/list-user', _UserController["default"].getAllUser);
router.get('/update-user/:stt', _AddController["default"].postUpdateUser);
var initWebRoute = function initWebRoute(app) {
  app.use('/', router);
  router.use(_ErrorController["default"]);
};
var _default = exports["default"] = initWebRoute;