"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbInfoParse = void 0;
const parse_helper_1 = require("../../utils/parse-helper");
class DbInfoParse {
    static getDBConfig() {
        this.varParse();
        return this.dbConfig;
    }
    static varParse() {
        this.dbConfig.HOST = parse_helper_1.ParseHelper.parseString(process.env.DB_HOST);
        this.dbConfig.USER = parse_helper_1.ParseHelper.parseString(process.env.DB_USER);
        this.dbConfig.PASSWORD = parse_helper_1.ParseHelper.parseString(process.env.DB_PASSWORD);
        this.dbConfig.PORT = parse_helper_1.ParseHelper.parseNumber(process.env.DB_PORT);
        this.dbConfig.DATABASE_NAME = parse_helper_1.ParseHelper.parseString(process.env.DB_NAME);
    }
}
exports.DbInfoParse = DbInfoParse;
DbInfoParse.dbConfig = {};
//# sourceMappingURL=db-info-parse.js.map