"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuestionValidator = void 0;
const baseController_1 = require("../../../utils/baseController");
const utils_1 = require("../../../utils/utils");
const createQuestionValidator = (req, res, next) => {
    const payload = {
        input_type: undefined,
        question: undefined,
        stage_slug: undefined,
    };
    const valid = (0, utils_1.customValidator)(payload, req);
    if ((valid === null || valid === void 0 ? void 0 : valid.length) > 0) {
        return handleError(valid, res);
    }
    next();
};
exports.createQuestionValidator = createQuestionValidator;
function handleError(valid, res) {
    return baseController_1.BaseController.clientError(res, {
        error: `${valid.replace("_", " ")} is required`,
        key: valid,
    });
}
//# sourceMappingURL=validators.js.map