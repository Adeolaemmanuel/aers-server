import express from "express";
import {
  createDesignationValidator,
  createStageValidator,
} from "./controller/validators";
import {
  createDesignation,
  createStage,
  getAllDesignation,
  getAllStage,
} from "./controller/v1.controller";

const systemRouterV1 = express.Router();

systemRouterV1.post("/stages/add", createStageValidator, createStage);

systemRouterV1.get("/stages", getAllStage);

systemRouterV1.get("/designation", getAllDesignation);

systemRouterV1.post(
  "/designation/add",
  createDesignationValidator,
  createDesignation
);

systemRouterV1.post("/");

export default systemRouterV1;
