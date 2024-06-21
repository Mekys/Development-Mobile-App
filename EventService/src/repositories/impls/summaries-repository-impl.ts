import {TransactionRunner} from "../../../../database/transaction-runners/transaction-runner";
import {QueryConstructor} from "../../../../database/query-constructors/query-constructor";
import {SummariesRepository} from "../summaries-repository";
import {SummariesQueries} from "../queries/summaries-queries";
import {EditSummariesDescriptionModel, EditSummariesVisitorModel, SummariesModel} from "../../models/summaries-model";
import {SingleQueryConstructor} from "../../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../../utils/assert";

export class SummariesRepositoryImpl implements SummariesRepository {
    private readonly transactionRunner: TransactionRunner<QueryConstructor>;
    private readonly summariesQueries: SummariesQueries;

    constructor(transactionRunner: TransactionRunner<QueryConstructor>, summariesQueries: SummariesQueries) {
        this.transactionRunner = transactionRunner;
        this.summariesQueries = summariesQueries;
    }

    public async createSummaries(summaries: SummariesModel): Promise<void> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.summariesQueries.createSummaries(
            summaries.id,
            summaries.eventId,
            summaries.description,
            summaries.visitorAmount)
        );

        await this.transactionRunner.run(queryConstructors);
    };

    public async editSummaries(summaries: SummariesModel) : Promise<SummariesModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.summariesQueries.editSummaries(
            summaries.id,
            summaries.eventId,
            summaries.description,
            summaries.visitorAmount));

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Summaries with ID ${summaries.id} not found`);

        const summariesData = results[0][0];
        return {
            id: summariesData.Id,
            eventId: summariesData.EventId,
            description: summariesData.Description,
            visitorAmount: summariesData.VisitorAmount
        };
    };

    public async editSummariesDescription(editSummariesDescriptionModel: EditSummariesDescriptionModel): Promise<SummariesModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.summariesQueries.editSummariesDescription(
            editSummariesDescriptionModel.id,
            editSummariesDescriptionModel.description)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Summaries with ID ${editSummariesDescriptionModel.id} not found`);

        const summariesData = results[0][0];
        return {
            id: summariesData.Id,
            eventId: summariesData.EventId,
            description: summariesData.Description,
            visitorAmount: summariesData.VisitorAmount
        };
    };

    public async editSummariesVisitorAmount(editSummariesVisitorModel: EditSummariesVisitorModel): Promise<SummariesModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.summariesQueries.editSummariesVisitorAmount(
            editSummariesVisitorModel.id,
            editSummariesVisitorModel.visitorAmount)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Summaries with ID ${editSummariesVisitorModel.id} not found`);

        const summariesData = results[0][0];
        return {
            id: summariesData.Id,
            eventId: summariesData.EventId,
            description: summariesData.Description,
            visitorAmount: summariesData.VisitorAmount
        };
    };

    public async removeSummaries(id: string) : Promise<SummariesModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.summariesQueries.removeSummaries(id));

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Summaries with ID ${id} not found`);

        const summariesData = results[0][0];
        return {
            id: summariesData.Id,
            eventId: summariesData.EventId,
            description: summariesData.Description,
            visitorAmount: summariesData.VisitorAmount
        };
    };

    public async getSummaries(id:string) : Promise<SummariesModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.summariesQueries.getSummaries(id));

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Summaries with ID ${id} not found`);

        const summariesData = results[0][0];
        return {
            id: summariesData.Id,
            eventId: summariesData.EventId,
            description: summariesData.Description,
            visitorAmount: summariesData.VisitorAmount
        };
    };
}