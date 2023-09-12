import express from "express";
import getHomePage from "../controllers/HomeController";
import aboutPage from "../controllers/AboutController";
const router = express.Router()
const initWebRoute = (app) =>{
    // //defind
    // router.get('/', (req,res) =>{
    //     res.send('Birds home page')
    // })
    // //define the about route
    // router.get('/about', (req,res) =>{
    //     res.send('about  birds')
    // })

    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    return app.use('/', router)
}
export default initWebRoute
