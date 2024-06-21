import {SingleQueryConstructor} from "../../../database/query-constructors/single-query-constructor";

export interface StudOrgQueries {
    createStudOrg(studOrgId: string, name: string, description: string) : SingleQueryConstructor;
    editStudOrg(studOrgId: string, name: string, description: string): SingleQueryConstructor;
    editStudOrgName(studOrgId: string, name: string): SingleQueryConstructor;
    editStudOrgDescription(studOrgId: string,description: string): SingleQueryConstructor;
    getAllStudOrgs():SingleQueryConstructor;
    removeStudOrg(studOrgId: string): SingleQueryConstructor;
}
