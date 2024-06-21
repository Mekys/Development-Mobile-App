import {UsersStudOrgService} from "../users-stud-org-service";
import {UsersStudOrgRepository} from "../../repositories/users-stud-org-repository";
import {UserStudOrgModel} from "../../models/user-stud-org-model";
import {Assert} from "../../../utils/assert";

export class UsersStudOrgServiceImpl implements UsersStudOrgService {
    private readonly usersStudOrgRepostory: UsersStudOrgRepository;

    constructor(usersStudOrgRepostory: UsersStudOrgRepository) {
        this.usersStudOrgRepostory = usersStudOrgRepostory;
    }

    public async createUserStudOrgModel(userStudOrgModel: UserStudOrgModel): Promise<UserStudOrgModel> {
        await this.usersStudOrgRepostory.createUserStudOrgModel(userStudOrgModel);
        return userStudOrgModel;
    };

    public async removeUserStudOrgModel(userStudOrgModel: UserStudOrgModel): Promise<UserStudOrgModel> {
        const usersStudOrg: UserStudOrgModel = await this.usersStudOrgRepostory.removeUserStudOrgModel(userStudOrgModel);
        Assert.notNull(usersStudOrg, `User-StudOrg with StudOrg ID ${userStudOrgModel.studOrgId} and User ID ${userStudOrgModel.userId} not found or could not be deleted`);
        return usersStudOrg;
    };
}