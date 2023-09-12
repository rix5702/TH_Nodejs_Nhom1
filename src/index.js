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
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/about', (req, res) => {
//     res.render('About Page'); // Sửa thành res.send để gửi văn bản thay vì res.render
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});