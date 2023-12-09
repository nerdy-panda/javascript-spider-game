import NerdString from "../NerdString.js";
class NerdStringSingleton {
    static getInstance() {
        if (NerdStringSingleton.instance == null)
            NerdStringSingleton.instance = new NerdString();
        return NerdStringSingleton.instance;
    }
}
NerdStringSingleton.instance = null;
export default NerdStringSingleton;
//# sourceMappingURL=NerdStringSingleton.js.map