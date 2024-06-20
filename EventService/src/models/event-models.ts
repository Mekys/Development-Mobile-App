export interface EventModel {
    eventId: string;
    name: string;
    description: string;
    studOrgId: string;
}

export interface CreateEventModel {
    name: string;
    description: string;
    studOrgId: string;
}

export interface EditEventNameModel {
    eventId: string;
    name: string;
}

export interface EditEventDescriptionModel {
    eventId: string;
    description: string;
}