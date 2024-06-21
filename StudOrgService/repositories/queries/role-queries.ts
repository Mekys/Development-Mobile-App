import {SingleQueryConstructor} from "../../../database/query-constructors/single-query-constructor";

export interface RoleQueries {
    createRole(roleId: string, name: string, description: string): SingleQueryConstructor;
    removeRole(roleId: string): SingleQueryConstructor;
    editRole(roleId: string, name: string, description: string): SingleQueryConstructor;
    editRoleName(roleId: string, name: string) : SingleQueryConstructor;
    editRoleDescription(roleId: string, description: string): SingleQueryConstructor;
}