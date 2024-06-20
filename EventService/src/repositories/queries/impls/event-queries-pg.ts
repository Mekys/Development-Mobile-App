import {SingleQueryConstructor} from "../../query-constructors/single-query-constructor";
import {Assert} from "../../../../../utils/assert";
import {EventQueries} from "../event-queries";

export class EventQueriesPg implements EventQueries {
    private readonly insert: string =
        'INSERT INTO "event"("Id","Name", "Description", "StudOrgId") VALUES($1, $2, $3, $4);';
    private readonly get: string =
        'SELECT * FROM "event" WHERE "Id"=$1;';
    private readonly edit: string =
        'UPDATE "event" SET "Name"=$2, "Description"=$3, "StudOrgId"=$4 WHERE "Id"=$1 RETURNING *;';
    private readonly editName: string =
        'UPDATE "event" SET "Name"=$2 WHERE "Id"=$1 RETURNING "Id", "Name";';
    private readonly editDescription: string =
        'UPDATE "event" SET "Description"=$2 WHERE "Id"=$1 RETURNING "Id", "Description";';
    private readonly remove: string =
        'DELETE FROM "event" WHERE "Id"=$1 RETURNING *;';

    public createEvent(eventId: string, name: string, description: string, studOrgId: string): SingleQueryConstructor {
        Assert.notNull(name, "Event name must not be null");
        Assert.notNull(description, "Event description must not be null");
        Assert.notNull(studOrgId, "Event studOrgId must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(eventId, name, description, studOrgId);

        queryConstructor.setQuery(this.insert);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    }

    getEvent(id: string): SingleQueryConstructor {
        Assert.notNull(id, "Event id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id);

        queryConstructor.setQuery(this.get);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    }

    editEvent(id: string, name:string, description:string, studOrgId: string) : SingleQueryConstructor {
        Assert.notNull(name, "Event name must not be null");
        Assert.notNull(description, "Event description must not be null");
        Assert.notNull(studOrgId, "Event studOrgId must not be null");
        Assert.notNull(id, "Event id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, name, description, studOrgId);

        queryConstructor.setQuery(this.edit);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    }

    editEventName(id:string, newName:string): SingleQueryConstructor {
        Assert.notNull(newName, "Event name must not be null");
        Assert.notNull(id, "Event id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, newName);

        queryConstructor.setQuery(this.editName);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    }

    editEventDescription(id:string, newDescription:string): SingleQueryConstructor {
        Assert.notNull(newDescription, "Event description must not be null");
        Assert.notNull(id, "Event id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, newDescription);

        queryConstructor.setQuery(this.editDescription);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    }

    removeEvent(id: string) : SingleQueryConstructor {
        Assert.notNull(id, "Event id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id);

        queryConstructor.setQuery(this.remove);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    }
}