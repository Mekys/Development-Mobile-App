import {RoleStudOrgService} from "../role-stud-org-service";
import {RoleStudOrgRepository} from "../../repositories/role-stud-org-repository";
import {RoleStudOrgModel} from "../../models/role-stud-org-model";
import {Assert} from "../../../utils/assert";

export class RoleStudOrgServiceImpl implements RoleStudOrgService {
    private readonly roleStudOrgRepository: RoleStudOrgRepository;
    constructor(roleStudOrgRepository: RoleStudOrgRepository) {
        this.roleStudOrgRepository = roleStudOrgRepository;
    }

    public async createRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel> {
        await this.roleStudOrgRepository.createRoleStudOrgModel(roleStudOrgModel);
        return roleStudOrgModel;
    };

    public async removeRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel> {
        const roleStudOrg: RoleStudOrgModel = await this.roleStudOrgRepository.removeRoleStudOrgModel(roleStudOrgModel);
        Assert.notNull(roleStudOrg, `Role-StudOrg with StudOrg ID ${roleStudOrgModel.studOrgId} and User ID ${roleStudOrgModel.userId} not found or could not be deleted`);
        return roleStudOrg;
    };

    public async editRoleStudOrgModel(roleStudOrgModel: RoleStudOrgModel): Promise<RoleStudOrgModel> {
        const updatedRoleStudOrg: RoleStudOrgModel = await this.roleStudOrgRepository.editRoleStudOrgModel(roleStudOrgModel);
        Assert.notNull(updatedRoleStudOrg, `Role-StudOrg with StudOrg ID ${roleStudOrgModel.studOrgId} and User ID ${roleStudOrgModel.userId} not found or could not be deleted`);
        return updatedRoleStudOrg;
    };
}