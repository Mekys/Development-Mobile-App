"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assert = void 0;
class Assert {
    static notNull(obj, msg) {
        if (obj === null) {
            throw new Error(msg);
        }
    }
    static notNullOrUndefined(obj, msg) {
        if (obj === null || obj === undefined) {
            throw new Error(msg);
        }
    }
    static isBoolean(obj) {
        if (!(obj instanceof Boolean)) {
            throw new Error("Object is not a bool");
        }
    }
    static isString(obj) {
        if (!(obj instanceof String)) {
            throw new Error("Object is not a string");
        }
    }
    static isNumber(obj) {
        if (Number.isNaN(obj)) {
            throw new Error("Object is not a number");
        }
    }
    static isError(obj) {
        if (!(obj instanceof Error)) {
            throw new Error("Error occurred while parsing error");
        }
    }
}
exports.Assert = Assert;
//# sourceMappingURL=assert.js.map