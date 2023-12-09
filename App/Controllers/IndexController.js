import Spider from "./Spider.js";
import KeyDown from "../Listeners/KeyDown.js";
import Bug from "./Bug.js";

import TimeUnitMilliseconds from "../Enum/TimeUnitMilliseconds.js";
import {WIN_TIME_Minute} from "../Config/App.js";
import CountDown from "../Services/CountDown.js";
import NerdDate from "../Services/NerdDate.js";
import TimestampDiffPrinter from "../Subscribers/TimestampDiffPrinter.js";
import BugWine from "../Subscribers/BugWine.js";

export default class IndexController {
    isDone = false ;
    spiderController = null ;
    bugController = null ;
    keyDownListener = null;
    constructor(spiderController, bugController ,keyDownListener) {
        this.spiderController = spiderController ;
        this.bugController = bugController;
        this.keyDownListener = keyDownListener;
    }
    main = () => {
        this.start();

        this.getKeyDownListener().setApplication(this);
        this.getKeyDownListener().setSpiderController(this.getSpiderController());
        this.getKeyDownListener().setBugController(this.getBugController());

        window.addEventListener('keydown',this.getKeyDownListener().handle,true)
        //////////////////////////////////////////////////

    }
    /** @return Spider */
    getSpiderController(){
        return this.spiderController;
    }
    /** @return Bug */
    getBugController(){
        return this.bugController;
    }
    /** @return KeyDown*/
    getKeyDownListener(){
        return this.keyDownListener;
    }
    initializeSpider(){
        this.getSpiderController().getModel().bootstrap();
        this.getSpiderController().randomPosition();
    }
    initializeBug(){
        this.getBugController().getModel().bootstrap();
        this.getBugController().randomPosition();
    }
    countDownInitialize() {
        const countDownModel = window.document.body.querySelector('#countDown');
        const until = Date.now() + (TimeUnitMilliseconds.MINUTE * WIN_TIME_Minute);
        const countDown = new CountDown(
            new NerdDate ,  until ,
            [new TimestampDiffPrinter( this , countDownModel)] ,
            [new BugWine(this)]
        );
        countDown.start();
    }
    start(){
        this.initializeBug();
        this.initializeSpider();
        this.countDownInitialize();

    }
    restart(){
        window.location.reload();
    }
    lose(){
        this.isDone = true ;
        this.getBugController().wine();
        this.getSpiderController().lose();
        window.setTimeout( ()=> {
            this.getSpiderController().dead();
            window.setTimeout(()=>{
                window.alert("spider is losed !!!!");
                const playAgain = window.confirm("you want to play again ?");
                if (playAgain)
                    this.restart();
            },500);
        },2000);
    }
    won(){
        this.isDone = true ;
        this.getSpiderController().wine();
        this.getBugController().lose();
        setTimeout(()=>{
            this.getBugController().dead();
        },500);
        setTimeout(()=>{
            const playAgain = window.confirm("congratulations your won !!! Do you want to play again ??");
            if (!playAgain)
                return ;
            this.isDone = false;
            this.restart();
        },800);
    }
}