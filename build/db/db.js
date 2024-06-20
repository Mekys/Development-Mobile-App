"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const db_config_json_1 = __importDefault(require("../config/db-config.json"));
const pg_1 = __importDefault(require("pg"));
exports.pool = new pg_1.default.Pool({
    user: db_config_json_1.default.user,
    password: db_config_json_1.default.password,
    host: db_config_json_1.default.host,
    port: db_config_json_1.default.port,
    database: db_config_json_1.default.database_name,
});
//# sourceMappingURL=db.js.map