import NerdString from "../NerdString.js";
export default class NerdStringSingleton {
    static instance = null ;
    /** @return NerdString */
    static getInstance(){
        if (NerdStringSingleton.instance==null)
            NerdStringSingleton.instance = new NerdString();
        return NerdStringSingleton.instance;
    }
}