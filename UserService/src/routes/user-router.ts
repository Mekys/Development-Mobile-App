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
        this.userRouter.post("/edit_user", this.userController.editUser);
        this.userRouter.post("/edit_user_name", this.userController.editUserName);
        this.userRouter.post("/edit_user_surname", this.userController.editUserSurname);
        this.userRouter.post("/edit_user_middle_name", this.userController.editUserMiddleName);
        this.userRouter.post("/edit_user_full_name", this.userController.editUserFullName);
        this.userRouter.post("/edit_user_email", this.userController.editUserEmail);
        this.userRouter.post("/edit_user_phone_number", this.userController.editUserPhoneNumber);
        this.userRouter.post("/edit_user_admission_year", this.userController.editUserAdmissionYear);
        this.userRouter.post("/edit_user_study_program", this.userController.editUserStudyProgram);
        this.userRouter.post("/edit_user_socials", this.userController.editUserSocials);
        this.userRouter.delete("/remove_user", this.userController.removeUser);
    }

    public getRouter(): Router {
        return this.userRouter;
    }
}