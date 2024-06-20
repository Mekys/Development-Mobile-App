"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresTransactionRunner = void 0;
const assert_1 = require("../../../utils/assert");
class PostgresTransactionRunner {
    constructor(driver) {
        this.BEGIN = "BEGIN;";
        this.COMMIT = "COMMIT;";
        this.pool = driver.getDriver();
    }
    run(queries) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.pool.connect((err, client) => {
                    if (err != undefined) {
                        reject(err);
                        return;
                    }
                    assert_1.Assert.notNullOrUndefined(client, "Cant get pg client");
                    try {
                        client === null || client === void 0 ? void 0 : client.query("BEGIN;");
                        const results = [];
                        (() => __awaiter(this, void 0, void 0, function* () {
                            for (const queryConstructor of queries) {
                                const result = client === null || client === void 0 ? void 0 : client.query(queryConstructor.getQuery(), queryConstructor.getParameters());
                                if (result) {
                                    results.push((yield result).rows);
                                }
                            }
                            client === null || client === void 0 ? void 0 : client.query("COMMIT;", (commitErr) => {
                                if (commitErr) {
                                    reject(commitErr);
                                }
                                else {
                                    resolve(results);
                                }
                            });
                        }))();
                    }
                    catch (err) {
                        client === null || client === void 0 ? void 0 : client.query("ROLLBACK;", (rollbackErr) => {
                            if (rollbackErr) {
                                reject(rollbackErr);
                            }
                            else {
                                reject(err);
                            }
                        });
                    }
                });
            });
        });
    }
}
exports.PostgresTransactionRunner = PostgresTransactionRunner;
//# sourceMappingURL=postgres-transaction-runner.js.map