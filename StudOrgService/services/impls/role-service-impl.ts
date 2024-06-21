import {RoleService} from "../role-service";
import {RoleRepository} from "../../repositories/role-repository";
import {EditRoleDescriptionModel, EditRoleNameModel, RoleModel} from "../../models/role-model";
import {Assert} from "../../../utils/assert";
import {EventModel} from "../../../EventService/src/models/event-models";

export class RoleServiceImpl implements RoleService {
    private readonly roleRepository: RoleRepository;

    constructor(roleRepository: RoleRepository) {
        this.roleRepository = roleRepository;
    }

    public async createRole(roleModel: RoleModel): Promise<RoleModel> {
        await this.roleRepository.createRole(roleModel);
        return roleModel;
    };

    public async removeRole(roleId: string): Promise<RoleModel> {
        const role: RoleModel = await this.roleRepository.removeRole(roleId);
        Assert.notNull(role, `Role with ID ${roleId} not found or could not be deleted`);
        return role;
    };

    public async editRole(roleModel: RoleModel): Promise<RoleModel> {
        const updatedRole: RoleModel = await this.roleRepository.editRole(roleModel);
        Assert.notNull(updatedRole, `Role with ID ${roleModel.id} not found or could not be updated`);
        return updatedRole;
    };

    public async editRoleName(editRoleNameModel: EditRoleNameModel) : Promise<RoleModel> {
        const updatedRole: RoleModel = await this.roleRepository.editRoleName(editRoleNameModel);
        Assert.notNull(updatedRole, `Role with ID ${editRoleNameModel.id} not found or could not be updated`);
        return updatedRole;
    };

    public async editRoleDescription(editRoleDescriptionModel: EditRoleDescriptionModel): Promise<RoleModel> {
        const updatedRole: RoleModel = await this.roleRepository.editRoleDescription(editRoleDescriptionModel);
        Assert.notNull(updatedRole, `Role with ID ${editRoleDescriptionModel.id} not found or could not be updated`);
        return updatedRole;
    };

}