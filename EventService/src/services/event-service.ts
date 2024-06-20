import {EditEventDescriptionModel, EditEventNameModel, EventModel} from "../models/event-models";

export interface EventService {
    createEvent(event: EventModel) : Promise<EventModel>;
    getEvent(eventId: string) : Promise<EventModel>;
    editEvent(event: EventModel) : Promise<EventModel>;
    editEventName(editEventNameModel: EditEventNameModel) : Promise<EditEventNameModel>;
    editEventDescription(editEventDescriptionModel: EditEventDescriptionModel) : Promise<EditEventDescriptionModel>;
    removeEvent(eventId: string): Promise<EventModel>;
}