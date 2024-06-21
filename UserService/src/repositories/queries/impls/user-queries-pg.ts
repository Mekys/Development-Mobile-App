import {SingleQueryConstructor} from "../../../../../database/query-constructors/single-query-constructor";
import {Assert} from "../../../../../utils/assert";
import {UserQueries} from "../user-queries";

export class UserQueriesPg implements UserQueries {
    private readonly edit: string =
        'UPDATE "user" SET "Email"=$2, "Name"=$3, "Surname"=$4, "MiddleName"=$5, "PhoneNumber"=$6, "AdmissionYear"=$7, "StudyProgram"=$8, "Socials"=$9 WHERE "Id"=$1 RETURNING *;';
    private readonly editName: string =
        'UPDATE "user" SET "Name"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editSurname: string =
        'UPDATE "user" SET "Surname"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editMiddleName: string =
        'UPDATE "user" SET "MiddleName"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editFullName: string =
        'UPDATE "user" SET "Name"=$2, "Surname"=$3, "MiddleName"=$4 WHERE "Id"=$1 RETURNING *;';
    private readonly editPhoneNumber: string =
        'UPDATE "user" SET "PhoneNumber"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editEmail: string =
        'UPDATE "user" SET "Email"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editStudyProgram: string =
        'UPDATE "user" SET "StudyProgram"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editSocials: string =
        'UPDATE "user" SET "Socials"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly editAdmissionYear: string =
        'UPDATE "user" SET "AdmissionYear"=$2 WHERE "Id"=$1 RETURNING *;';
    private readonly remove: string =
        'DELETE FROM "user" WHERE "Id"=$1 RETURNING *;';

    public editUser(id: string, email: string, name: string, surname:string, middleName: string, phoneNumber: string, admissionYear: number, studyProgram: string, socials: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");
        Assert.notNull(email, "User email must not be null");
        Assert.notNull(name, "User name must not be null");
        Assert.notNull(surname, "User surname must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, email, name, surname, middleName, phoneNumber, admissionYear, studyProgram, socials);

        queryConstructor.setQuery(this.edit);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editUserName(id: string, name: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");
        Assert.notNull(name, "User name must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, name);

        queryConstructor.setQuery(this.editName);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editUserSurname(id: string, surname: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");
        Assert.notNull(surname, "User surname must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, surname);

        queryConstructor.setQuery(this.editSurname);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editUserMiddleName(id: string, middleName: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, middleName);

        queryConstructor.setQuery(this.editMiddleName);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editUserPhoneNumber(id: string, phoneNumber: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, phoneNumber);

        queryConstructor.setQuery(this.editPhoneNumber);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editUserSocials(id: string, socials: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, socials);

        queryConstructor.setQuery(this.editSocials);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editUserAdmissionYear(id: string, admissionYear: number): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, admissionYear);

        queryConstructor.setQuery(this.editAdmissionYear);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editUserStudyProgram(id: string, studyProgram: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, studyProgram);

        queryConstructor.setQuery(this.editStudyProgram);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editUserEmail(id: string, email: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, email);

        queryConstructor.setQuery(this.editEmail);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public editUserFullName(id: string, name: string, surname: string, middleName: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");
        Assert.notNull(name, "User name must not be null");
        Assert.notNull(surname, "User surname must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id, name, surname, middleName);

        queryConstructor.setQuery(this.editFullName);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };

    public removeUser(id: string): SingleQueryConstructor {
        Assert.notNull(id, "User id must not be null");

        const queryConstructor: SingleQueryConstructor = new SingleQueryConstructor();

        const parameters: Array<any> = new Array<any>(id);

        queryConstructor.setQuery(this.remove);
        queryConstructor.setParameters(parameters);

        return queryConstructor;
    };
}