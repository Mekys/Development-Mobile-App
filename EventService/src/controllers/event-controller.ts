import { Request, Response } from "express";

export interface EventController {
    createEvent(req: Request, res: Response): Promise<void>;
    getEvent(req: Request, res: Response): Promise<void>;
    editEvent(req: Request, res: Response): Promise<void>;
    editEventName(req: Request, res: Response) : Promise<void>;
    editEventDescription(req: Request, res: Response) : Promise<void>;
    removeEvent(req: Request, res: Response): Promise<void>;
}