import { default as SpiderModelFactory } from "../Models/Spider.js";
import { default as SpiderController } from "../../../Controllers/Spider.js";
import { mathUtilityInstance } from "../../../Helpers/Factories.js";
import AnimalControllerBaseFactory from "../AnimalControllerBaseFactory.js";
export default class Spider extends AnimalControllerBaseFactory {
    static getModel() {
        return SpiderModelFactory.instance();
    }
    static instance() {
        return new SpiderController(Spider.getModel(), ...Spider.getDependencies());
    }
}
//# sourceMappingURL=Spider.js.map