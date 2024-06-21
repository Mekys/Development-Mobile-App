import {EditStudOrgDescriptionModel, EditStudOrgNameModel, StudOrgModel} from "../models/stud-org-models";

export interface StudOrgService {
    createStudOrg(studOrg: StudOrgModel) : Promise<StudOrgModel>;
    editStudOrg(studOrgModel: StudOrgModel): Promise<StudOrgModel>;
    editStudOrgName(editStudOrgNameModel: EditStudOrgNameModel): Promise<StudOrgModel>;
    editStudOrgDescription(editStudOrgDescriptionModel: EditStudOrgDescriptionModel): Promise<StudOrgModel>;
    getAllStudOrgs():Promise<Array<StudOrgModel>>;
    removeStudOrg(studOrgId: string): Promise<StudOrgModel>;
}