import {Response, Request} from "express";

export interface RoleStudOrgController {
    createRoleStudOrgModel(req: Request, res: Response): Promise<void>;
    removeRoleStudOrgModel(req: Request, res: Response): Promise<void>;
    editRoleStudOrgModel(req: Request, res: Response): Promise<void>;
}