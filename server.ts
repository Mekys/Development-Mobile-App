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
import {QueryConstructor} from "./database/query-constructors/query-constructor";
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
import {StudOrgQueries} from "./StudOrgService/repositories/queries/stud-org-queries";
import {StudOrgRepository} from "./StudOrgService/repositories/stud-org-repository";
import {StudOrgService} from "./StudOrgService/services/stud-org-service";
import {StudOrgController} from "./StudOrgService/controllers/stud-org-controller";
import {StudOrgRouter} from "./StudOrgService/routes/stud-org-router";
import {StudOrgQueriesPg} from "./StudOrgService/repositories/queries/impls/stud-org-queries-pg";
import {StudOrgRepositoryImpl} from "./StudOrgService/repositories/impls/stud-org-repository-impl";
import {StudOrgServiceImpl} from "./StudOrgService/services/impls/stud-org-service-impl";
import {StudOrgControllerImpl} from "./StudOrgService/controllers/impls/stud-org-controller-impl";
import {UsersStudOrgQueries} from "./StudOrgService/repositories/queries/users-stud-org-queries";
import {UsersStudOrgQueriesPg} from "./StudOrgService/repositories/queries/impls/users-stud-org-queries-pg";
import {UsersStudOrgRepository} from "./StudOrgService/repositories/users-stud-org-repository";
import {UsersStudOrgRepositoryImpl} from "./StudOrgService/repositories/impls/users-stud-org-repository-impl";
import {UsersStudOrgService} from "./StudOrgService/services/users-stud-org-service";
import {UsersStudOrgServiceImpl} from "./StudOrgService/services/impls/users-stud-org-service-impl";
import {UsersStudOrgController} from "./StudOrgService/controllers/users-stud-org-controller";
import {UsersStudOrgControllerImpl} from "./StudOrgService/controllers/impls/users-stud-org-controller-impl";
import {UsersStudOrgRouter} from "./StudOrgService/routes/users-stud-org-router";
import {RoleStudOrgQueries} from "./StudOrgService/repositories/queries/role-stud-org-queries";
import {RoleStudOrgQueriesPg} from "./StudOrgService/repositories/queries/impls/role-stud-org-queries-pg";
import {RoleStudOrgRepository} from "./StudOrgService/repositories/role-stud-org-repository";
import {RoleStudOrgRepositoryImpl} from "./StudOrgService/repositories/impls/role-stud-org-repository-impl";
import {RoleStudOrgService} from "./StudOrgService/services/role-stud-org-service";
import {RoleStudOrgServiceImpl} from "./StudOrgService/services/impls/role-stud-org-service-impl";
import {RoleStudOrgController} from "./StudOrgService/controllers/role-stud-org-controller";
import {RoleStudOrgControllerImpl} from "./StudOrgService/controllers/impls/role-stud-org-controller-impl";
import {RoleStudOrgRouter} from "./StudOrgService/routes/role-stud-org-router";
import {RoleQueries} from "./StudOrgService/repositories/queries/role-queries";
import {RoleRepository} from "./StudOrgService/repositories/role-repository";
import {RoleService} from "./StudOrgService/services/role-service";
import {RoleController} from "./StudOrgService/controllers/role-controller";
import {RoleRouter} from "./StudOrgService/routes/role-router";
import {RoleQueriesPg} from "./StudOrgService/repositories/queries/impls/role-queries-pg";
import {RoleRepositoryImpl} from "./StudOrgService/repositories/impls/role-repository-impl";
import {RoleServiceImpl} from "./StudOrgService/services/impls/role-service-impl";
import {RoleControllerImpl} from "./StudOrgService/controllers/impls/role-controller-impl";


const EventsAPIPrefix: string = "/events";
const UsersAPIPrefix: string = "/users";
const StudOrgAPIPrefix: string = "/stud_org";
const UsersStudOrgAPIPrefix: string = "/users_stud_org";
const RoleStudOrgAPIPrefix: string = "/role_stud_org";
const RoleAPIPrefix: string = "/role";

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

const studOrgQueries: StudOrgQueries = new StudOrgQueriesPg();
const studOrgRepository: StudOrgRepository = new StudOrgRepositoryImpl(transactionRunner, studOrgQueries);
const studOrgService: StudOrgService = new StudOrgServiceImpl(studOrgRepository);
const studOrgController: StudOrgController = new StudOrgControllerImpl(studOrgService);
const studOrgRouter: StudOrgRouter = new StudOrgRouter(studOrgController);

studOrgRouter.setRouter();
app.use(StudOrgAPIPrefix, studOrgRouter.getRouter());

const usersStudOrgQueries: UsersStudOrgQueries = new UsersStudOrgQueriesPg();
const usersStudOrgRepository: UsersStudOrgRepository = new UsersStudOrgRepositoryImpl(transactionRunner, usersStudOrgQueries);
const usersStudOrgService: UsersStudOrgService = new UsersStudOrgServiceImpl(usersStudOrgRepository);
const usersStudOrgController: UsersStudOrgController = new UsersStudOrgControllerImpl(usersStudOrgService);
const usersStudOrgRouter: UsersStudOrgRouter = new UsersStudOrgRouter(usersStudOrgController);

usersStudOrgRouter.setRouter();
app.use(UsersStudOrgAPIPrefix, usersStudOrgRouter.getRouter());

const rolesStudOrgQueries: RoleStudOrgQueries = new RoleStudOrgQueriesPg();
const rolesStudOrgRepository: RoleStudOrgRepository = new RoleStudOrgRepositoryImpl(transactionRunner, rolesStudOrgQueries);
const rolesStudOrgService: RoleStudOrgService = new RoleStudOrgServiceImpl(rolesStudOrgRepository);
const rolesStudOrgController: RoleStudOrgController = new RoleStudOrgControllerImpl(rolesStudOrgService);
const rolesStudOrgRouter: RoleStudOrgRouter = new RoleStudOrgRouter(rolesStudOrgController);

rolesStudOrgRouter.setRouter();
app.use(RoleStudOrgAPIPrefix, rolesStudOrgRouter.getRouter());

const roleQueries: RoleQueries = new RoleQueriesPg();
const roleRepository: RoleRepository = new RoleRepositoryImpl(transactionRunner, roleQueries);
const roleService: RoleService = new RoleServiceImpl(roleRepository);
const roleController: RoleController = new RoleControllerImpl(roleService);
const roleRouter: RoleRouter = new RoleRouter(roleController);

roleRouter.setRouter();
app.use(RoleAPIPrefix, roleRouter.getRouter());

app.listen(PORT, (err: Error | void): void => {
    err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});