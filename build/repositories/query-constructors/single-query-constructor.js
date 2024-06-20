"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleQueryConstructor = void 0;
const query_constructor_1 = require("./query-constructor");
class SingleQueryConstructor extends query_constructor_1.QueryConstructor {
    constructor() {
        super();
        this.query = "";
        this.parameters = new Array();
    }
    getQuery() {
        return this.query;
    }
    getParameters() {
        return this.parameters;
    }
    setQuery(body) {
        this.query = body;
    }
    setParameters(parameters) {
        this.parameters = parameters;
    }
}
exports.SingleQueryConstructor = SingleQueryConstructor;
//# sourceMappingURL=single-query-constructor.js.map