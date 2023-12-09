import {default as Base} from "../Services/CountDownExecuteSubscriber.js";
import {default as Contract } from "../Contracts/Subscribers/TimestampDiffPrinter.js";
import TimestampDiffResult from "../Contracts/Services/TimestampDiffResult.js";
import NerdDate from "../Contracts/Services/NerdDate.js";
import CountDown from "../Contracts/Services/CountDown.js";
import IndexController from "../Controllers/IndexController.js";

class TimestampDiffPrinter extends Base implements Contract {
    constructor( public application : IndexController , public result : HTMLElement , ){
        super();
    }

    override handle(countDown : CountDown, dateDiff: TimestampDiffResult): void {
        const isDone = this.application.isDone ;
        if (isDone)
            countDown.stop();

        const minutes : string = this.zeroIfUnderZero(dateDiff.minutes).toString();
        const seconds : string = this.zeroIfUnderZero(dateDiff.seconds).toString();
        const miliseconds : string = this.zeroIfUnderZero(dateDiff.milliseconds).toString();

        const result = `${minutes} M , ${seconds} S , ${miliseconds} MS`;

        this.result.innerHTML = result;
    }
    protected zeroIfUnderZero(integer : number):number {
        return ((integer<0)? 0 : integer) ;
    }
}

export default TimestampDiffPrinter;