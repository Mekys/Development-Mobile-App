import {SingleQueryConstructor} from "../query-constructors/single-query-constructor";

export interface UserQueries {
    editUser(id: string, email: string, name: string, surname:string, middleName: string, phoneNumber: string, admissionYear: number, studyProgram: string, socials: string): SingleQueryConstructor;
    editUserName(id: string, name: string): SingleQueryConstructor;
    editUserSurname(id: string, surname: string): SingleQueryConstructor;
    editUserMiddleName(id: string, middleName: string): SingleQueryConstructor;
    editUserPhoneNumber(id: string, phoneNumber: string): SingleQueryConstructor;
    editUserSocials(id: string, socials: string): SingleQueryConstructor;
    editUserAdmissionYear(id: string, admissionYear: number): SingleQueryConstructor;
    editUserStudyProgram(id: string, studyProgram: string): SingleQueryConstructor;
    editUserEmail(id: string, email: string): SingleQueryConstructor;
    editUserFullName(id: string, name: string, surname: string, middleName: string): SingleQueryConstructor;
    removeUser(id: string): SingleQueryConstructor;
}