import { default as RealNerdUtility } from "../NerdUtility.js";
class NerdUtility {
    static getInstance() {
        if (NerdUtility.instance == null)
            NerdUtility.instance = new RealNerdUtility();
        return NerdUtility.instance;
    }
}
NerdUtility.instance = null;
export default NerdUtility;
//# sourceMappingURL=NerdUtility.js.map