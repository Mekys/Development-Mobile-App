import {RoleStudOrgQueries} from "../role-stud-org-queries";
import {SingleQueryConstructor} from "../../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../../utils/assert";
import {RoleQueries} from "../role-queries";

export class RoleQueriesPg implements RoleQueries {
    private readonly insert: string =
        'INSERT INTO "role"("Id","Name","Description") VALUES($1, $2, $3);';
    private readonly remove: string =
        'DELETE FROM "role" WHERE "Id"=$1 RETURNING *;';
    private readonly edit: string =
        'UPDATE "role" SET "Name"=$2, "Description"=$3 WHERE "Id"=$1 RETURNING *;';
    private readonly editName: string =
        'UPDATE "role" SET "Name"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editDescription: string =
        'UPDATE "role" SET "Description"=$2 WHERE "Id"=$1 RETURNING *;';

    public createRole(roleId: string, name: string, description: string): SingleQueryConstructor {
        Assert.notNull(roleId, "Role id must not be null");
        Assert.notNull(name, "Role name must not be null");
        Assert.notNull(description, "Role description must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(roleId, name, description);

        queryConstructor.setQuery(this.insert);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public removeRole(roleId: string): SingleQueryConstructor {
        Assert.notNull(roleId, "Role id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(roleId);

        queryConstructor.setQuery(this.remove);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editRole(roleId: string, name: string, description: string): SingleQueryConstructor {
        Assert.notNull(roleId, "Role id must not be null");
        Assert.notNull(name, "Role name must not be null");
        Assert.notNull(description, "Role description must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(roleId, name, description);

        queryConstructor.setQuery(this.edit);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editRoleName(roleId: string, name: string): SingleQueryConstructor {
        Assert.notNull(roleId, "Role id must not be null");
        Assert.notNull(name, "Role name must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(roleId, name);

        queryConstructor.setQuery(this.editName);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editRoleDescription(roleId: string, description: string): SingleQueryConstructor {
        Assert.notNull(roleId, "Role id must not be null");
        Assert.notNull(description, "Role name must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(roleId, description);

        queryConstructor.setQuery(this.editDescription);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };
}