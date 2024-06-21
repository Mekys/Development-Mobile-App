import {SummariesQueries} from "../summaries-queries";
import {SingleQueryConstructor} from "../../../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../../../utils/assert";

export class SummariesQueriesPg implements SummariesQueries {
    private readonly insert: string =
        'INSERT INTO "summaries"("Id","EventId", "Description", "VisitorAmount") VALUES($1, $2, $3, $4);';
    private readonly get: string =
        'SELECT * FROM "summaries" WHERE "Id"=$1;';
    private readonly edit: string =
        'UPDATE "summaries" SET "Description"=$2, "VisitorAmount"=$3 WHERE "Id"=$1 RETURNING *;';
    private readonly editDescription: string =
        'UPDATE "summaries" SET "Description"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editVisitorAmount: string =
        'UPDATE "summaries" SET "VisitorAmount"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly remove: string =
        'DELETE FROM "summaries" WHERE "Id"=$1 RETURNING *;';

    public createSummaries(id: string, eventId: string, description: string, visitorAmount: number): SingleQueryConstructor {
        Assert.notNull(eventId, "Event id must not be null");
        Assert.notNull(description, "Summaries description must not be null");
        Assert.notNull(id, "Summaries id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, eventId, description, visitorAmount);

        queryConstructor.setQuery(this.insert);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editSummaries(id: string, eventId: string, description:string, visitorAmount:number) : SingleQueryConstructor {
        Assert.notNull(eventId, "Event id must not be null");
        Assert.notNull(description, "Summaries description must not be null");
        Assert.notNull(id, "Summaries id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, eventId, description, visitorAmount);

        queryConstructor.setQuery(this.edit);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editSummariesDescription(id:string, description:string): SingleQueryConstructor {
        Assert.notNull(description, "Summaries description must not be null");
        Assert.notNull(id, "Summaries id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, description);

        queryConstructor.setQuery(this.editDescription);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editSummariesVisitorAmount(id:string, visitorAmount:number): SingleQueryConstructor {
        Assert.notNull(id, "Summaries id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, visitorAmount);

        queryConstructor.setQuery(this.editVisitorAmount);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public removeSummaries(id: string) : SingleQueryConstructor {
        Assert.notNull(id, "Summaries id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id);

        queryConstructor.setQuery(this.remove);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public getSummaries(id: string) : SingleQueryConstructor {
        Assert.notNull(id, "Summaries id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id);

        queryConstructor.setQuery(this.get);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };
}