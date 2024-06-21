import {TransactionRunner} from "../../../database/transaction-runners/transaction-runner";
import {QueryConstructor} from "../../../database/query-constructors/query-constructor";
import {RoleRepository} from "../role-repository";
import {RoleQueries} from "../queries/role-queries";
import {EditRoleDescriptionModel, EditRoleNameModel, RoleModel} from "../../models/role-model";
import {SingleQueryConstructor} from "../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../utils/assert";

export class RoleRepositoryImpl implements RoleRepository {
    private readonly transactionRunner: TransactionRunner<QueryConstructor>;
    private readonly roleQueries: RoleQueries;

    constructor(transactionRunner: TransactionRunner<QueryConstructor>, roleQueries: RoleQueries) {
        this.transactionRunner = transactionRunner;
        this.roleQueries = roleQueries;
    }

    public async createRole(roleModel: RoleModel): Promise<void> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.roleQueries.createRole(
            roleModel.id,
            roleModel.name,
            roleModel.description)
        );

        await this.transactionRunner.run(queryConstructors);
    };

    public async removeRole(roleId: string): Promise<RoleModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.roleQueries.removeRole(roleId)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Role with ID ${roleId} not found`);

        const roleData = results[0][0];
        return {
            id: roleData.Id,
            name: roleData.Name,
            description: roleData.Description
        };
    };

    public async editRole(roleModel: RoleModel): Promise<RoleModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.roleQueries.editRole(
            roleModel.id,
            roleModel.name,
            roleModel.description)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Role with ID ${roleModel.id} not found`);

        const roleData = results[0][0];
        return {
            id: roleData.Id,
            name: roleData.Name,
            description: roleData.Description
        };
    };

    public async editRoleName(editRoleNameModel: EditRoleNameModel) : Promise<RoleModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.roleQueries.editRoleName(
            editRoleNameModel.id,
            editRoleNameModel.name)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Role with ID ${editRoleNameModel.id} not found`);

        const roleData = results[0][0];
        return {
            id: roleData.Id,
            name: roleData.Name,
            description: roleData.Description
        };
    };

    public async editRoleDescription(editRoleDescriptionModel: EditRoleDescriptionModel): Promise<RoleModel> {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.roleQueries.editRoleDescription(
            editRoleDescriptionModel.id,
            editRoleDescriptionModel.description)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Role with ID ${editRoleDescriptionModel.id} not found`);

        const roleData = results[0][0];
        return {
            id: roleData.Id,
            name: roleData.Name,
            description: roleData.Description
        };
    };


}