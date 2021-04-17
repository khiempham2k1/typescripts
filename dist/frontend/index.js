"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.set("view engine", "ejs");
app.set('views', 'templates');
app.use('/assets', express_1.default.static(path_1.default.join('dist/backend')));
app.use('/', express_1.default.static(path_1.default.join('public')));
app.get('/board', (req, res) => {
    res.render('index', {});
});
app.get('/login', (req, res) => {
    res.render('login', {});
});
app.listen(4000, () => {
    console.log('localhost:4000');
});
//# sourceMappingURL=index.js.map