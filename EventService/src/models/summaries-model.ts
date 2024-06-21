export interface SummariesModel {
    id: string;
    eventId: string;
    description: string;
    visitorAmount: number;
}

export interface CreateSummariesModel {
    eventId: string;
    description: string;
    visitorAmount: number;
}

export interface EditSummariesDescriptionModel {
    id: string;
    description: string;
}

export interface EditSummariesVisitorModel {
    id: string;
    visitorAmount: number;
}