import {StudOrgRepository} from "../stud-org-repository";
import {TransactionRunner} from "../../../database/transaction-runners/transaction-runner";
import {QueryConstructor} from "../../../database/query-constructors/query-constructor";
import {StudOrgQueries} from "../queries/stud-org-queries";
import {
    EditStudOrgDescriptionModel,
    EditStudOrgNameModel,
    StudOrgModel
} from "../../models/stud-org-models";
import {SingleQueryConstructor} from "../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../utils/assert";

export class StudOrgRepositoryImpl implements StudOrgRepository {
    private readonly transactionRunner: TransactionRunner<QueryConstructor>;
    private readonly studOrgQueries: StudOrgQueries;

    constructor(transactionRunner: TransactionRunner<QueryConstructor>, studOrgQueries: StudOrgQueries) {
        this.transactionRunner = transactionRunner;
        this.studOrgQueries = studOrgQueries;
    }

    public async createStudOrg(studOrg: StudOrgModel) : Promise<void> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.studOrgQueries.createStudOrg(
            studOrg.id,
            studOrg.name,
            studOrg.description)
        );

        await this.transactionRunner.run(queryConstructors);
    };

    public async editStudOrg(studOrgModel: StudOrgModel): Promise<StudOrgModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.studOrgQueries.editStudOrg(
            studOrgModel.id,
            studOrgModel.name,
            studOrgModel.description)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `StudOrg with ID ${studOrgModel.id} not found`);

        const studOrgData = results[0][0];
        return {
            id: studOrgData.Id,
            name: studOrgData.Name,
            description: studOrgData.Description
        };
    };

    public async editStudOrgName(editStudOrgNameModel: EditStudOrgNameModel): Promise<StudOrgModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.studOrgQueries.editStudOrgName(
            editStudOrgNameModel.id,
            editStudOrgNameModel.name)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `StudOrg with ID ${editStudOrgNameModel.id} not found`);

        const studOrgData = results[0][0];
        return {
            id: studOrgData.Id,
            name: studOrgData.Name,
            description: studOrgData.Description
        };
    };

    public async editStudOrgDescription(editStudOrgDescriptionModel: EditStudOrgDescriptionModel): Promise<StudOrgModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.studOrgQueries.editStudOrgDescription(
            editStudOrgDescriptionModel.id,
            editStudOrgDescriptionModel.description)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `StudOrg with ID ${editStudOrgDescriptionModel.id} not found`);

        const studOrgData = results[0][0];
        return {
            id: studOrgData.Id,
            name: studOrgData.Name,
            description: studOrgData.Description
        };
    };

    public async getAllStudOrgs():Promise<Array<StudOrgModel>> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.studOrgQueries.getAllStudOrgs());

        const results = await this.transactionRunner.run(queryConstructors);

        const studOrgData = results[0];
        const studOrgModels = studOrgData.map((data: any) => ({
            id: data.Id,
            name: data.Name,
            description: data.Description
        }));

        return studOrgModels;
    };

    public async removeStudOrg(studOrgId: string): Promise<StudOrgModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.studOrgQueries.removeStudOrg(
            studOrgId)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `StudOrg with ID ${studOrgId} not found`);

        const studOrgData = results[0][0];
        return {
            id: studOrgData.Id,
            name: studOrgData.Name,
            description: studOrgData.Description
        };
    };

}