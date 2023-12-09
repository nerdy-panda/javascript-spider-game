import MovableAnimal from "./MovableAnimal.js";

import {default as SpiderModel } from "../Models/Spider.js";
export default class Spider extends MovableAnimal{
    //@todo can from input
    // @todo moveable animal for model and controller ????
    moveStepCount = 25;
    constructor(model, mathUtility) {
        super(model,mathUtility);
    }
    /** @return SpiderModel */
    getModel() {
        return super.getModel();
    }

    moveTop(){
        this.getModel().rotateUp();

        const currentTop = this.getModel().getTopWithoutUnit();
        let top = this.getModel().teleportToDownPosition();
        let calculateTop = currentTop - this.moveStepCount ;
        const isNotOverflow = this.getModel().isNotOverflowFromTop(calculateTop);

        if (isNotOverflow)
            top = calculateTop ;

        this.getModel().setTop(top+'px')
    }
    moveDown(){
        this.getModel().rotateDown();

        const currentTop = this.getModel().getTopWithoutUnit();
        let top = 0 ;
        const calculateTop = currentTop + this.moveStepCount ;
        const isNotOverflow = this.getModel().isNotOverflowFromDown(calculateTop);

        if (isNotOverflow)
            top = calculateTop;

        this.getModel().setTop(top+'px')

    }
    moveLeft(){
        this.getModel().rotateLeft();
        const currentLeft = this.getModel().getLeftWithoutUnit();
        let left = this.getModel().teleportToRightPosition();
        const calculateLeft = currentLeft - this.moveStepCount;
        const isNotOverflow = this.getModel().isNotOverflowFromLeft(calculateLeft);
        if (isNotOverflow)
            left = calculateLeft;
        this.getModel().setLeft(left+'px');
    }
    moveRight(){
        this.getModel().rotateRight();
        const currentLeft = this.getModel().getLeftWithoutUnit();
        let left = 0 ;
        const calculateLeft = currentLeft + this.moveStepCount;
        const isNotOverflow = this.getModel().isNotOverflowFromRight(calculateLeft);

        if (isNotOverflow)
            left = calculateLeft;

        this.getModel().setLeft(left+'px');
    }
}