import {UserService} from "../user-service";
import {UserRepository} from "../../repositories/user-repository";
import {
    EditUserAdmissionYearModel, EditUserEmailModel,
    EditUserFullNameModel,
    EditUserMiddleNameModel,
    EditUserNameModel, EditUserPhoneNumberModel, EditUserSocialsModel, EditUserStudyProgramModel,
    EditUserSurnameModel,
    UserModel
} from "../../models/user-models";
import {Assert} from "../../../../utils/assert";
import {EventModel} from "../../../../EventService/src/models/event-models";

export class UserServiceImpl implements UserService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async editUser(userModel: UserModel): Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUser(userModel);
        Assert.notNull(updatedEvent, `User with ID ${userModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async editUserName(editUserNameModel: EditUserNameModel) : Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUserName(editUserNameModel);
        Assert.notNull(updatedEvent, `User with ID ${editUserNameModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async editUserSurname(editUserSurnameModel: EditUserSurnameModel) : Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUserSurname(editUserSurnameModel);
        Assert.notNull(updatedEvent, `User with ID ${editUserSurnameModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async editUserMiddleName(editUserMiddleNameModel: EditUserMiddleNameModel) : Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUserMiddleName(editUserMiddleNameModel);
        Assert.notNull(updatedEvent, `User with ID ${editUserMiddleNameModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async editUserFullName(editUserFullNameModel: EditUserFullNameModel) : Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUserFullName(editUserFullNameModel);
        Assert.notNull(updatedEvent, `User with ID ${editUserFullNameModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async editUserPhoneNumber(editUserPhoneNumberModel: EditUserPhoneNumberModel): Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUserPhoneNumber(editUserPhoneNumberModel);
        Assert.notNull(updatedEvent, `User with ID ${editUserPhoneNumberModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async editUserSocials(editUserSocialsModel: EditUserSocialsModel): Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUserSocials(editUserSocialsModel);
        Assert.notNull(updatedEvent, `User with ID ${editUserSocialsModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async editUserAdmissionYear(editUserAdmissionYearModel: EditUserAdmissionYearModel): Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUserAdmissionYear(editUserAdmissionYearModel);
        Assert.notNull(updatedEvent, `User with ID ${editUserAdmissionYearModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async editUserStudyProgram(editUserStudyProgramModel: EditUserStudyProgramModel): Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUserStudyProgram(editUserStudyProgramModel);
        Assert.notNull(updatedEvent, `User with ID ${editUserStudyProgramModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async editUserEmail(editUserEmailModel: EditUserEmailModel): Promise<UserModel> {
        const updatedEvent = await this.userRepository.editUserEmail(editUserEmailModel);
        Assert.notNull(updatedEvent, `User with ID ${editUserEmailModel.id} not found or could not be updated`);
        return updatedEvent;
    };

    public async removeUser(userId: string): Promise<UserModel> {
        const user: UserModel = await this.userRepository.removeUser(userId);
        Assert.notNull(user,`User with ID ${userId} not found or could not be updated`);
        return user;
    };
}