import { EditEventDescriptionModel, EditEventNameModel, EventModel } from "../../models/event-models";
import { EventRepository } from "../event-repository";
import { Assert } from "../../utils/assert";
import { JsonDecoder } from "ts.data.json";
import { QueryResult } from "pg";
import { pool } from "../../db/db";

export class EventRepositoryImpl implements EventRepository {
    constructor() {};

    private eventDecoder = JsonDecoder.object<EventModel>({
        eventId: JsonDecoder.string,
        name: JsonDecoder.string,
        description: JsonDecoder.string,
        studentOrganizationId: JsonDecoder.number
    }, 'EventDB');

    private handlingEventQueryResult = async (queryResult: QueryResult<JSON>): Promise<EventModel> => {
        const respond: EventModel = await this.eventDecoder.decodeToPromise(queryResult.rows[0])
            .then((eventDB: EventModel) => {
                return eventDB;
            });
        return respond;
    };

    public async createEvent(event: EventModel) : Promise<EventModel> {
        return await pool.query(`INSERT INTO events (name, description, studentOrganizationId) 
                                 VALUES ('${event.name}', '${event.description}', ${event.studentOrganizationId}, '') 
                                 RETURNING *`)
            .then(async (queryResult: QueryResult<JSON>) => {
                return await this.handlingEventQueryResult(queryResult);
            });
    };

    public async getEvent(eventId: string) : Promise<EventModel> {

    };

    public async editEvent(event: EventModel) : Promise<EventModel> {

    };

    public async editEventName(editEventNameModel: EditEventNameModel) : Promise<EventModel> {

    };

    public async editEventDescription(editEventDescriptionModel: EditEventDescriptionModel) : Promise<EventModel> {

    };

    public async removeEvent(eventId: string): Promise<EventModel> {

    };
}