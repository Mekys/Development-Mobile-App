import db_config from '../config/db-config.json';
import pg from "pg";

export const pool = new pg.Pool({
    user: db_config.user,
    password: db_config.password,
    host: db_config.host,
    port: db_config.port,
    database: db_config.database_name,
});