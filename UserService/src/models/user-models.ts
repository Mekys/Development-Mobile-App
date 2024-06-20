export interface UserModel {
    id: string;
    email: string;
    name: string;
    surname: string;
    middleName: string;
    phoneNumber: string;
    admissionYear: number;
    studyProgram: string;
    socials: string;
}

export interface EditUserNameModel {
    id: string;
    name: string;
}

export interface EditUserSurnameModel {
    id: string;
    surname: string;
}
export interface EditUserMiddleNameModel {
    id: string;
    middleName: string;
}

export interface EditUserFullNameModel {
    id: string;
    name: string;
    surname:string;
    middleName: string;
}

export interface EditUserPhoneNumberModel {
    id: string;
    phoneNumber: string;
}

export interface EditUserAdmissionYearModel {
    id: string;
    admissionYear: number;
}

export interface EditUserStudyProgramModel {
    id: string;
    studyProgram: string;
}

export interface EditUserSocialsModel {
    id: string;
    socials: string;
}

export interface EditUserEmailModel {
    id: string;
    email: string;
}