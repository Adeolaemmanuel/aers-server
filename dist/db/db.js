"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const settings_1 = require("../utils/settings");
const stages_entity_1 = __importDefault(require("../modules/system/entities/stages.entity"));
const designation_entity_1 = __importDefault(require("../modules/system/entities/designation.entity"));
const user_entity_1 = __importDefault(require("../modules/user/entities/user.entity"));
const questions_entity_1 = __importDefault(require("../modules/questions/entities/questions.entity"));
const answers_entity_1 = __importDefault(require("../modules/questions/entities/answers.entity"));
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    logging: process.env.ENV === "dev" ? true : false,
    database: settings_1.DB_NAME,
    username: settings_1.DB_USERNAME,
    host: settings_1.DB_HOST,
    port: parseInt(settings_1.DB_PORT),
    password: settings_1.DB_PASSWORD,
    url: settings_1.DB_URL,
    synchronize: false,
    logger: "debug",
    entities: [stages_entity_1.default, designation_entity_1.default, user_entity_1.default, questions_entity_1.default, answers_entity_1.default],
    migrations: [__dirname + "/migrations/*{.ts,.js}"],
});
//# sourceMappingURL=db.js.map