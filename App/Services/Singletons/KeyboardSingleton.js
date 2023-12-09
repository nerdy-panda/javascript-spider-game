import { default as RealKeyboard } from "../Keyboard.js";
export default class KeyboardSingleton {
    static instance = null ;
    /**
     * @return RealKeyboard
     * */
    static getInstance(){
        if (KeyboardSingleton.instance==null)
            KeyboardSingleton.instance = new RealKeyboard() ;
        return KeyboardSingleton.instance;
    }

}