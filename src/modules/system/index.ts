import express from "express";
import {
  createDesignationValidator,
  createStageValidator,
} from "./controller/validators";
import {
  createDesignation,
  createStage,
  deleteDesignation,
  deleteStage,
  getAllDesignation,
  getAllStage,
  getSystemStats,
} from "./controller/v1.controller";

const systemRouterV1 = express.Router();

systemRouterV1.get("/stages", getAllStage);

systemRouterV1.post("/stages/add", createStageValidator, createStage);

systemRouterV1.delete("/stages/remove", deleteStage);

systemRouterV1.get("/designation", getAllDesignation);

systemRouterV1.post(
  "/designation/add",
  createDesignationValidator,
  createDesignation
);

systemRouterV1.delete("/designation/remove", deleteDesignation);

systemRouterV1.get("/stats", getSystemStats);

export default systemRouterV1;
