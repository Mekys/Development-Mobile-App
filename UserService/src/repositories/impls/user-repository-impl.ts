import {UserRepository} from "../user-repository";
import {TransactionRunner} from "../../../../database/transaction-runners/transaction-runner";
import {QueryConstructor} from "../../../../database/query-constructors/query-constructor";
import {UserQueries} from "../queries/user-queries";
import {SingleQueryConstructor} from "../../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../../utils/assert";
import {
    EditUserAdmissionYearModel, EditUserEmailModel, EditUserFullNameModel,
    EditUserMiddleNameModel,
    EditUserNameModel,
    EditUserPhoneNumberModel, EditUserSocialsModel, EditUserStudyProgramModel,
    EditUserSurnameModel,
    UserModel
} from "../../models/user-models";

export class UserRepositoryImpl implements UserRepository {
    private readonly transactionRunner: TransactionRunner<QueryConstructor>;
    private readonly userQueries: UserQueries;

    constructor(transactionRunner: TransactionRunner<QueryConstructor>, userQueries: UserQueries) {
        this.transactionRunner = transactionRunner;
        this.userQueries = userQueries;
    }
    public editUser = async(user: UserModel): Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUser(
            user.id,
            user.email,
            user.name,
            user.surname,
            user.middleName,
            user.phoneNumber,
            user.admissionYear,
            user.studyProgram,
            user.socials)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${user.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public editUserName = async(editUserNameModel: EditUserNameModel) : Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUserName(
            editUserNameModel.id,
            editUserNameModel.name)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${editUserNameModel.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public editUserSurname = async(editUserSurnameModel: EditUserSurnameModel) : Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUserSurname(
            editUserSurnameModel.id,
            editUserSurnameModel.surname)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${editUserSurnameModel.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public editUserMiddleName = async(editUserMiddleNameModel: EditUserMiddleNameModel) : Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUserMiddleName(
            editUserMiddleNameModel.id,
            editUserMiddleNameModel.middleName)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${editUserMiddleNameModel.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public editUserFullName = async(editUserFullNameModel: EditUserFullNameModel) : Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUserFullName(
            editUserFullNameModel.id,
            editUserFullNameModel.name,
            editUserFullNameModel.surname,
            editUserFullNameModel.middleName)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${editUserFullNameModel.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public editUserPhoneNumber = async(editUserPhoneNumberModel: EditUserPhoneNumberModel): Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUserPhoneNumber(
            editUserPhoneNumberModel.id,
            editUserPhoneNumberModel.phoneNumber)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${editUserPhoneNumberModel.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public editUserSocials = async(editUserSocialsModel: EditUserSocialsModel): Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUserSocials(
            editUserSocialsModel.id,
            editUserSocialsModel.socials)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${editUserSocialsModel.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public editUserAdmissionYear = async(editUserAdmissionYearModel: EditUserAdmissionYearModel): Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUserAdmissionYear(
            editUserAdmissionYearModel.id,
            editUserAdmissionYearModel.admissionYear)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${editUserAdmissionYearModel.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public editUserStudyProgram = async(editUserStudyProgramModel: EditUserStudyProgramModel): Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUserStudyProgram(
            editUserStudyProgramModel.id,
            editUserStudyProgramModel.studyProgram)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${editUserStudyProgramModel.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public editUserEmail = async(editUserEmailModel: EditUserEmailModel): Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.editUserEmail(
            editUserEmailModel.id,
            editUserEmailModel.email)
        );

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `User with ID ${editUserEmailModel.id} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };

    public removeUser = async(userId: string): Promise<UserModel> => {
        const queryConstructors: Array<SingleQueryConstructor> = new Array<SingleQueryConstructor>();

        queryConstructors.push(this.userQueries.removeUser(userId));

        const results = await this.transactionRunner.run(queryConstructors);

        Assert.notNullOrUndefined(results, `Event with ID ${userId} not found`);

        const userData = results[0][0];
        return {
            id: userData.Id,
            email: userData.Email,
            name: userData.Name,
            surname: userData.Surname,
            middleName: userData.MiddleName,
            phoneNumber: userData.PhoneNumber,
            admissionYear: userData.AdmissionYear,
            studyProgram: userData.StudyProgram,
            socials: userData.Socials
        };
    };
}