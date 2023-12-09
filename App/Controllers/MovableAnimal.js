import Animal from "./Animal.js";
import {mustImplementMethod} from "../Helpers/Utility.js";

export default class MovableAnimal extends Animal{
    moveTop(){
        mustImplementMethod();
    }
    moveLeft(){
        mustImplementMethod();
    }
    moveRight(){
        mustImplementMethod();
    }
    moveDown(){
        mustImplementMethod();
    }
}