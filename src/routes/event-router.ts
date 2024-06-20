import express, { Router } from "express";
import {EventController} from "../controllers/event-controller";

export class EventRouter {
    private readonly eventRouter: Router;
    private readonly eventController: EventController;

    constructor(eventController: EventController) {
        this.eventController = eventController;
        this.eventRouter = express.Router();
    }

    public setRouter(): void {
        this.eventRouter.get("/get_event", this.eventController.getEvent);
        this.eventRouter.post("/edit_event", this.eventController.editEvent);
        this.eventRouter.post("/create_event", this.eventController.createEvent);
        this.eventRouter.delete("/remove_event", this.eventController.removeEvent);
        this.eventRouter.post("/edit_event_name", this.eventController.editEventName);
        this.eventRouter.post("/edit_event_description", this.eventController.editEventDescription);
    }

    public getRouter(): Router {
        return this.eventRouter;
    }
}