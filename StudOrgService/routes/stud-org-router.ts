import express, {Router} from "express";
import {StudOrgController} from "../controllers/stud-org-controller";
export class StudOrgRouter {
    private readonly studOrgRouter: Router;
    private readonly studOrgController: StudOrgController;

    constructor(studOrgController: StudOrgController) {
        this.studOrgController = studOrgController;
        this.studOrgRouter = express.Router();
    }

    public setRouter(): void {
        this.studOrgRouter.get("/get_all", this.studOrgController.getAllStudOrgs);
        this.studOrgRouter.post("/edit", this.studOrgController.editStudOrg);
        this.studOrgRouter.post("/edit_description", this.studOrgController.editStudOrgDescription);
        this.studOrgRouter.post("/edit_name", this.studOrgController.editStudOrgName);
        this.studOrgRouter.post("/create", this.studOrgController.createStudOrg);
        this.studOrgRouter.delete("/remove", this.studOrgController.removeStudOrg);
    }

    public getRouter(): Router {
        return this.studOrgRouter;
    }
}