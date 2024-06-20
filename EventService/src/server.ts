import express, {Express} from "express";
import {EventRepository} from "./repositories/event-repository";
import {EventRepositoryImpl} from "./repositories/impls/event-repository-impl";
import {EventService} from "./services/event-service";
import {EventServiceImpl} from "./services/implementations/event-service-impl";
import {EventController} from "./controllers/event-controller";
import {EventControllerImpl} from "./controllers/implementations/event-controller-impl";
import {EventRouter} from "./routes/event-router";
import {PostgresDriver} from "./config/db/impls/postgres-driver";
import {Driver} from "./config/db/driver";
import {TransactionRunner} from "./repositories/transaction-runners/transaction-runner";
import {QueryConstructor} from "./repositories/query-constructors/query-constructor";
import {PostgresTransactionRunner} from "./repositories/transaction-runners/impls/postgres-transaction-runner";
import {MigrationRunner} from "./migration-runner/migration-runner";
import {StartUpConfig, StartUpParse} from "./config/utils/start-up-parse";
import {EventQueries} from "./repositories/queries/event-queries";
import {EventQueriesPg} from "./repositories/queries/impls/event-queries-pg";


const EventsAPIPrefix: string = "/events";
const app: Express = express();
app.use(express.json());

const startUpConfig: StartUpConfig = StartUpParse.getStartUpConfig();
const PORT: number = startUpConfig.PORT;
const isProd: boolean = startUpConfig.PROD;

const pgDriver: Driver = new PostgresDriver();
const transactionRunner: TransactionRunner<QueryConstructor> = new PostgresTransactionRunner<QueryConstructor>(pgDriver);
const migrationRunner: MigrationRunner = new MigrationRunner(transactionRunner);

migrationRunner.run(isProd);

const eventQueries: EventQueries = new EventQueriesPg();

const eventRepository: EventRepository = new EventRepositoryImpl(transactionRunner, eventQueries);
const eventService: EventService = new EventServiceImpl(eventRepository);
const eventController: EventController = new EventControllerImpl(eventService);
const eventRouter: EventRouter = new EventRouter(eventController);

eventRouter.setRouter();
app.use(EventsAPIPrefix, eventRouter.getRouter());

app.listen(PORT, (err: Error | void): void => {
    err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});