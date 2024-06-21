import {RoleStudOrgModel} from "../../models/role-stud-org-model";
import {SingleQueryConstructor} from "../../../database/query-constructors/single-query-constructor";

export interface RoleStudOrgQueries {
    createRoleStudOrgModel(userId: string, studOrgId: string, roleId: string): SingleQueryConstructor;
    removeRoleStudOrgModel(userId: string, studOrgId: string): SingleQueryConstructor;
    editRoleStudOrgModel(userId: string, studOrgId: string, roleId: string): SingleQueryConstructor;
}