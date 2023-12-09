import Spider from "../Controllers/Spider.js";
import Keyboard from "../Services/Keyboard.js";
import Bug from "../Controllers/Bug.js";
import NerdUtility from "../Services/NerdUtility.js";
export default class KeyDown {
    constructor(keyboard, nerdUtility) {
        this.spiderController = null;
        this.bugController = null;
        this.keyboard = null;
        this.application = null;
        this.handle = (event) => {
            const keyCode = event.keyCode;
            const direction = this.getKeyboard().detectDirectionByKeyCode(keyCode);
            const directionIsNotNull = this.getNerdUtility().isExactlyNotNull(direction);
            if (directionIsNotNull && !this.getApplication().isDone) {
                this.moveSpider(direction);
                this.winCheck();
            }
        };
        this.keyboard = keyboard;
        this.nerdUtility = nerdUtility;
    }
    getNerdUtility() {
        return this.nerdUtility;
    }
    setSpiderController(spiderController) {
        this.spiderController = spiderController;
    }
    getSpiderController() {
        return this.spiderController;
    }
    setBugController(bug) {
        this.bugController = bug;
    }
    getBugController() {
        return this.bugController;
    }
    getKeyboard() {
        return this.keyboard;
    }
    setApplication(application) {
        this.application = application;
    }
    getApplication() {
        return this.application;
    }
    moveSpider(direction) {
        if (direction === "top")
            this.getSpiderController().moveTop();
        else if (direction === "down")
            this.getSpiderController().moveDown();
        else if (direction === "left")
            this.getSpiderController().moveLeft();
        else if (direction === "right")
            this.getSpiderController().moveRight();
    }
    winCheck() {
        const spiderIsNearBug = this.getSpiderController().getModel()
            .isNear(this.getBugController().getModel());
        if (spiderIsNearBug)
            this.getApplication().won();
    }
}
//# sourceMappingURL=KeyDown.js.map