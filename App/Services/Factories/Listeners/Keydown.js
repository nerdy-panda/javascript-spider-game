import KeyboardSingleton from "../../Singletons/KeyboardSingleton.js";
import {default as RealKeyDown} from "../../../Listeners/KeyDown.js";
import NerdUtility from "../../Singletons/NerdUtility.js";

export default class Keydown {
    static instance(){
        return new RealKeyDown(
            KeyboardSingleton.getInstance() ,
            NerdUtility.getInstance() ,
        );
    }
}