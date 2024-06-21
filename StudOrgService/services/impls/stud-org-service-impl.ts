import {Assert} from "../../../utils/assert";
import {StudOrgService} from "../stud-org-service";
import {StudOrgRepository} from "../../repositories/stud-org-repository";
import {EditStudOrgDescriptionModel, EditStudOrgNameModel, StudOrgModel} from "../../models/stud-org-models";

export class StudOrgServiceImpl implements StudOrgService {
    private readonly studOrgRepository: StudOrgRepository;

    constructor(studOrgRepository: StudOrgRepository) {
        this.studOrgRepository = studOrgRepository;
    }

    public async createStudOrg(studOrg: StudOrgModel) : Promise<StudOrgModel> {
        await this.studOrgRepository.createStudOrg(studOrg);
        return studOrg;
    };

    public async editStudOrg(studOrgModel: StudOrgModel): Promise<StudOrgModel> {
        const updatedStudOrg = await this.studOrgRepository.editStudOrg(studOrgModel);
        Assert.notNullOrUndefined(updatedStudOrg, `Studorg with StudOrg ID ${studOrgModel.id} not found or could not be updated`);
        return updatedStudOrg;
    };

    public async editStudOrgName(editStudOrgNameModel: EditStudOrgNameModel): Promise<StudOrgModel> {
        const updatedStudOrg = await this.studOrgRepository.editStudOrgName(editStudOrgNameModel);
        Assert.notNullOrUndefined(updatedStudOrg, `Studorg with StudOrg ID ${editStudOrgNameModel.id} not found or could not be updated`);
        return updatedStudOrg;
    };

    public async editStudOrgDescription(editStudOrgDescriptionModel: EditStudOrgDescriptionModel): Promise<StudOrgModel> {
        const updatedStudOrg = await this.studOrgRepository.editStudOrgDescription(editStudOrgDescriptionModel);
        Assert.notNullOrUndefined(updatedStudOrg, `Studorg with StudOrg ID ${editStudOrgDescriptionModel.id} not found or could not be updated`);
        return updatedStudOrg;
    };

    public async getAllStudOrgs():Promise<Array<StudOrgModel>> {
        const studOrgs: Array<StudOrgModel> = await this.studOrgRepository.getAllStudOrgs();
        Assert.notNullOrUndefined(studOrgs, `There are no studOrgs yet`);
        return studOrgs;
    };

    public async removeStudOrg(studOrgId: string): Promise<StudOrgModel> {
        const studOrg = await this.studOrgRepository.removeStudOrg(studOrgId);
        Assert.notNullOrUndefined(studOrg, `Studorg with StudOrg ID ${studOrgId} not found or could not be updated`);
        return studOrg;
    };
}