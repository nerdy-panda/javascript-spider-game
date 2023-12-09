import NerdMathSingleton from "../Services/Singletons/NerdMathSingleton.js";
import MathUtilitySingleton from "../Services/Singletons/MathUtilitySingleton.js";
import KeyboardSingleton from "../Services/Singletons/KeyboardSingleton.js";
import NerdUtility from "../Services/Singletons/NerdUtility.js";
import {default as SpiderModel} from "../Services/Factories/Models/Spider.js";
import NerdStringSingleton from "../Services/Singletons/NerdStringSingleton.js";
export function nerdMathInstance(){
    return NerdMathSingleton.getInstance();
}
export function mathUtilityInstance(){
    return MathUtilitySingleton.getInstance();
}
export function KeyboardInstance(){
    return KeyboardSingleton.getInstance();
}
export function nerdUtilityInstance(){
    return NerdUtility.getInstance();
}
export function spiderModelInstance(){
    return SpiderModel.instance();
}
export function nerdStringInstance(){
    return NerdStringSingleton.getInstance();
}