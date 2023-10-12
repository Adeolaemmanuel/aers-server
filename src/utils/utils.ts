import { Request } from "express";

export const customValidator = (payload: any, req: Request) => {
  const data = { ...payload, ...req.body };
  return Object.keys(data).filter((key) => {
    let value = data[key];
    const typeOf = typeof value;

    if (!value && typeOf !== "boolean") {
      return key;
    }
  })[0];
};
