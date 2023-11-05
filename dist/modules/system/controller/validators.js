"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidator = exports.createDesignationValidator = exports.createStageValidator = void 0;
const utils_1 = require("../../../utils/utils");
const baseController_1 = require("../../../utils/baseController");
const createStageValidator = (req, res, next) => {
    const payload = {
        name: undefined,
    };
    const valid = (0, utils_1.customValidator)(payload, req);
    if ((valid === null || valid === void 0 ? void 0 : valid.length) > 0) {
        return handleError(valid, res);
    }
    next();
};
exports.createStageValidator = createStageValidator;
const createDesignationValidator = (req, res, next) => {
    const payload = {
        name: undefined,
    };
    const valid = (0, utils_1.customValidator)(payload, req);
    if ((valid === null || valid === void 0 ? void 0 : valid.length) > 0) {
        return handleError(valid, res);
    }
    next();
};
exports.createDesignationValidator = createDesignationValidator;
const createUserValidator = (req, res, next) => {
    const payload = {
        first_name: undefined,
        last_name: undefined,
        email: undefined,
        designation_id: undefined,
        phone_number: undefined,
    };
    const valid = (0, utils_1.customValidator)(payload, req);
    if ((valid === null || valid === void 0 ? void 0 : valid.length) > 0) {
        return handleError(valid, res);
    }
    next();
};
exports.createUserValidator = createUserValidator;
function handleError(valid, res) {
    return baseController_1.BaseController.clientError(res, {
        error: `${valid.replace("_", " ")} is required`,
        key: valid,
    });
}
//# sourceMappingURL=validators.js.map