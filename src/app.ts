import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./middlewares/handleErros_middleware";
import { userRoutes } from "./routes/user_routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use(handleErrors);

export default app;
