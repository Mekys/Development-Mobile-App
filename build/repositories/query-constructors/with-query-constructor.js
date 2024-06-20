"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithQueryConstructor = void 0;
const query_constructor_1 = require("./query-constructor");
class WithQueryConstructor extends query_constructor_1.QueryConstructor {
    getParameters() {
        return new Array();
    }
    getQuery() {
        return "";
    }
    setParameters(parameters) {
    }
    setQuery(body) {
    }
}
exports.WithQueryConstructor = WithQueryConstructor;
//# sourceMappingURL=with-query-constructor.js.map