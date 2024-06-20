import {
    EditUserAdmissionYearModel, EditUserEmailModel,
    EditUserFullNameModel,
    EditUserMiddleNameModel,
    EditUserNameModel, EditUserPhoneNumberModel, EditUserSocialsModel, EditUserStudyProgramModel,
    EditUserSurnameModel,
    UserModel
} from "../models/user-models";

export interface UserService {
    editUser(userModel: UserModel): Promise<UserModel>;
    editUserName(editUserNameModel: EditUserNameModel) : Promise<UserModel>;
    editUserSurname(editUserSurnameModel: EditUserSurnameModel) : Promise<UserModel>;
    editUserMiddleName(editUserMiddleNameModel: EditUserMiddleNameModel) : Promise<UserModel>;
    editUserFullName(editUserFullNameModel: EditUserFullNameModel) : Promise<UserModel>;
    editUserPhoneNumber(editUserPhoneNumberModel: EditUserPhoneNumberModel): Promise<UserModel>;
    editUserSocials(editUserSocialsModel: EditUserSocialsModel): Promise<UserModel>;
    editUserAdmissionYear(editUserAdmissionYearModel: EditUserAdmissionYearModel): Promise<UserModel>;
    editUserStudyProgram(editUserStudyProgramModel: EditUserStudyProgramModel): Promise<UserModel>;
    editUserEmail(editUserEmailModel: EditUserEmailModel): Promise<UserModel>;
    removeUser(userId: string): Promise<UserModel>;
}