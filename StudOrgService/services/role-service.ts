import {EditRoleDescriptionModel, EditRoleNameModel, RoleModel} from "../models/role-model";

export interface RoleService {
    createRole(roleModel: RoleModel): Promise<RoleModel>;
    removeRole(roleId: string): Promise<RoleModel>;
    editRole(roleModel: RoleModel): Promise<RoleModel>;
    editRoleName(editRoleNameModel: EditRoleNameModel) : Promise<RoleModel>;
    editRoleDescription(editRoleDescriptionModel: EditRoleDescriptionModel): Promise<RoleModel>;
}