import express from "express";
import AdminLoginController from "./controller/v1.controller";

const adminRouterV1 = express.Router();

adminRouterV1.post("/login", AdminLoginController);

export default adminRouterV1