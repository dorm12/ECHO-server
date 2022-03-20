import dor_handler from "./handlers/dor_handler/dor_handler";
import echo_handler from "./handlers/echo_handler/echo_handler";
import WhoAmIHandler from "./handlers/WhoAmI_handler/WhoAmI_handler";
import Handler from "./handlers/BaseHandler/BaseHandler";

function initAllHandlers(): Handler[] {
    const handlers: Handler[] = [];

    //handlers.push(new WhoamiHandler());
    handlers.push(new dor_handler());
    handlers.push(new WhoAmIHandler());
    handlers.push(new echo_handler());

    return handlers;
}

export default initAllHandlers;