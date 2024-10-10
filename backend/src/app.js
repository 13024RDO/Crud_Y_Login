import express from "express";
import cors from "cors";
import cookiePaser from "cookie-parser";
import morgan from "morgan";
import session from "express-session";

const app = express();
const PORT = environment.server.port;
const HOST = environment.server.host;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3003",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    Credential: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use("/auth", authRouter);
app.use("/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Sever running in ${HOST}:${PORT}`);
});
