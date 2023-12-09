import AnimalModel from "./AnimalModel.js";
export default class Spider extends AnimalModel{
    id = 'spider';

    teleportToDownPosition(){
        const calculateDownPosition = (window.innerHeight - this.getHeight() );
        return ((calculateDownPosition<0) ? 0 : calculateDownPosition);
    }
    teleportToRightPosition(){
        return window.innerWidth - this.getWidth();
    }
    isOverflowFromTop(top){
        return top<0;
    }
    isNotOverflowFromTop(top){
        return !this.isOverflowFromTop(top);
    }
    isOverflowFromDown(top){
        return (this.getHeight() + top) > window.innerHeight;
    }
    isNotOverflowFromDown(top){
        return !this.isOverflowFromDown(top);
    }
    isOverflowFromLeft(left){
        return left < 0;
    }
    isNotOverflowFromLeft(left){
        return !this.isOverflowFromLeft(left);
    }
    isOverflowFromRight(right){
        return (right + this.getWidth()) > window.innerWidth;
    }
    isNotOverflowFromRight(right){
        return !this.isOverflowFromRight(right);
    }
    rotateDown(){
        this.getElement().style.transform = "rotate(180deg)";
    }
    rotateUp(){
        this.getElement().style.transform = "rotate(0deg)";
    }
    rotateLeft(){
        this.getElement().style.transform =  "rotate(270deg)";
    }
    rotateRight(){
        this.getElement().style.transform =  "rotate(90deg)";
    }

}