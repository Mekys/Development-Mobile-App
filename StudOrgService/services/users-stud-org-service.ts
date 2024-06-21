import {UserStudOrgModel} from "../models/user-stud-org-model";

export interface UsersStudOrgService {
    createUserStudOrgModel(userStudOrgModel: UserStudOrgModel): Promise<UserStudOrgModel>;
    removeUserStudOrgModel(userStudOrgModel: UserStudOrgModel): Promise<UserStudOrgModel>;
}