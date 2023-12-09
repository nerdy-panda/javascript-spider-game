import { default as SpiderControllerFactory } from "./Spider.js";
import { default as BugControllerFactory } from "./Bug.js";
import { default as RealIndexController } from "../../../Controllers/IndexController.js";
import Keydown from "../Listeners/Keydown.js";
export default class IndexController {
    static instance() {
        const spiderController = SpiderControllerFactory.instance();
        const bugController = BugControllerFactory.instance();
        const keyDownListener = Keydown.instance();
        return new RealIndexController(spiderController, bugController, keyDownListener);
    }
}
//# sourceMappingURL=IndexController.js.map