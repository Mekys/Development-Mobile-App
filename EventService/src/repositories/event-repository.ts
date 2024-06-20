import {EditEventDescriptionModel, EditEventNameModel, EventModel} from "../models/event-models";

export interface EventRepository {
    createEvent(event: EventModel) : Promise<void>;
    getEvent(eventId: string) : Promise<EventModel>;
    editEvent(event: EventModel) : Promise<EventModel>;
    editEventName(editEventNameModel: EditEventNameModel) : Promise<EditEventNameModel>;
    editEventDescription(editEventDescriptionModel: EditEventDescriptionModel) : Promise<EditEventDescriptionModel>;
    removeEvent(eventId: string): Promise<EventModel>;
}
