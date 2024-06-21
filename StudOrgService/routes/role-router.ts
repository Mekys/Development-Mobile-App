import express, {Router} from "express";
import {StudOrgController} from "../controllers/stud-org-controller";
import {RoleStudOrgController} from "../controllers/role-stud-org-controller";
import {RoleController} from "../controllers/role-controller";

export class RoleRouter {
    private readonly roleRouter: Router;
    private readonly roleController: RoleController;

    constructor(roleController: RoleController) {
        this.roleController = roleController;
        this.roleRouter = express.Router();
    }

    public setRouter(): void {
        this.roleRouter.post("/create", this.roleController.createRole);
        this.roleRouter.post("/edit", this.roleController.editRole);
        this.roleRouter.post("/edit_name", this.roleController.editRoleName);
        this.roleRouter.post("/edit_description", this.roleController.editRoleDescription);
        this.roleRouter.delete("/remove", this.roleController.removeRole);
    }

    public getRouter(): Router {
        return this.roleRouter;
    }
}