import MathUtility from "../MathUtility.js";
import { nerdMathInstance } from "../../Helpers/Factories.js";
export default class MathUtilityFactory {
    static getInstance() {
        return new MathUtility(nerdMathInstance());
    }
}
//# sourceMappingURL=MathUtilityFactory.js.map