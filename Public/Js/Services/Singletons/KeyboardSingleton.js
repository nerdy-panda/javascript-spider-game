import { default as RealKeyboard } from "../Keyboard.js";
class KeyboardSingleton {
    static getInstance() {
        if (KeyboardSingleton.instance == null)
            KeyboardSingleton.instance = new RealKeyboard();
        return KeyboardSingleton.instance;
    }
}
KeyboardSingleton.instance = null;
export default KeyboardSingleton;
//# sourceMappingURL=KeyboardSingleton.js.map