import express, {Router} from "express";
import {RoleStudOrgController} from "../controllers/role-stud-org-controller";
import {UsersStudOrgController} from "../controllers/users-stud-org-controller";

export class UsersStudOrgRouter {
    private readonly usersStudOrgRouter: Router;
    private readonly usersStudOrgController: UsersStudOrgController;

    constructor(usersStudOrgController: UsersStudOrgController) {
        this.usersStudOrgController = usersStudOrgController;
        this.usersStudOrgRouter = express.Router();
    }

    public setRouter(): void {
        this.usersStudOrgRouter.post("/create", this.usersStudOrgController.createUserStudOrgModel);
        this.usersStudOrgRouter.delete("/remove", this.usersStudOrgController.removeUserStudOrgModel);
    }

    public getRouter(): Router {
        return this.usersStudOrgRouter;
    }
}