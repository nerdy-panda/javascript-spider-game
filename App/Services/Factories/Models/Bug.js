import AnimalModelBaseFactory from "../AnimalModelBaseFactory.js";
import { default as Model } from "../../../Models/Bug.js";
export default class Bug extends AnimalModelBaseFactory {
    static instance(){
        return new Model(...AnimalModelBaseFactory.getDependencies());
    }
}