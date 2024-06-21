
import {UserStudOrgModel} from "../models/user-stud-org-model";

export interface UsersStudOrgRepository {
    createUserStudOrgModel(userStudOrgModel: UserStudOrgModel): Promise<void>;
    removeUserStudOrgModel(userStudOrgModel: UserStudOrgModel): Promise<UserStudOrgModel>;
}