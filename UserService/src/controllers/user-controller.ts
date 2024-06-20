import { Request, Response } from "express";

export interface UserController {
    editUser(req: Request, res: Response): Promise<void>;
    editUserName(req: Request, res: Response): Promise<void>;
    editUserSurname(req: Request, res: Response): Promise<void>;
    editUserMiddleName(req: Request, res: Response): Promise<void>;
    editUserFullName(req: Request, res: Response): Promise<void>;
    editUserPhoneNumber(req: Request, res: Response): Promise<void>;
    editUserSocials(req: Request, res: Response): Promise<void>;
    editUserAdmissionYear(req: Request, res: Response): Promise<void>;
    editUserStudyProgram(req: Request, res: Response): Promise<void>;
    editUserEmail(req: Request, res: Response): Promise<void>;
    removeUser(req: Request, res: Response): Promise<void>;
}