export interface RoleModel {
    id: string;
    name: string;
    description: string;
}

export interface CreateRoleModel {
    name: string;
    description: string;
}

export interface EditRoleNameModel {
    id: string;
    name: string;
}

export interface EditRoleDescriptionModel {
    id: string;
    description: string;
}