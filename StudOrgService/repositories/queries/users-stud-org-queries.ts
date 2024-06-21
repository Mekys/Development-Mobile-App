import {SingleQueryConstructor} from "../../../database/query-constructors/single-query-constructor";

export interface UsersStudOrgQueries {
    createUserStudOrgModel(studOrgId: string, userId: string): SingleQueryConstructor;
    removeUserStudOrgModel(studOrgId: string, userId: string): SingleQueryConstructor;
}