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
const orango = require('orango');
const connectArangoDB = require("./connectors/connectArango");
const Router = require("./router");
const express = require('express');
const PORT = 3000;
// await is only valid in async functions
function connector(orango) {
    return __awaiter(this, void 0, void 0, function* () { return yield connectArangoDB(orango); });
}
const start = (port) => {
    try {
        const orangoInstance = orango.get("dev");
        connector(orangoInstance);
        const server = express();
        server.use("/", require('./router')(orangoInstance));
        server.listen(port, () => console.log(`Server Started on port: ${PORT}`));
    }
    catch (serverError) {
        console.error({
            ErrorNotice: 'A major fuckup took place with server startup! ☠️',
            ErrorPayload: serverError,
        });
    }
};
start(PORT);
