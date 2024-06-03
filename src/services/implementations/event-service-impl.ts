import {EditEventDescriptionModel, EditEventNameModel, EventModel} from "../../models/event-models";
import {EventService} from "../event-service";
import {EventRepository} from "../../repositories/event-repository";

export class EventServiceImpl implements EventService {
    private readonly eventRepository: EventRepository;
    constructor(eventRepository: EventRepository) {
        this.eventRepository = eventRepository;
    }
    public createEvent = async (event: EventModel) : Promise<EventModel> => {
        return await this.eventRepository.createEvent(event);
    };

    public getEvent = async (eventId: string) : Promise<EventModel> => {
        return await this.eventRepository.getEvent(eventId);
    };

    public editEvent = async (event: EventModel) : Promise<EventModel> => {
        return await this.eventRepository.editEvent(event);
    };

    public editEventName = async (editEventNameModel: EditEventNameModel) : Promise<EventModel> => {
        return await this.eventRepository.editEventName(editEventNameModel);
    };

    public editEventDescription = async (editEventDescriptionModel: EditEventDescriptionModel) : Promise<EventModel> => {
        return await this.eventRepository.editEventDescription(editEventDescriptionModel);
    };

    public removeEvent = async (eventId: string): Promise<EventModel> => {
        return await this.eventRepository.removeEvent(eventId);
    };

}