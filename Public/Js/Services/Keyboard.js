export default class Keyboard {
    detectDirectionByKeyCode(keyCode) {
        let direction = null;
        switch (keyCode) {
            case 65:
            case 37:
                direction = "left";
                break;
            case 68:
            case 39:
                direction = "right";
                break;
            case 87:
            case 38:
                direction = "top";
                break;
            case 83:
            case 40:
                direction = "down";
                break;
        }
        return direction;
    }
}
//# sourceMappingURL=Keyboard.js.map