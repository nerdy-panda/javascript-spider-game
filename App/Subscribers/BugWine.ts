import {default as Contract} from "../Contracts/Subscribers/BugWine.js";
import CountDown from "../Contracts/Services/CountDown.js";
import TimestampDiffResult from "../Contracts/Services/TimestampDiffResult.js";
import IndexController from "../Controllers/IndexController.js";

class BugWine implements Contract {
    constructor(
        public app : IndexController
    ){}
    handle(countDown: CountDown, dateDiff: TimestampDiffResult) {
        this.app.lose();
    }
}
export default BugWine;