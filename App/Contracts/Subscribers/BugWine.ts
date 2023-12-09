import { default as Base } from "../Services/CountDownDoneSubscriber.js";
import IndexController from "../../Controllers/IndexController.js";
interface BugWine extends Base {
    app : IndexController
}
export default BugWine;
