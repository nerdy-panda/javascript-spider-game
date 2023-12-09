import MathUtilityFactory from "../Factories/MathUtilityFactory.js";
import MathUtility from "../MathUtility.js";
class MathUtilitySingleton {
    static getInstance() {
        if (MathUtilitySingleton.instance == null)
            MathUtilitySingleton.instance = MathUtilityFactory.getInstance();
        return MathUtilitySingleton.instance;
    }
}
MathUtilitySingleton.instance = null;
export default MathUtilitySingleton;
//# sourceMappingURL=MathUtilitySingleton.js.map