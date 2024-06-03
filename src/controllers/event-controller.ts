import { Request, Response } from "express";

export interface EventController {
    createEvent(req: Request, res: Response): void;
    getEvent(req: Request, res: Response): void;
    editEvent(req: Request, res: Response): void;
    editEventName(req: Request, res: Response) : void;
    editEventDescription(req: Request, res: Response) : void;
    removeEvent(req: Request, res: Response): void;
}