import express from "express";

import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
} from "./controller/v1.controller";

const userRouterV1 = express.Router();

userRouterV1.get("/", getAllUsers);

userRouterV1.get("/:id", getUser);

userRouterV1.post("/", createUser);

userRouterV1.patch("/", updateUser);

export default userRouterV1;
