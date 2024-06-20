"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartUpParse = void 0;
const parse_helper_1 = require("../../utils/parse-helper");
class StartUpParse {
    static getStartUpConfig() {
        this.varParse();
        return this.startUpConfig;
    }
    static varParse() {
        this.startUpConfig.PORT = parse_helper_1.ParseHelper.parseNumber(process.env.PORT);
        this.startUpConfig.PROD = parse_helper_1.ParseHelper.parseBoolean(process.env.PROD);
    }
}
exports.StartUpParse = StartUpParse;
StartUpParse.startUpConfig = {};
//# sourceMappingURL=start-up-parse.js.map