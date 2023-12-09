export default class Keyboard {
    /**
     * this method get key code and if key code is :
     * a or left arrow return "left"
     * and if w or top arrow return "top"
     * and if s or down arrow return "down"
     * and if d or right arrow return "right"
     * */
    detectDirectionByKeyCode(keyCode){
        let direction = null ;
        switch (keyCode){
            case 65 :
            case 37 :
                direction = "left";
            break;

            case 68 :
            case 39 :
                direction = "right";
            break;

            case 87 :
            case 38 :
                direction = "top";
            break;

            case 83 :
            case 40 :
                direction = "down";
            break;
        }
        return direction;
    }
}