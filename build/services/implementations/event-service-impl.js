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
exports.EventServiceImpl = void 0;
const assert_1 = require("../../utils/assert");
class EventServiceImpl {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    createEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.eventRepository.createEvent(event);
            return event;
        });
    }
    ;
    getEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.eventRepository.getEvent(eventId);
            assert_1.Assert.notNull(event, `Event with ID ${eventId} not found`);
            return event;
        });
    }
    ;
    editEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedEvent = yield this.eventRepository.editEvent(event);
            assert_1.Assert.notNull(updatedEvent, `Event with ID ${event.eventId} not found or could not be updated`);
            return updatedEvent;
        });
    }
    ;
    editEventName(editEventNameModel) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedEvent = yield this.eventRepository.editEventName(editEventNameModel);
            assert_1.Assert.notNull(updatedEvent, `Event with ID ${editEventNameModel.eventId} not found or could not be updated`);
            return updatedEvent;
        });
    }
    ;
    editEventDescription(editEventDescriptionModel) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedEvent = yield this.eventRepository.editEventDescription(editEventDescriptionModel);
            assert_1.Assert.notNull(updatedEvent, `Event with ID ${editEventDescriptionModel.eventId} not found or could not be updated`);
            return updatedEvent;
        });
    }
    ;
    removeEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.eventRepository.removeEvent(eventId);
            assert_1.Assert.notNull(event, `Event with ID ${eventId} not found or could not be deleted`);
            return event;
        });
    }
    ;
}
exports.EventServiceImpl = EventServiceImpl;
//# sourceMappingURL=event-service-impl.js.map