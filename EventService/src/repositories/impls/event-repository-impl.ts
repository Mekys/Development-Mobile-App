import { EditEventDescriptionModel, EditEventNameModel, EventModel } from "../../models/event-models";
import { EventRepository } from "../event-repository";
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

    private handlingEditEventQueryResult = async (queryResult: QueryResult<JSON>): Promise<EventModel> => {
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
                return await this.handlingEditEventQueryResult(queryResult);
            });
    };

    public async getEvent(eventId: string) : Promise<EventModel> {
        return await pool.query(`SELECT * 
                                 FROM events 
                                 WHERE events.eventId = '${eventId}'`)
            .then(async (queryResult: QueryResult<JSON>) => {
                return this.handlingEditEventQueryResult(queryResult);
            });
    };

    public async editEvent(event: EventModel) : Promise<EventModel> {
        return await pool.query(`UPDATE events 
                                 SET name = '${event.name}',
                                 description = '${event.description}',
                                 studentOrganizationId = ${event.studentOrganizationId} 
                                 WHERE eventId = '${event.eventId}'
                                 RETURNING *`)
            .then(async (queryResult: QueryResult<JSON>) => {
                return this.handlingEditEventQueryResult(queryResult);
            });
    };

    public async editEventName(editEventNameModel: EditEventNameModel) : Promise<EventModel> {
        return await pool.query(`UPDATE events 
                                 SET name = '${editEventNameModel.name}'
                                 WHERE eventId = '${editEventNameModel.eventId}'
                                 RETURNING *`)
            .then(async (queryResult: QueryResult<JSON>) => {
                return this.handlingEditEventQueryResult(queryResult);
            });
    };

    public async editEventDescription(editEventDescriptionModel: EditEventDescriptionModel) : Promise<EventModel> {
        return await pool.query(`UPDATE events 
                                 SET name = '${editEventDescriptionModel.description}'
                                 WHERE eventId = '${editEventDescriptionModel.eventId}'
                                 RETURNING *`)
            .then(async (queryResult: QueryResult<JSON>) => {
                return this.handlingEditEventQueryResult(queryResult);
            });
    };

    public async removeEvent(eventId: string): Promise<EventModel> {
        return await pool.query(`DELETE FROM events 
                                 WHERE eventId = '${eventId}'
                                 RETURNING *`)
            .then(async (queryResult: QueryResult<JSON>) => {
                return this.handlingEditEventQueryResult(queryResult);
            });
    };
}