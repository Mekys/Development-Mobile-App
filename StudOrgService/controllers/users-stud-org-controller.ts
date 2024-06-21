import {Response, Request} from "express";
export interface UsersStudOrgController {
    createUserStudOrgModel(req: Request, res: Response): Promise<void>;
    removeUserStudOrgModel(req: Request, res: Response): Promise<void>;
}