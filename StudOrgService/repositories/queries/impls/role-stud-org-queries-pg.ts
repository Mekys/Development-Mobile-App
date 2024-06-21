import {UsersStudOrgQueries} from "../users-stud-org-queries";
import {SingleQueryConstructor} from "../../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../../utils/assert";
import {RoleStudOrgQueries} from "../role-stud-org-queries";

export class RoleStudOrgQueriesPg implements RoleStudOrgQueries {
    private readonly insert: string =
        'INSERT INTO "role_studorg"("UserId","StudOrgId","RoleId") VALUES($1, $2, $3);';
    private readonly remove: string =
        'DELETE FROM "role_studorg" WHERE "UserId"=$1 AND "StudOrgId"=$2 RETURNING *;';
    private readonly edit: string =
        'UPDATE "role_studorg" SET "RoleId"=$3 WHERE "UserId"=$1 AND "StudOrgId"=$2 RETURNING *;';

    public createRoleStudOrgModel(userId: string, studOrgId: string, roleId: string): SingleQueryConstructor {
        Assert.notNull(userId, "User id must not be null");
        Assert.notNull(studOrgId, "Stud org id must not be null");
        Assert.notNull(roleId, "Role id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(userId, studOrgId, roleId);

        queryConstructor.setQuery(this.insert);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editRoleStudOrgModel(userId: string, studOrgId: string, roleId: string): SingleQueryConstructor {
        Assert.notNull(userId, "User id must not be null");
        Assert.notNull(studOrgId, "Stud org id must not be null");
        Assert.notNull(roleId, "Role id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(userId, studOrgId, roleId);

        queryConstructor.setQuery(this.edit);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public removeRoleStudOrgModel(userId: string, studOrgId: string): SingleQueryConstructor {
        Assert.notNull(studOrgId, "Stud org id must not be null");
        Assert.notNull(userId, "User id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(userId, studOrgId);

        queryConstructor.setQuery(this.remove);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };
}

