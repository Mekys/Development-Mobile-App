import {SingleQueryConstructor} from "../../../database/query-constructors/single-query-constructor";
import {EditSummariesDescriptionModel, EditSummariesVisitorModel, SummariesModel} from "../models/summaries-model";

export interface SummariesRepository {
    createSummaries(summaries: SummariesModel): Promise<void>;
    editSummaries(summaries: SummariesModel) : Promise<SummariesModel>;
    editSummariesDescription(editSummariesDescriptionModel: EditSummariesDescriptionModel): Promise<SummariesModel>;
    editSummariesVisitorAmount(editSummariesVisitorModel: EditSummariesVisitorModel): Promise<SummariesModel>;
    removeSummaries(id: string) : Promise<SummariesModel>;
    getSummaries(id:string) : Promise<SummariesModel>;
}