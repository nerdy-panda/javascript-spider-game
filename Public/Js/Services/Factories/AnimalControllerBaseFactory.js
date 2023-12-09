import { mustImplementMethod } from "../../Helpers/Utility.js";
import { mathUtilityInstance } from "../../Helpers/Factories.js";
export default class AnimalControllerBaseFactory {
    static getModel() {
        mustImplementMethod();
    }
    static getDependencies() {
        return [mathUtilityInstance()];
    }
}
//# sourceMappingURL=AnimalControllerBaseFactory.js.map