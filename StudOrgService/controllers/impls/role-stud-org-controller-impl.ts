import {RoleStudOrgController} from "../role-stud-org-controller";
import {RoleStudOrgService} from "../../services/role-stud-org-service";
import {Request, Response} from "express";
import {ErrorHandler} from "../../../utils/error-handler";
import {RoleStudOrgModel} from "../../models/role-stud-org-model";

export class RoleStudOrgControllerImpl implements RoleStudOrgController {
    private readonly roleStudOrgService: RoleStudOrgService;

    constructor(roleStudOrgService: RoleStudOrgService) {
        this.roleStudOrgService = roleStudOrgService;
    }

    public createRoleStudOrgModel = async(req: Request, res: Response): Promise<void> => {
        try {
            const roleStudOrgModel: RoleStudOrgModel = req.body;

            await this.roleStudOrgService.createRoleStudOrgModel(roleStudOrgModel);
            this.setAPIResponse(res, roleStudOrgModel);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public removeRoleStudOrgModel = async(req: Request, res: Response): Promise<void> => {
        try {
            const roleStudOrgModel: RoleStudOrgModel = req.body;

            await this.roleStudOrgService.removeRoleStudOrgModel(roleStudOrgModel);
            this.setAPIResponse(res, roleStudOrgModel);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editRoleStudOrgModel = async(req: Request, res: Response): Promise<void> => {
        try {
            const roleStudOrgModel: RoleStudOrgModel = req.body;

            await this.roleStudOrgService.editRoleStudOrgModel(roleStudOrgModel);
            this.setAPIResponse(res, roleStudOrgModel);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    private setAPIResponse(res: Response, responseData: RoleStudOrgModel): void {
        res
            .status(200)
            .json(responseData);
    }
}