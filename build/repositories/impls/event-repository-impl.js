"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRepositoryImpl = void 0;
const ts_data_json_1 = require("ts.data.json");
const assert_1 = require("../../utils/assert");
class EventRepositoryImpl {
    constructor(transactionRunner, eventQueries) {
        this.eventDecoder = ts_data_json_1.JsonDecoder.object({
            eventId: ts_data_json_1.JsonDecoder.string,
            name: ts_data_json_1.JsonDecoder.string,
            description: ts_data_json_1.JsonDecoder.string,
            studOrgId: ts_data_json_1.JsonDecoder.string
        }, 'EventDB');
        this.handlingEditEventQueryResult = (queryResult) => __awaiter(this, void 0, void 0, function* () {
            const respond = yield this.eventDecoder.decodeToPromise(queryResult.rows[0])
                .then((eventDB) => {
                return eventDB;
            });
            return respond;
        });
        this.transactionRunner = transactionRunner;
        this.eventQueries = eventQueries;
    }
    createEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConstructors = new Array();
            queryConstructors.push(this.eventQueries.createEvent(event.eventId, event.name, event.description, event.studOrgId));
            yield this.transactionRunner.run(queryConstructors);
        });
    }
    ;
    getEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConstructors = new Array();
            queryConstructors.push(this.eventQueries.getEvent(eventId));
            const results = yield this.transactionRunner.run(queryConstructors);
            assert_1.Assert.notNull(results, `Event with ID ${eventId} not found`);
            const eventData = results[0][0];
            return {
                eventId: eventData.eventId,
                name: eventData.name,
                description: eventData.description,
                studOrgId: eventData.studOrgId
            };
        });
    }
    ;
    editEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConstructors = new Array();
            queryConstructors.push(this.eventQueries.editEvent(event.eventId, event.name, event.description, event.studOrgId));
            const results = yield this.transactionRunner.run(queryConstructors);
            assert_1.Assert.notNull(results, `Event with ID ${event.eventId} not found`);
            const eventData = results[0][0];
            return {
                eventId: eventData.eventId,
                name: eventData.name,
                description: eventData.description,
                studOrgId: eventData.studOrgId
            };
        });
    }
    ;
    editEventName(editEventNameModel) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConstructors = new Array();
            queryConstructors.push(this.eventQueries.editEventName(editEventNameModel.eventId, editEventNameModel.name));
            const results = yield this.transactionRunner.run(queryConstructors);
            assert_1.Assert.notNull(results, `Event with ID ${editEventNameModel.eventId} not found`);
            const eventData = results[0][0];
            return {
                eventId: eventData.eventId,
                name: eventData.name
            };
        });
    }
    ;
    editEventDescription(editEventDescriptionModel) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConstructors = new Array();
            queryConstructors.push(this.eventQueries.editEventDescription(editEventDescriptionModel.eventId, editEventDescriptionModel.description));
            const results = yield this.transactionRunner.run(queryConstructors);
            assert_1.Assert.notNull(results, `Event with ID ${editEventDescriptionModel.eventId} not found`);
            const eventData = results[0][0];
            return {
                eventId: eventData.eventId,
                description: eventData.description
            };
        });
    }
    ;
    removeEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryConstructors = new Array();
            queryConstructors.push(this.eventQueries.removeEvent(eventId));
            const results = yield this.transactionRunner.run(queryConstructors);
            assert_1.Assert.notNull(results, `Event with ID ${eventId} not found`);
            const eventData = results[0][0];
            return {
                eventId: eventData.eventId,
                name: eventData.name,
                description: eventData.description,
                studOrgId: eventData.studOrgId
            };
        });
    }
    ;
}
exports.EventRepositoryImpl = EventRepositoryImpl;
//# sourceMappingURL=event-repository-impl.js.map