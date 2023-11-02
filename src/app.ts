import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./middlewares/handleErros_middleware";
import { userRoutes } from "./routes/user_routes";
import { authRoute } from "./routes/auth_routes";
import { categoryRouter } from "./routes/categories_routes";
import { realEstateRoutes } from "./routes/realEstate_routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", authRoute);
app.use("/categories", categoryRouter);
app.use("/realestate", realEstateRoutes);
app.use(handleErrors);

export default app;
