"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    static jsonResponse(res, code, message) {
        return res.status(code).json({ message });
    }
    static ok(res, dto) {
        if (!!dto) {
            res.type("application/json");
            return res.status(200).json(dto);
        }
        else {
            return res.sendStatus(200);
        }
    }
    static created(res, dto) {
        if (!!dto) {
            return res.sendStatus(201).json(dto);
        }
        return res.sendStatus(201);
    }
    static clientError(res, dto) {
        return res.json(dto !== null && dto !== void 0 ? dto : { message: "Bad Request" }).status(400);
    }
    static unauthorized(res, dto) {
        console.log("unauthorized");
        return res.status(401).json(dto !== null && dto !== void 0 ? dto : { message: "Unauthorized" });
    }
    static paymentRequired(res, message) {
        return BaseController.jsonResponse(res, 402, message ? message : "Payment required");
    }
    static forbidden(res, message) {
        return BaseController.jsonResponse(res, 403, message ? message : "Forbidden");
    }
    static notFound(res, message) {
        return BaseController.jsonResponse(res, 404, message ? message : "Not found");
    }
    static conflict(res, message) {
        return BaseController.jsonResponse(res, 409, message ? message : "Conflict");
    }
    tooMany(res, message) {
        return BaseController.jsonResponse(res, 429, message ? message : "Too many requests");
    }
    static todo(res) {
        return BaseController.jsonResponse(res, 400, "TODO");
    }
    static fail(res, error) {
        console.log(error);
        return res.status(500).json({
            message: error === null || error === void 0 ? void 0 : error.toString(),
        });
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=baseController.js.map