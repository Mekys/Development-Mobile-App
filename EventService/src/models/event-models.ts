export interface EventModel {
    eventId: string;
    name: string;
    description: string;
    studentOrganizationId: number;
}

export interface EditEventNameModel {
    eventId: string;
    name: string;
}

export interface EditEventDescriptionModel {
    eventId: string;
    description: string;
}