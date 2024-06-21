import {UsersStudOrgRepository} from "../users-stud-org-repository";
import {TransactionRunner} from "../../../database/transaction-runners/transaction-runner";
import {QueryConstructor} from "../../../database/query-constructors/query-constructor";
import {UsersStudOrgQueries} from "../queries/users-stud-org-queries";
import {UserStudOrgModel} from "../../models/user-stud-org-model";
import {SingleQueryConstructor} from "../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../utils/assert";

export class UsersStudOrgRepositoryImpl implements UsersStudOrgRepository {
    private readonly transactionRunner: TransactionRunner<QueryConstructor>;
    private readonly usersStudOrgQueries: UsersStudOrgQueries;

    constructor(transactionRunner:TransactionRunner<QueryConstructor>, usersStudOrgQueries: UsersStudOrgQueries) {
        this.transactionRunner = transactionRunner;
        this.usersStudOrgQueries = usersStudOrgQueries;
    }

    public async createUserStudOrgModel(userStudOrgModel: UserStudOrgModel): Promise<void> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.usersStudOrgQueries.createUserStudOrgModel(
            userStudOrgModel.userId,
            userStudOrgModel.studOrgId)
        );

        await this.transactionRunner.run(queryConstructors);
    };

    public async removeUserStudOrgModel(userStudOrgModel: UserStudOrgModel): Promise<UserStudOrgModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.usersStudOrgQueries.removeUserStudOrgModel(
            userStudOrgModel.userId,
            userStudOrgModel.studOrgId)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User-StudOrg with StudOrg ID ${userStudOrgModel.studOrgId} and User ID ${userStudOrgModel.userId} not found`);

        const roleStudOrgData = results[0][0];
        return {
            userId: roleStudOrgData.UserId,
            studOrgId: roleStudOrgData.StudOrgId
        };
    };
}