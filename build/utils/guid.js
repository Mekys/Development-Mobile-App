"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUID = void 0;
class GUID {
    constructor(str) {
        this.str = str || GUID.getNewGUIDString();
    }
    toString() {
        return this.str;
    }
    static getNewGUIDString() {
        // your favourite guid generation function could go here
        // ex: http://stackoverflow.com/a/8809472/188246
        let d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}
exports.GUID = GUID;
//# sourceMappingURL=guid.js.map