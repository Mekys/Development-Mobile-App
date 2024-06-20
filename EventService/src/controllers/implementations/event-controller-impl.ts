import {EventController} from "../event-controller";
import {EventService} from "../../services/event-service";
import {
    EventModel,
    EditEventDescriptionModel,
    EditEventNameModel, CreateEventModel
} from "../../models/event-models";
import {Request, Response} from "express";
import {ErrorHandler} from "../../utils/error-handler";
import {EventQueriesPg} from "../../repositories/queries/impls/event-queries-pg";

export class EventControllerImpl implements EventController {
    private readonly eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    };

    public getEvent = async(req: Request, res: Response) : Promise<void> => {
        try {
            const eventId: string = req.body;
            const event: EventModel = await this.eventService.getEvent(eventId);
            this.setFullEventAPIResponse(res, event);
        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    }

    public createEvent = async(req: Request, res: Response) : Promise<void> => {
        try {
            const eventInput: CreateEventModel = req.body;
            const guid: string = crypto.randomUUID();

            const eventInputWithGuid: EventModel = {
                eventId: guid,
                name: eventInput.name,
                description: eventInput.description,
                studOrgId: eventInput.studOrgId
            }
            await this.eventService.createEvent(eventInputWithGuid);
            this.setFullEventAPIResponse(res, eventInputWithGuid);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    }


    public editEvent = async(req: Request, res: Response) : Promise<void> => {
        try {
            const event: EventModel = req.body;
            const newEvent = await this.eventService.editEvent(event);
            this.setFullEventAPIResponse(res, newEvent);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    }

    public editEventName = async(req: Request, res: Response) : Promise<void> => {
        try {
            const event: EditEventNameModel = req.body;
            const newEvent = await this.eventService.editEventName(event);
            this.setEditEventNameAPIResponse(res, newEvent);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    }

    public editEventDescription = async(req: Request, res: Response) : Promise<void> => {
        try {
            const event: EditEventDescriptionModel = req.body;
            const newEvent = await this.eventService.editEventDescription(event);
            this.setEditEventDescriptionAPIResponse(res, newEvent);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    }

    public removeEvent = async(req: Request, res: Response) : Promise<void> => {
        try {
            const eventId: string = req.body;
            const event = await this.eventService.removeEvent(eventId);
            this.setFullEventAPIResponse(res, event);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    }

    private setFullEventAPIResponse(res: Response, responseData: EventModel): void {
        res
            .status(200)
            .json(responseData);
    }

    private setEditEventNameAPIResponse(res: Response, responseData: EditEventNameModel): void {
        res
            .status(200)
            .json(responseData);
    }

    private setEditEventDescriptionAPIResponse(res: Response, responseData: EditEventDescriptionModel): void {
        res
            .status(200)
            .json(responseData);
    }
}