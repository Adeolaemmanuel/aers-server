import * as express from "express";

export class BaseController {
  public static jsonResponse(
    res: express.Response,
    code: number,
    message: string
  ) {
    return res.status(code).json({ message });
  }

  public static ok<T>(res: express.Response, dto?: T) {
    if (!!dto) {
      res.type("application/json");
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  public static created<T>(res: express.Response, dto?: T) {
    if (!!dto) {
      return res.sendStatus(201).json(dto);
    }
    return res.sendStatus(201);
  }

  public static clientError<T>(res: express.Response, dto?: T) {
    return res.json(dto ?? { message: "Bad Request" }).status(400);
  }

  public static unauthorized<T>(res: express.Response, dto?: T) {
    console.log("unauthorized");
    return res.status(401).json(dto ?? { message: "Unauthorized" });
  }

  public static paymentRequired(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      402,
      message ? message : "Payment required"
    );
  }

  public static forbidden(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      403,
      message ? message : "Forbidden"
    );
  }

  public static notFound(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      404,
      message ? message : "Not found"
    );
  }

  public static conflict(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      409,
      message ? message : "Conflict"
    );
  }

  public tooMany(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      429,
      message ? message : "Too many requests"
    );
  }

  public static todo(res: express.Response) {
    return BaseController.jsonResponse(res, 400, "TODO");
  }

  public static fail(res: express.Response, error: Error | string) {
    console.log(error);
    return res.status(500).json({
      message: error?.toString(),
    });
  }
}
