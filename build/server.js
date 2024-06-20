"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_repository_impl_1 = require("./repositories/impls/event-repository-impl");
const event_service_impl_1 = require("./services/implementations/event-service-impl");
const event_controller_impl_1 = require("./controllers/implementations/event-controller-impl");
const event_router_1 = require("./routes/event-router");
const postgres_driver_1 = require("./config/db/impls/postgres-driver");
const postgres_transaction_runner_1 = require("./repositories/transaction-runners/impls/postgres-transaction-runner");
const migration_runner_1 = require("./migration-runner/migration-runner");
const start_up_parse_1 = require("./config/utils/start-up-parse");
const event_queries_pg_1 = require("./repositories/queries/impls/event-queries-pg");
const EventsAPIPrefix = "/events";
const app = (0, express_1.default)();
app.use(express_1.default.json());
const startUpConfig = start_up_parse_1.StartUpParse.getStartUpConfig();
const PORT = startUpConfig.PORT;
const isProd = startUpConfig.PROD;
const pgDriver = new postgres_driver_1.PostgresDriver();
const transactionRunner = new postgres_transaction_runner_1.PostgresTransactionRunner(pgDriver);
const migrationRunner = new migration_runner_1.MigrationRunner(transactionRunner);
migrationRunner.run(isProd);
const eventQueries = new event_queries_pg_1.EventQueriesPg();
const eventRepository = new event_repository_impl_1.EventRepositoryImpl(transactionRunner, eventQueries);
const eventService = new event_service_impl_1.EventServiceImpl(eventRepository);
const eventController = new event_controller_impl_1.EventControllerImpl(eventService);
const eventRouter = new event_router_1.EventRouter(eventController);
eventRouter.setRouter();
app.use(EventsAPIPrefix, eventRouter.getRouter());
app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});
//# sourceMappingURL=server.js.map