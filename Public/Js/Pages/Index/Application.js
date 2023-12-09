import IndexController from "../../Services/Factories/Controllers/IndexController.js";
class Application {
    static main() {
        const controller = IndexController.instance();
        window.addEventListener('load', controller.main, true);
    }
}
Application.main();
//# sourceMappingURL=Application.js.map