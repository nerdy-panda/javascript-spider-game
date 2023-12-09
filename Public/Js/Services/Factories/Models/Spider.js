import { default as SpiderModel } from "../../../Models/Spider.js";
import AnimalModelBaseFactory from "../AnimalModelBaseFactory.js";
export default class Spider extends AnimalModelBaseFactory {
    static instance() {
        return new SpiderModel(...AnimalModelBaseFactory.getDependencies());
    }
}
//# sourceMappingURL=Spider.js.map