import express from 'express';
import getHomePage from '../controllers/HomeController.js';
import aboutPage from '../controllers/AboutController.js';
import handleNotFound from '../controllers/ErrorController.js';
import register from '../controllers/newUser.js';
import userController from '../controllers/UserController.js';
import loginUser from '../controllers/loginUser.js'


const router = express.Router();

router.get('/', getHomePage);
router.get('/about', aboutPage);
router.get('/register', register);
router.get('/login', loginUser.getLoginUser);
router.get('/list-user', userController.getAllUser);
router.get('/update/:stt', userController.getUpdateUser );
router.get('/delete/:stt', userController.getDeleteUser );
router.post('/login-user', loginUser.postLoginUser );
router.post('/add-user', userController.postAddUser);
router.post('/update-user1', userController.postUpdateUser);
const initWebRoute = (app) => {
  app.use('/', router);
  router.use(handleNotFound);
};

export default initWebRoute;