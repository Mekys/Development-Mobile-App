import {StudOrgQueries} from "../stud-org-queries";
import {SingleQueryConstructor} from "../../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../../utils/assert";

export class StudOrgQueriesPg implements StudOrgQueries {
    private readonly insert: string =
        'INSERT INTO "studorg"("Id","Name", "Description") VALUES($1, $2, $3);';
    private readonly getAll: string =
        'SELECT * FROM "studorg";';
    private readonly edit: string =
        'UPDATE "studorg" SET "Name"=$2, "Description"=$3 WHERE "Id"=$1 RETURNING *;';
    private readonly editName: string =
        'UPDATE "studorg" SET "Name"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editDescription: string =
        'UPDATE "studorg" SET "Description"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly remove: string =
        'DELETE FROM "studorg" WHERE "Id"=$1 RETURNING *;';

    public createStudOrg(studOrgId: string, name: string, description: string) : SingleQueryConstructor {
        Assert.notNull(studOrgId, "Stud org id must not be null");
        Assert.notNull(name, "Stud org name must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(studOrgId, name, description);

        queryConstructor.setQuery(this.insert);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editStudOrg(studOrgId: string, name: string, description: string): SingleQueryConstructor {
        Assert.notNull(name, "StudOrg name must not be null");
        Assert.notNull(description, "StudOrgId description must not be null");
        Assert.notNull(studOrgId, "StudOrg id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(studOrgId, name, description);

        queryConstructor.setQuery(this.edit);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editStudOrgName(studOrgId: string, name: string): SingleQueryConstructor {
        Assert.notNull(name, "StudOrg name must not be null");
        Assert.notNull(studOrgId, "StudOrg id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(studOrgId, name);

        queryConstructor.setQuery(this.editName);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editStudOrgDescription(studOrgId: string,description: string): SingleQueryConstructor {
        Assert.notNull(description, "StudOrg description must not be null");
        Assert.notNull(studOrgId, "StudOrg id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(studOrgId, description);

        queryConstructor.setQuery(this.editDescription);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public getAllStudOrgs():SingleQueryConstructor {
        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>();

        queryConstructor.setQuery(this.getAll);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public removeStudOrg(studOrgId: string): SingleQueryConstructor {
        Assert.notNull(studOrgId, "StudOrg id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(studOrgId);

        queryConstructor.setQuery(this.remove);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };
}