import {Response, Request} from "express";
export interface RoleController {
    createRole(req: Request, res: Response): Promise<void>;
    removeRole(req: Request, res: Response): Promise<void>;
    editRole(req: Request, res: Response): Promise<void>;
    editRoleName(req: Request, res: Response): Promise<void>;
    editRoleDescription(req: Request, res: Response): Promise<void>;
}