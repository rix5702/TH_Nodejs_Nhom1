import express from "express";
import getHomePage from "../controllers/HomeController";
import aboutPage from "../controllers/AboutController";
import handleNotFound from "../controllers/ErrorController";
import register from "../controllers/newUser";
import userController from "../controllers/UserController";
import getLoginUser from "../controllers/loginUser";
const router = express.Router()
const initWebRoute = (app) => {
 
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    // Xử lý đăng ký người dùng mới
    router.get('/register',register );
    router.get('/list-user',userController.getAllUser);
    router.get('/detail-user/:id',userController.detailUser);
    router.get('/login-user', getLoginUser );
    // Sử dụng middleware 404 nếu không tìm thấy route
    router.use(handleNotFound);
    return app.use('/', router)
}
export default initWebRoute
