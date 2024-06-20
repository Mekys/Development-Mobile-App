import {EventModel} from "../../models/event-models";
import {SingleQueryConstructor} from "../query-constructors/single-query-constructor";
export interface EventQueries {
    createEvent(eventId: string, name: string, description: string, studOrgId: string): SingleQueryConstructor;
    getEvent(id: string): SingleQueryConstructor;
    editEvent(id: string, name:string, description:string, studOrgId: string) : SingleQueryConstructor;
    editEventName(id:string, newName:string): SingleQueryConstructor;
    editEventDescription(id:string, newDescription:string): SingleQueryConstructor;
    removeEvent(id: string) : SingleQueryConstructor;
}