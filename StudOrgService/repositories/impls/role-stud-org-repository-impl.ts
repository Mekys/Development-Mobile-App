import {RoleStudOrgRepository} from "../role-stud-org-repository";
import {TransactionRunner} from "../../../database/transaction-runners/transaction-runner";
import {QueryConstructor} from "../../../database/query-constructors/query-constructor";
import {RoleStudOrgQueries} from "../queries/role-stud-org-queries";
import {RoleStudOrgModel} from "../../models/role-stud-org-model";
import {SingleQueryConstructor} from "../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../utils/assert";

export class RoleStudOrgRepositoryImpl implements RoleStudOrgRepository {
    private readonly transactionRunner: TransactionRunner<QueryConstructor>;
    private readonly roleStudOrgQueries: RoleStudOrgQueries;

    constructor(transactionRunner:TransactionRunner<QueryConstructor>, roleStudOrgQueries: RoleStudOrgQueries) {
        this.transactionRunner = transactionRunner;
        this.roleStudOrgQueries = roleStudOrgQueries;
    }

    public async createRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<void> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.roleStudOrgQueries.createRoleStudOrgModel(
            roleStudOrgModel.userId,
            roleStudOrgModel.studOrgId,
            roleStudOrgModel.roleId)
        );

        await this.transactionRunner.run(queryConstructors);
    };

    public async removeRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.roleStudOrgQueries.removeRoleStudOrgModel(
            roleStudOrgModel.userId,
            roleStudOrgModel.studOrgId)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Role-StudOrg with StudOrg ID ${roleStudOrgModel.studOrgId} and User ID ${roleStudOrgModel.userId} not found`);

        const roleStudOrgData = results[0][0];
        return {
            userId: roleStudOrgData.UserId,
            studOrgId: roleStudOrgData.StudOrgId,
            roleId: roleStudOrgData.RoleId
        };
    };

    public async editRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.roleStudOrgQueries.editRoleStudOrgModel(
            roleStudOrgModel.userId,
            roleStudOrgModel.studOrgId,
            roleStudOrgModel.roleId)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Role-StudOrg with StudOrg ID ${roleStudOrgModel.studOrgId} and User ID ${roleStudOrgModel.userId} not found`);

        const roleStudOrgData = results[0][0];
        return {
            userId: roleStudOrgData.UserId,
            studOrgId: roleStudOrgData.StudOrgId,
            roleId: roleStudOrgData.RoleId
        };
    };

}