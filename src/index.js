import express from "express";
import { json, urlencoded } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import "./db/db.js";

dotenv.config();

const app = express();
//Middlewars
app.use(json());
app.use(morgan("dev"));
app.use(urlencoded({ extended: false }));

//routers

//settings
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), console.log("server on port", app.get("port")));
