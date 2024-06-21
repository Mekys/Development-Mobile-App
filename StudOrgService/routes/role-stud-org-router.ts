import express, {Router} from "express";
import {StudOrgController} from "../controllers/stud-org-controller";
import {RoleStudOrgController} from "../controllers/role-stud-org-controller";

export class RoleStudOrgRouter {
    private readonly roleStudOrgRouter: Router;
    private readonly roleStudOrgController: RoleStudOrgController;

    constructor(roleStudOrgController: RoleStudOrgController) {
        this.roleStudOrgController = roleStudOrgController;
        this.roleStudOrgRouter = express.Router();
    }

    public setRouter(): void {
        this.roleStudOrgRouter.post("/create", this.roleStudOrgController.createRoleStudOrgModel);
        this.roleStudOrgRouter.post("/edit", this.roleStudOrgController.editRoleStudOrgModel);
        this.roleStudOrgRouter.delete("/remove", this.roleStudOrgController.removeRoleStudOrgModel);
    }

    public getRouter(): Router {
        return this.roleStudOrgRouter;
    }
}