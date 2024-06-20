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
exports.EventControllerImpl = void 0;
const error_handler_1 = require("../../utils/error-handler");
class EventControllerImpl {
    constructor(eventService) {
        this.getEvent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const eventId = req.body.eventId;
                const event = yield this.eventService.getEvent(eventId);
                this.setFullEventAPIResponse(res, event);
            }
            catch (err) {
                error_handler_1.ErrorHandler.setError(res, err);
            }
        });
        this.createEvent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const eventInput = req.body;
                const guid = crypto.randomUUID();
                const eventInputWithGuid = {
                    eventId: guid,
                    name: eventInput.name,
                    description: eventInput.description,
                    studOrgId: eventInput.studOrgId
                };
                yield this.eventService.createEvent(eventInputWithGuid);
                this.setFullEventAPIResponse(res, eventInputWithGuid);
            }
            catch (err) {
                error_handler_1.ErrorHandler.setError(res, err);
            }
        });
        this.editEvent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const event = req.body;
                const newEvent = yield this.eventService.editEvent(event);
                this.setFullEventAPIResponse(res, newEvent);
            }
            catch (err) {
                error_handler_1.ErrorHandler.setError(res, err);
            }
        });
        this.editEventName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const event = req.body;
                const newEvent = yield this.eventService.editEventName(event);
                this.setEditEventNameAPIResponse(res, newEvent);
            }
            catch (err) {
                error_handler_1.ErrorHandler.setError(res, err);
            }
        });
        this.editEventDescription = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const event = req.body;
                const newEvent = yield this.eventService.editEventDescription(event);
                this.setEditEventDescriptionAPIResponse(res, newEvent);
            }
            catch (err) {
                error_handler_1.ErrorHandler.setError(res, err);
            }
        });
        this.removeEvent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const eventId = req.body.eventId;
                const event = yield this.eventService.removeEvent(eventId);
                this.setFullEventAPIResponse(res, event);
            }
            catch (err) {
                error_handler_1.ErrorHandler.setError(res, err);
            }
        });
        this.eventService = eventService;
    }
    ;
    setFullEventAPIResponse(res, responseData) {
        res
            .status(200)
            .json(responseData);
    }
    setEditEventNameAPIResponse(res, responseData) {
        res
            .status(200)
            .json(responseData);
    }
    setEditEventDescriptionAPIResponse(res, responseData) {
        res
            .status(200)
            .json(responseData);
    }
}
exports.EventControllerImpl = EventControllerImpl;
//# sourceMappingURL=event-controller-impl.js.map