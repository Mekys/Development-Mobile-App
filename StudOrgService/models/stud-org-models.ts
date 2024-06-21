export interface StudOrgModel {
    id: string;
    name: string;
    description: string;
}

export interface CreateStudOrgModel {
    name: string;
    description: string;
}

export interface EditStudOrgNameModel {
    id: string;
    name: string;
}

export interface EditStudOrgDescriptionModel {
    id: string;
    description: string;
}