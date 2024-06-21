import {RoleController} from "../role-controller";
import {RoleService} from "../../services/role-service";
import {ErrorHandler} from "../../../utils/error-handler";
import {CreateRoleModel, EditRoleDescriptionModel, EditRoleNameModel} from "../../models/role-model";
import {RoleModel} from "../../models/role-model";
import {Request, Response} from "express";

export class RoleControllerImpl implements RoleController {
    private readonly roleService: RoleService;

    constructor(roleService : RoleService) {
        this.roleService = roleService;
    }

    public createRole = async(req: Request, res: Response): Promise<void> => {
        try {
            const roleInput: CreateRoleModel = req.body;
            const guid: string = crypto.randomUUID();

            const roleInputWithGuid: RoleModel = {
                id: guid,
                name: roleInput.name,
                description: roleInput.description
            }
            await this.roleService.createRole(roleInputWithGuid);
            this.setAPIResponse(res, roleInputWithGuid);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public removeRole = async(req: Request, res: Response): Promise<void> => {
        try {
            const roleId: string = req.body.id;
            const roleModel: RoleModel = await this.roleService.removeRole(roleId);
            this.setAPIResponse(res, roleModel);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editRole = async(req: Request, res: Response): Promise<void> => {
        try {
            const roleModel: RoleModel = req.body;
            const newRole = await this.roleService.editRole(roleModel);
            this.setAPIResponse(res, newRole);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editRoleName = async(req: Request, res: Response): Promise<void> => {
        try {
            const roleModel: EditRoleNameModel = req.body;
            const newRole = await this.roleService.editRoleName(roleModel);
            this.setAPIResponse(res, newRole);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editRoleDescription = async(req: Request, res: Response): Promise<void> => {
        try {
            const roleModel: EditRoleDescriptionModel = req.body;
            const newRole = await this.roleService.editRoleDescription(roleModel);
            this.setAPIResponse(res, newRole);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    private setAPIResponse(res: Response, responseData: RoleModel): void {
        res
            .status(200)
            .json(responseData);
    }

}