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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./modules/user"));
const db_1 = require("./db/db");
const settings_1 = require("./utils/settings");
const system_1 = __importDefault(require("./modules/system"));
const questions_1 = __importDefault(require("./modules/questions"));
const app = (0, express_1.default)();
const port = parseInt(settings_1.PORT) || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/users", user_1.default);
app.use("/api/v1/system", system_1.default);
app.use("/api/v1/questions", questions_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield db_1.dataSource.initialize();
    if (db.isInitialized) {
        console.log(`Connected to the database 🚀`);
        console.log(`Server running on http://localhost:${port} 🚀`);
    }
    else {
        console.log(`Error connecting to database 🚫`);
    }
}));
//# sourceMappingURL=index.js.map