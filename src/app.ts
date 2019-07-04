import express from "express";
import { AddressInfo } from "net";

import path from "path";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import createError from "http-errors";

import { DefaultRoute } from "./routes";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", DefaultRoute);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((req, res) => {
  res.status(500);
  res.render("error");
});

const listener = app.listen(8081, () => {
  console.log(`Listening on port ${(listener.address() as AddressInfo).port}`);
});

export default app;