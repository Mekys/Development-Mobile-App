import {Request, Response} from "express";
export interface StudOrgController {
    createStudOrg(req: Request, res:Response): Promise<void>;
    editStudOrg(req: Request, res:Response): Promise<void>;
    editStudOrgName(req: Request, res:Response): Promise<void>;
    editStudOrgDescription(req: Request, res:Response): Promise<void>;
    getAllStudOrgs(req: Request, res:Response): Promise<void>;
    removeStudOrg(req: Request, res:Response): Promise<void>;
}