import * as express from "express";
import initAllHandlers from "./initializer";
import Handler from "./handlers/BaseHandler/BaseHandler";

const app = express();

const handlers: Handler[] = initAllHandlers();

handlers.forEach((elem) =>{
    app.get(elem.path, elem.getHandler);
});

export default app;