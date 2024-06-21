import {UserController} from "../controllers/user-controller";
import express, {Router} from "express";

export class UserRouter {
    private readonly userRouter: Router;
    private readonly userController: UserController;

    constructor(userController: UserController) {
        this.userController = userController;
        this.userRouter = express.Router();
    }

    public setRouter(): void {
        this.userRouter.post("/edit", this.userController.editUser);
        this.userRouter.post("/edit_name", this.userController.editUserName);
        this.userRouter.post("/edit_surname", this.userController.editUserSurname);
        this.userRouter.post("/edit_middle_name", this.userController.editUserMiddleName);
        this.userRouter.post("/edit_full_name", this.userController.editUserFullName);
        this.userRouter.post("/edit_email", this.userController.editUserEmail);
        this.userRouter.post("/edit_phone_number", this.userController.editUserPhoneNumber);
        this.userRouter.post("/edit_admission_year", this.userController.editUserAdmissionYear);
        this.userRouter.post("/edit_study_program", this.userController.editUserStudyProgram);
        this.userRouter.post("/edit_socials", this.userController.editUserSocials);
        this.userRouter.delete("/remove", this.userController.removeUser);
    }

    public getRouter(): Router {
        return this.userRouter;
    }
}