import {EditEventDescriptionModel, EditEventNameModel, EventModel} from "../../models/event-models";
import {EventRepository} from "../event-repository";
import {JsonDecoder} from "ts.data.json";
import {QueryResult} from "pg";
import {TransactionRunner} from "../../../../database/transaction-runners/transaction-runner";
import {QueryConstructor} from "../query-constructors/query-constructor";
import {EventQueries} from "../queries/event-queries";
import {SingleQueryConstructor} from "../query-constructors/single-query-constructor";
import {Assert} from "../../../../utils/assert";

export class EventRepositoryImpl implements EventRepository {
    private readonly transactionRunner: TransactionRunner<QueryConstructor>;
    private readonly eventQueries: EventQueries;

    constructor(transactionRunner: TransactionRunner<QueryConstructor>, eventQueries: EventQueries) {
        this.transactionRunner = transactionRunner;
        this.eventQueries = eventQueries;
    }

    public async createEvent(event: EventModel) : Promise<void> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.eventQueries.createEvent(
            event.eventId,
            event.name,
            event.description,
            event.studOrgId)
        );

        await this.transactionRunner.run(queryConstructors);
    };

    public async getEvent(eventId: string) : Promise<EventModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.eventQueries.getEvent(eventId));

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNull(results, `Event with ID ${eventId} not found`);

        const eventData = results[0][0];
        return {
            eventId: eventData.Id,
            name: eventData.Name,
            description: eventData.Description,
            studOrgId: eventData.StudOrgId
        };
    };

    public async editEvent(event: EventModel) : Promise<EventModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.eventQueries.editEvent(
            event.eventId,
            event.name,
            event.description,
            event.studOrgId)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNull(results, `Event with ID ${event.eventId} not found`);

        const eventData = results[0][0];
        return {
            eventId: eventData.Id,
            name: eventData.Name,
            description: eventData.Description,
            studOrgId: eventData.StudOrgId
        };
    };

    public async editEventName(editEventNameModel: EditEventNameModel) : Promise<EditEventNameModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.eventQueries.editEventName(
            editEventNameModel.eventId,
            editEventNameModel.name)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNull(results, `Event with ID ${editEventNameModel.eventId} not found`);

        const eventData = results[0][0];
        return {
            eventId: eventData.Id,
            name: eventData.Name
        };
    };

    public async editEventDescription(editEventDescriptionModel: EditEventDescriptionModel) : Promise<EditEventDescriptionModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.eventQueries.editEventDescription(
            editEventDescriptionModel.eventId,
            editEventDescriptionModel.description)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNull(results, `Event with ID ${editEventDescriptionModel.eventId} not found`);

        const eventData = results[0][0];
        return {
            eventId: eventData.Id,
            description: eventData.Description
        };
    };

    public async removeEvent(eventId: string): Promise<EventModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.eventQueries.removeEvent(eventId));

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNull(results, `Event with ID ${eventId} not found`);

        const eventData = results[0][0];
        return {
            eventId: eventData.eventId,
            name: eventData.name,
            description: eventData.description,
            studOrgId: eventData.studOrgId
        };
    };
}