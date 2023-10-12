"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customValidator = void 0;
const customValidator = (payload, req) => {
    const data = Object.assign(Object.assign({}, payload), req.body);
    return Object.keys(data).filter((key) => {
        let value = data[key];
        const typeOf = typeof value;
        if (!value && typeOf !== "boolean") {
            return key;
        }
    })[0];
};
exports.customValidator = customValidator;
//# sourceMappingURL=ustils.js.map