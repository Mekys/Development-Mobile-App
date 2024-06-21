import {UsersStudOrgController} from "../users-stud-org-controller";
import {UsersStudOrgService} from "../../services/users-stud-org-service";
import {Request, Response} from "express";
import {ErrorHandler} from "../../../utils/error-handler";
import {UserStudOrgModel} from "../../models/user-stud-org-model";

export class UsersStudOrgControllerImpl implements UsersStudOrgController {
    private readonly usersStudOrgService: UsersStudOrgService;

    constructor(usersStudOrgService: UsersStudOrgService) {
        this.usersStudOrgService = usersStudOrgService;
    }

    public createUserStudOrgModel = async(req: Request, res: Response): Promise<void> => {
        try {
            const usersStudOrgModel: UserStudOrgModel = req.body;

            await this.usersStudOrgService.createUserStudOrgModel(usersStudOrgModel);
            this.setAPIResponse(res, usersStudOrgModel);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public removeUserStudOrgModel = async(req: Request, res: Response): Promise<void> => {
        try {
            const usersStudOrgModel: UserStudOrgModel = req.body;

            await this.usersStudOrgService.removeUserStudOrgModel(usersStudOrgModel);
            this.setAPIResponse(res, usersStudOrgModel);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    private setAPIResponse(res: Response, responseData: UserStudOrgModel): void {
        res
            .status(200)
            .json(responseData);
    }
}