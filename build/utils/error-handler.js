"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const assert_1 = require("./assert");
class ErrorHandler {
    static setError(res, error) {
        assert_1.Assert.isError(error);
        res
            .status(500)
            .json({
            "message": error.message
        });
    }
    static throwError(err, msg) {
        assert_1.Assert.isError(err);
        throw new Error(msg);
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error-handler.js.map