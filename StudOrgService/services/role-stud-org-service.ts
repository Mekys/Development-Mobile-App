import {RoleStudOrgModel} from "../models/role-stud-org-model";

export interface RoleStudOrgService {
    createRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel>;
    removeRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel>;
    editRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel>;
}