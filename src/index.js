import dotenv from "dotenv";
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/webRoute";
import path from 'path'
const app = express();
dotenv.config();
const port = process.env.PORT || 3000; // Sử dụng 3000 nếu PORT không được đặt

configViewEngine(app);
initWebRoute(app);
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});