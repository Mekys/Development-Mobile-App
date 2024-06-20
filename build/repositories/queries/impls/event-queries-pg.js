"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventQueriesPg = void 0;
const single_query_constructor_1 = require("../../query-constructors/single-query-constructor");
const assert_1 = require("../../../utils/assert");
class EventQueriesPg {
    constructor() {
        this.insert = 'INSERT INTO event("Id","Name", "Description", "StudOrgId") VALUES($1, $2, $3, $4);';
        this.get = "SELECT * FROM event WHERE Id=$1 VALUES($1) RETURNING *;";
        this.edit = "UPDATE event SET Name=$2, Description=$3, StudOrgId=$4 WHERE Id=$1 VALUES($1,$2,$3,$4) RETURNING *;";
        this.editName = "UPDATE event SET Name=$2 WHERE Id=$1 VALUES($1,$2,$3,$4) RETURNING Id, Name;";
        this.editDescription = "UPDATE event SET Description=$2 WHERE Id=$1 VALUES($1,$2) RETURNING Id, Description;";
        this.remove = "DELETE FROM event WHERE Id=$1 VALUES($1) RETURNING *;";
    }
    createEvent(eventId, name, description, studOrgId) {
        assert_1.Assert.notNull(name, "Event name must not be null");
        assert_1.Assert.notNull(description, "Event description must not be null");
        assert_1.Assert.notNull(studOrgId, "Event studOrgId must not be null");
        const queryConstructor = new single_query_constructor_1.SingleQueryConstructor();
        const parameters = new Array(eventId, name, description, studOrgId);
        queryConstructor.setQuery(this.insert);
        queryConstructor.setParameters(parameters);
        return queryConstructor;
    }
    getEvent(id) {
        assert_1.Assert.notNull(id, "Event id must not be null");
        const queryConstructor = new single_query_constructor_1.SingleQueryConstructor();
        const parameters = new Array(id);
        queryConstructor.setQuery(this.get);
        queryConstructor.setParameters(parameters);
        return queryConstructor;
    }
    editEvent(id, name, description, studOrgId) {
        assert_1.Assert.notNull(name, "Event name must not be null");
        assert_1.Assert.notNull(description, "Event description must not be null");
        assert_1.Assert.notNull(studOrgId, "Event studOrgId must not be null");
        assert_1.Assert.notNull(id, "Event id must not be null");
        const queryConstructor = new single_query_constructor_1.SingleQueryConstructor();
        const parameters = new Array(id, name, description, studOrgId);
        queryConstructor.setQuery(this.edit);
        queryConstructor.setParameters(parameters);
        return queryConstructor;
    }
    editEventName(id, newName) {
        assert_1.Assert.notNull(newName, "Event name must not be null");
        assert_1.Assert.notNull(id, "Event id must not be null");
        const queryConstructor = new single_query_constructor_1.SingleQueryConstructor();
        const parameters = new Array(id, newName);
        queryConstructor.setQuery(this.editName);
        queryConstructor.setParameters(parameters);
        return queryConstructor;
    }
    editEventDescription(id, newDescription) {
        assert_1.Assert.notNull(newDescription, "Event description must not be null");
        assert_1.Assert.notNull(id, "Event id must not be null");
        const queryConstructor = new single_query_constructor_1.SingleQueryConstructor();
        const parameters = new Array(id, newDescription);
        queryConstructor.setQuery(this.editDescription);
        queryConstructor.setParameters(parameters);
        return queryConstructor;
    }
    removeEvent(id) {
        assert_1.Assert.notNull(id, "Event id must not be null");
        const queryConstructor = new single_query_constructor_1.SingleQueryConstructor();
        const parameters = new Array(id);
        queryConstructor.setQuery(this.remove);
        queryConstructor.setParameters(parameters);
        return queryConstructor;
    }
}
exports.EventQueriesPg = EventQueriesPg;
//# sourceMappingURL=event-queries-pg.js.map