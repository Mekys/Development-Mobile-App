import {EditEventDescriptionModel, EditEventNameModel, EventModel} from "../../models/event-models";
import {EventService} from "../event-service";
import {EventRepository} from "../../repositories/event-repository";
import {Assert} from "../../utils/assert";

export class EventServiceImpl implements EventService {
    private readonly eventRepository: EventRepository;
    constructor(eventRepository: EventRepository) {
        this.eventRepository = eventRepository;
    }
    public async createEvent (event: EventModel): Promise<EventModel> {
        await this.eventRepository.createEvent(event);
        return event;
    };

    public async getEvent (eventId: string): Promise<EventModel> {
        const event = await this.eventRepository.getEvent(eventId);
        Assert.notNull(event, `Event with ID ${eventId} not found`);
        return event;
    };

    public async editEvent (event: EventModel): Promise<EventModel> {
        const updatedEvent = await this.eventRepository.editEvent(event);
        Assert.notNull(updatedEvent, `Event with ID ${event.eventId} not found or could not be updated`);
        return updatedEvent;
    };

    public async editEventName (editEventNameModel: EditEventNameModel): Promise<EditEventNameModel> {
        const updatedEvent: EditEventNameModel = await this.eventRepository.editEventName(editEventNameModel);
        Assert.notNull(updatedEvent, `Event with ID ${editEventNameModel.eventId} not found or could not be updated`);
        return updatedEvent;
    };

    public async editEventDescription (editEventDescriptionModel: EditEventDescriptionModel): Promise<EditEventDescriptionModel> {
        const updatedEvent: EditEventDescriptionModel = await this.eventRepository.editEventDescription(editEventDescriptionModel);
        Assert.notNull(updatedEvent, `Event with ID ${editEventDescriptionModel.eventId} not found or could not be updated`);
        return updatedEvent;
    };

    public async removeEvent (eventId: string): Promise<EventModel> {
        const event: EventModel = await this.eventRepository.removeEvent(eventId);
        Assert.notNull(event, `Event with ID ${eventId} not found or could not be deleted`);
        return event;
    };
}