import {UserController} from "../user-controller";
import {UserService} from "../../services/user-service";
import {Request, Response} from "express";
import {ErrorHandler} from "../../../../utils/error-handler";
import {
    EditUserAdmissionYearModel, EditUserEmailModel,
    EditUserFullNameModel,
    EditUserMiddleNameModel,
    EditUserNameModel, EditUserPhoneNumberModel, EditUserSocialsModel, EditUserStudyProgramModel,
    EditUserSurnameModel,
    UserModel
} from "../../models/user-models";

export class UserControllerImpl implements UserController {
    private readonly userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public editUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: UserModel = req.body;
            const newUser: UserModel = await this.userService.editUser(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editUserName = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: EditUserNameModel = req.body;
            const newUser: UserModel = await this.userService.editUserName(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editUserSurname = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: EditUserSurnameModel = req.body;
            const newUser: UserModel = await this.userService.editUserSurname(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editUserMiddleName = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: EditUserMiddleNameModel = req.body;
            const newUser: UserModel = await this.userService.editUserMiddleName(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editUserFullName = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: EditUserFullNameModel = req.body;
            const newUser: UserModel = await this.userService.editUserFullName(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editUserPhoneNumber = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: EditUserPhoneNumberModel = req.body;
            const newUser: UserModel = await this.userService.editUserPhoneNumber(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editUserSocials = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: EditUserSocialsModel = req.body;
            const newUser: UserModel = await this.userService.editUserSocials(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editUserAdmissionYear = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: EditUserAdmissionYearModel = req.body;
            const newUser: UserModel = await this.userService.editUserAdmissionYear(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editUserStudyProgram = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: EditUserStudyProgramModel = req.body;
            const newUser: UserModel = await this.userService.editUserStudyProgram(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editUserEmail = async (req: Request, res: Response): Promise<void> => {
        try {
            const user: EditUserEmailModel = req.body;
            const newUser: UserModel = await this.userService.editUserEmail(user);
            this.setAPIResponse(res, newUser);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public removeUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId: string = req.body.id;
            const user: UserModel = await this.userService.removeUser(userId);
            this.setAPIResponse(res, user);
        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    private setAPIResponse(res: Response, responseData: UserModel): void {
        res
            .status(200)
            .json(responseData);
    }
}