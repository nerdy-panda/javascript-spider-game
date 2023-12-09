import MathUtilityFactory from "../Factories/MathUtilityFactory.js";
import MathUtility from "../MathUtility.js";
export default class MathUtilitySingleton {
    static instance = null ;
    /** @return MathUtility */
    static getInstance(){
        if (MathUtilitySingleton.instance==null)
            MathUtilitySingleton.instance = MathUtilityFactory.getInstance();
        return MathUtilitySingleton.instance;
    }
}