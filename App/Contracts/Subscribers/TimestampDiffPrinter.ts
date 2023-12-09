import CountDownExecuteSubscriber from "../Services/CountDownExecuteSubscriber.js";
import IndexController from "../../Controllers/IndexController.js";

interface TimestampDiffPrinter extends CountDownExecuteSubscriber {
    application : IndexController;
    result : HTMLElement;

}

export default TimestampDiffPrinter;