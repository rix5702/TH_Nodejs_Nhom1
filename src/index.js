
import dotenv from "dotenv";
import express from "express";
import session from 'express-session';
import configViewEngine from "./configs/viewEngine.js";
import initWebRoute from "./route/webRoute.js";
import path from 'path'
const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

app.use(session({
   secret: 'secret-key',
   resave: false,
   saveUninitialized: true,
   cookie : {
      secure : false,
      httpOnly : true
   }
 }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

configViewEngine(app);
initWebRoute(app);

app.use(express.static(path.join(import.meta.url, 'public')));

app.listen( port, () => {
   console.log(`Example app listening on port ${port}`);
})