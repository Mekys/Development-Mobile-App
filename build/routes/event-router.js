"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouter = void 0;
const express_1 = __importDefault(require("express"));
class EventRouter {
    constructor(eventController) {
        this.eventController = eventController;
        this.eventRouter = express_1.default.Router();
    }
    setRouter() {
        this.eventRouter.get("/get_event", this.eventController.getEvent);
        this.eventRouter.post("/edit_event", this.eventController.editEvent);
        this.eventRouter.post("/create_event", this.eventController.createEvent);
        this.eventRouter.delete("/remove_event", this.eventController.removeEvent);
        this.eventRouter.post("/edit_event_name", this.eventController.editEventName);
        this.eventRouter.post("/edit_event_description", this.eventController.editEventDescription);
    }
    getRouter() {
        return this.eventRouter;
    }
}
exports.EventRouter = EventRouter;
//# sourceMappingURL=event-router.js.map