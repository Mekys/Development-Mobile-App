import {RoleStudOrgModel} from "../models/role-stud-org-model";

export interface RoleStudOrgRepository {
    createRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<void>;
    removeRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel>;
    editRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel>;
}