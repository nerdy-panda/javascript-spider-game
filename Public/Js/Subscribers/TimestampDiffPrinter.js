import { default as Base } from "../Services/CountDownExecuteSubscriber.js";
class TimestampDiffPrinter extends Base {
    constructor(application, result) {
        super();
        this.application = application;
        this.result = result;
    }
    handle(countDown, dateDiff) {
        const isDone = this.application.isDone;
        if (isDone)
            countDown.stop();
        const minutes = this.zeroIfUnderZero(dateDiff.minutes).toString();
        const seconds = this.zeroIfUnderZero(dateDiff.seconds).toString();
        const miliseconds = this.zeroIfUnderZero(dateDiff.milliseconds).toString();
        const result = `${minutes} M , ${seconds} S , ${miliseconds} MS`;
        this.result.innerHTML = result;
    }
    zeroIfUnderZero(integer) {
        return ((integer < 0) ? 0 : integer);
    }
}
export default TimestampDiffPrinter;
//# sourceMappingURL=TimestampDiffPrinter.js.map