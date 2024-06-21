import {SingleQueryConstructor} from "../../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../../utils/assert";
import {UsersStudOrgQueries} from "../users-stud-org-queries";

export class UsersStudOrgQueriesPg implements UsersStudOrgQueries {
    private readonly insert: string =
        'INSERT INTO "user_studorg"("UserId","StudOrgId") VALUES($1, $2);';
    private readonly remove: string =
        'DELETE FROM "user_studorg" WHERE "UserId"=$1 AND "StudOrgId"=$2 RETURNING *;';

    public createUserStudOrgModel(studOrgId: string, userId: string) : SingleQueryConstructor {
        Assert.notNull(studOrgId, "Stud org id must not be null");
        Assert.notNull(userId, "User id must not be null")

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(studOrgId, userId);

        queryConstructor.setQuery(this.insert);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public removeUserStudOrgModel(studOrgId: string, userId: string): SingleQueryConstructor {
        Assert.notNull(studOrgId, "Stud org id must not be null");
        Assert.notNull(userId, "User id must not be null")

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(studOrgId, userId);

        queryConstructor.setQuery(this.remove);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };
}