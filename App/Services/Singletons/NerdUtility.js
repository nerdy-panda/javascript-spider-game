import {default as RealNerdUtility} from "../NerdUtility.js";
export default class NerdUtility {
    static instance = null ;
    /**
     * @return RealNerdUtility
     * */
    static getInstance(){
        if (NerdUtility.instance==null)
            NerdUtility.instance = new RealNerdUtility() ;
        return NerdUtility.instance;
    }

}