import MathUtility from "../Services/MathUtility.js";
import AnimalModel from "../Models/AnimalModel.js";
export default class Animal {
    constructor(model, mathUtility) {
        this.model = null;
        this.mathUtility = null;
        this.mathUtility = mathUtility;
        this.model = model;
    }
    getModel() {
        return this.model;
    }
    getMathUtility() {
        return this.mathUtility;
    }
    randomPosition() {
        let top = null;
        let left = null;
        let randomIntFromInnerHeight = null;
        let randomIntFromInnerWidth = null;
        do {
            randomIntFromInnerHeight = this.getMathUtility().randomInteger0ToInnerHeight();
            top = randomIntFromInnerHeight - this.getModel().getHeight();
        } while (top < 0);
        do {
            randomIntFromInnerWidth = this.getMathUtility().randomInteger0ToInnerWidth();
            left = randomIntFromInnerWidth - this.getModel().getWidth();
        } while (left < 0);
        this.getModel().setTop(top + "px");
        this.getModel().setLeft(left + "px");
    }
    dead() {
        this.getModel().dead();
    }
    lose() {
        this.getModel().addLoseClass();
    }
    wine() {
        this.getModel().addWineClass();
    }
}
//# sourceMappingURL=Animal.js.map