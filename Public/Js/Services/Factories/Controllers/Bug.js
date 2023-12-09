import AnimalControllerBaseFactory from "../AnimalControllerBaseFactory.js";
import { default as Controller } from "../../../Controllers/Bug.js";
import { default as BugModelFactory } from "../Models/Bug.js";
export default class Bug extends AnimalControllerBaseFactory {
    static getModel() {
        return BugModelFactory.instance();
    }
    static instance() {
        return new Controller(Bug.getModel(), ...Bug.getDependencies());
    }
}
//# sourceMappingURL=Bug.js.map