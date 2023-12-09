import NerdMath from "../NerdMath.js";

export default class NerdMathSingleton {
    static instance = null ;
    /** @return NerdMath */
    static getInstance(){
        if (NerdMath.instance==null)
            NerdMath.instance = new NerdMath();
        return NerdMath.instance;
    }
}