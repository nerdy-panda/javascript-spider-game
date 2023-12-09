import Spider from "../Controllers/Spider.js";
import Keyboard from "../Services/Keyboard.js";
import Bug from "../Controllers/Bug.js";
import NerdUtility from "../Services/NerdUtility.js";
export default class KeyDown {
    spiderController = null ;
    bugController = null ;
    keyboard = null ;
    application = null ;
    constructor(keyboard,nerdUtility) {
        this.keyboard = keyboard ;
        this.nerdUtility = nerdUtility ;
    }
    handle = (event) => {
        const keyCode = event.keyCode;
        const direction = this.getKeyboard().detectDirectionByKeyCode(keyCode);
        const directionIsNotNull = this.getNerdUtility().isExactlyNotNull(direction);
        if (directionIsNotNull && !this.getApplication().isDone){
            this.moveSpider(direction);
            this.winCheck();
        }
    }
    /** @return NerdUtility */
    getNerdUtility(){
        return this.nerdUtility;
    }
    setSpiderController(spiderController){
        this.spiderController = spiderController;
    }
    /** @return Spider*/
    getSpiderController(){
        return this.spiderController;
    }
    setBugController(bug){
        this.bugController = bug ;
    }
    /** @return Bug */
    getBugController(){
        return this.bugController;
    }
    /** @return Keyboard*/
    getKeyboard() {
        return this.keyboard ;
    }
    setApplication(application){
        this.application = application ;
    }
    /** @return Application */
    getApplication(){
        return this.application;
    }
    moveSpider(direction){
        if (direction==="top")
            this.getSpiderController().moveTop();
        else if (direction==="down")
            this.getSpiderController().moveDown();
        else if (direction==="left")
            this.getSpiderController().moveLeft();
        else if (direction==="right")
            this.getSpiderController().moveRight();
    }

    winCheck() {
        const spiderIsNearBug = this.getSpiderController().getModel()
                                    .isNear(this.getBugController().getModel());
        if (spiderIsNearBug)
            this.getApplication().won();
    }
    // won() {
    //     this.getApplication().isDone = true ;
    //     this.getSpiderController().wine();
    //     this.getBugController().lose();
    //     setTimeout(()=>{
    //         this.getBugController().dead();
    //     },500);
    //     setTimeout(()=>{
    //         const playAgain = window.confirm("congratulations your won !!! Do you want to play again ??");
    //         if (!playAgain)
    //             return ;
    //         this.getApplication().isDone = false;
    //         this.getApplication().restart();
    //     },800);
    // }
}