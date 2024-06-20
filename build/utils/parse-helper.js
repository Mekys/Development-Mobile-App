"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseHelper = void 0;
const assert_1 = require("./assert");
class ParseHelper {
    static parseBoolean(val) {
        assert_1.Assert.notNullOrUndefined(val, this.notNullOrUndefinedMessage);
        const actVal = this.booleanVal.get(val);
        assert_1.Assert.notNullOrUndefined(actVal, "Error occurred while parsing boolean");
        return Boolean(actVal);
    }
    static parseString(val) {
        assert_1.Assert.notNullOrUndefined(val, this.notNullOrUndefinedMessage);
        return String(val);
    }
    static parseNumber(val) {
        assert_1.Assert.notNullOrUndefined(val, this.notNullOrUndefinedMessage);
        assert_1.Assert.isNumber(val);
        return Number(val);
    }
}
exports.ParseHelper = ParseHelper;
ParseHelper.booleanVal = new Map([["true", true], ["false", false]]);
ParseHelper.notNullOrUndefinedMessage = "Value must not be null";
//# sourceMappingURL=parse-helper.js.map