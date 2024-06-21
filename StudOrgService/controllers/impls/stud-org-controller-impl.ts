import {StudOrgController} from "../stud-org-controller";
import {StudOrgService} from "../../services/stud-org-service";
import {Request, Response} from "express";
import {ErrorHandler} from "../../../utils/error-handler";
import {
    CreateStudOrgModel,
    EditStudOrgDescriptionModel,
    EditStudOrgNameModel,
    StudOrgModel
} from "../../models/stud-org-models";
import {EditEventNameModel} from "../../../EventService/src/models/event-models";
import {CreateRoleModel, RoleModel} from "../../models/role-model";

export class StudOrgControllerImpl implements StudOrgController {
    private readonly studOrgService: StudOrgService;

    constructor(studOrgService: StudOrgService) {
        this.studOrgService = studOrgService;
    }

    public createStudOrg = async(req: Request, res:Response): Promise<void> => {
        try {
            const studOrgInput: CreateStudOrgModel = req.body;
            const guid: string = crypto.randomUUID();

            const studOrgInputWithGuid: RoleModel = {
                id: guid,
                name: studOrgInput.name,
                description: studOrgInput.description
            }
            await this.studOrgService.createStudOrg(studOrgInputWithGuid);
            this.setAPIResponse(res, studOrgInputWithGuid);
        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editStudOrg = async(req: Request, res:Response): Promise<void> => {
        try {
            const studOrgModel: StudOrgModel = req.body;

            await this.studOrgService.editStudOrg(studOrgModel);
            this.setAPIResponse(res, studOrgModel);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editStudOrgName = async(req: Request, res:Response): Promise<void> => {
        try {
            const editStudOrgNameModel: EditStudOrgNameModel = req.body;
            const newStudOrg: StudOrgModel = await this.studOrgService.editStudOrgName(editStudOrgNameModel);
            this.setAPIResponse(res, newStudOrg);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public editStudOrgDescription = async(req: Request, res:Response): Promise<void> => {
        try {
            const editStudOrgDescriptionModel: EditStudOrgDescriptionModel = req.body;
            const newStudOrg: StudOrgModel = await this.studOrgService.editStudOrgDescription(editStudOrgDescriptionModel);
            this.setAPIResponse(res, newStudOrg);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public getAllStudOrgs = async(req: Request, res:Response): Promise<void> => {
        try {
            const studOrgs: Array<StudOrgModel> = await this.studOrgService.getAllStudOrgs();
            this.setAPIManyResponse(res, studOrgs);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    public removeStudOrg = async(req: Request, res:Response): Promise<void> => {
        try {
            const studOrgId: string = req.body.id;
            const studOrg: StudOrgModel = await this.studOrgService.removeStudOrg(studOrgId);
            this.setAPIResponse(res, studOrg);

        } catch (err: any) {
            ErrorHandler.setError(res, err);
        }
    };

    private setAPIResponse(res: Response, responseData: StudOrgModel): void {
        res
            .status(200)
            .json(responseData);
    }

    private setAPIManyResponse(res: Response, responseData: Array<StudOrgModel>): void {
        res
            .status(200)
            .json(responseData);
    }
}