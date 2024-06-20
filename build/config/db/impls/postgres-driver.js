"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDriver = void 0;
const pg_1 = require("pg");
const db_info_parse_1 = require("../../utils/db-info-parse");
class PostgresDriver {
    constructor() {
        this.dbConfig = db_info_parse_1.DbInfoParse.getDBConfig();
    }
    getDriver() {
        const pool = new pg_1.Pool({
            user: this.dbConfig.USER,
            password: this.dbConfig.PASSWORD,
            host: this.dbConfig.HOST,
            port: this.dbConfig.PORT,
            database: this.dbConfig.DATABASE_NAME
        });
        return pool;
    }
}
exports.PostgresDriver = PostgresDriver;
//# sourceMappingURL=postgres-driver.js.map