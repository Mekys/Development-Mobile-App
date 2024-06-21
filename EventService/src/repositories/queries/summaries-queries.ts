import {SingleQueryConstructor} from "../../../../database/query-constructors/single-query-constructor";

export interface SummariesQueries {
    createSummaries(id: string, eventId: string, description: string, visitorAmount: number): SingleQueryConstructor;
    editSummaries(id: string, eventId: string, description:string, visitorAmount:number) : SingleQueryConstructor;
    editSummariesDescription(id:string, description:string): SingleQueryConstructor;
    editSummariesVisitorAmount(id:string, visitorAmount:number): SingleQueryConstructor;
    removeSummaries(id: string) : SingleQueryConstructor;
    getSummaries(id:string): SingleQueryConstructor;
}