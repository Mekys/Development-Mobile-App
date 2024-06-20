"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationRunner = void 0;
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const error_handler_1 = require("../utils/error-handler");
const single_query_constructor_1 = require("../repositories/query-constructors/single-query-constructor");
class MigrationRunner {
    constructor(transactionRunner) {
        this.relativeMigrationsPath = "EventService/resources/migrations";
        this.fileEncodingType = 'utf-8';
        this.transactionRunner = transactionRunner;
    }
    run(isProd) {
        if (!isProd) {
            return;
        }
        const files = this.getMigrationFiles(this.relativeMigrationsPath);
        files.forEach((filePath) => {
            this.prepareAndRun(filePath);
        });
    }
    getMigrationFiles(relativePath) {
        const absoluteMigrationsPath = (0, path_1.resolve)(relativePath);
        const migrationPaths = fs_1.default.readdirSync(absoluteMigrationsPath, { encoding: this.fileEncodingType });
        for (let i = 0; i < migrationPaths.length; ++i) {
            migrationPaths[i] = absoluteMigrationsPath + "\\" + migrationPaths[i];
        }
        return migrationPaths;
    }
    prepareAndRun(filePath) {
        try {
            const queries = this.getQueries(filePath);
            this.transactionRunner.run(queries);
        }
        catch (err) {
            error_handler_1.ErrorHandler.throwError(err, "Something went wrong while migrating");
        }
    }
    getQueries(filePath) {
        try {
            const fileBody = fs_1.default.readFileSync(filePath, { encoding: 'utf-8' });
            const preparedQueries = this.prepareQueries(fileBody);
            return preparedQueries;
        }
        catch (err) {
            error_handler_1.ErrorHandler.throwError(err, "Something went wrong while parsing migration file");
        }
        return new Array();
    }
    prepareQueries(fileBody) {
        const queries = fileBody.replace(/\n|\r/g, ' ')
            .split(';');
        const preparedQueries = new Array();
        for (let i = 0; i < queries.length; ++i) {
            if (queries[i] == null || queries[i].length == 0) {
                continue;
            }
            const queryConstructor = new single_query_constructor_1.SingleQueryConstructor();
            queryConstructor.setQuery(queries[i] + ';');
            preparedQueries.push(queryConstructor);
        }
        return preparedQueries;
    }
}
exports.MigrationRunner = MigrationRunner;
//# sourceMappingURL=migration-runner.js.map