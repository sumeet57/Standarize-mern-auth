import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import limiter from "./middlewares/rateLimiter.js";
import helmet from "helmet";
import hpp from "hpp";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(hpp());

app.use("/", limiter);
app.use("/api/user", userRouter);

app.use("/", (req, res) => {
  res.json({ message: "Server is running" });
});
export default app;
