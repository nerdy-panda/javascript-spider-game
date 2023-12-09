import NerdMath from "../NerdMath.js";
class NerdMathSingleton {
    static getInstance() {
        if (NerdMath.instance == null)
            NerdMath.instance = new NerdMath();
        return NerdMath.instance;
    }
}
NerdMathSingleton.instance = null;
export default NerdMathSingleton;
//# sourceMappingURL=NerdMathSingleton.js.map