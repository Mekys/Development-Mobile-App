import express, {Express} from "express";
import {EventRepository} from "./EventService/src/repositories/event-repository";
import {EventRepositoryImpl} from "./EventService/src/repositories/impls/event-repository-impl";
import {EventService} from "./EventService/src/services/event-service";
import {EventServiceImpl} from "./EventService/src/services/implementations/event-service-impl";
import {EventController} from "./EventService/src/controllers/event-controller";
import {EventControllerImpl} from "./EventService/src/controllers/implementations/event-controller-impl";
import {EventRouter} from "./EventService/src/routes/event-router";
import {PostgresDriver} from "./database/config/db/impls/postgres-driver";
import {Driver} from "./database/config/db/driver";
import {TransactionRunner} from "./database/transaction-runners/transaction-runner";
import {QueryConstructor} from "./EventService/src/repositories/query-constructors/query-constructor";
import {PostgresTransactionRunner} from "./database/transaction-runners/impls/postgres-transaction-runner";
import {MigrationRunner} from "./database/migration-runner/migration-runner";
import {StartUpConfig, StartUpParse} from "./database/config/utils/start-up-parse";
import {EventQueries} from "./EventService/src/repositories/queries/event-queries";
import {EventQueriesPg} from "./EventService/src/repositories/queries/impls/event-queries-pg";
import {UserQueries} from "./UserService/src/repositories/queries/user-queries";
import {UserRepository} from "./UserService/src/repositories/user-repository";
import {UserService} from "./UserService/src/services/user-service";
import {UserController} from "./UserService/src/controllers/user-controller";
import {UserRouter} from "./UserService/src/routes/user-router";
import {UserQueriesPg} from "./UserService/src/repositories/queries/impls/user-queries-pg";
import {UserRepositoryImpl} from "./UserService/src/repositories/impls/user-repository-impl";
import {UserServiceImpl} from "./UserService/src/services/impls/user-service-impl";
import {UserControllerImpl} from "./UserService/src/controllers/impls/user-controller-impl";


const EventsAPIPrefix: string = "/events";
const UsersAPIPrefix: string = "/users";
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



const userQueries: UserQueries = new UserQueriesPg();
const userRepository: UserRepository = new UserRepositoryImpl(transactionRunner, userQueries);
const userService: UserService = new UserServiceImpl(userRepository);
const userController: UserController = new UserControllerImpl(userService);
const userRouter: UserRouter = new UserRouter(userController);

userRouter.setRouter();
app.use(UsersAPIPrefix, userRouter.getRouter());



app.listen(PORT, (err: Error | void): void => {
    err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});