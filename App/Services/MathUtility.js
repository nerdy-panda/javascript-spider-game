export default class MathUtility {
    nerdMath;
    constructor(nerdMath) {
        this.nerdMath = nerdMath ;
    }
    /** @return NerdMath */
    getNerdMath(){
        return this.nerdMath;
    }
    randomInteger0ToInnerWidth(){
        return this.getNerdMath().randomInteger(0,window.innerWidth);
    }
    randomInteger0ToInnerHeight(){
        return this.getNerdMath().randomInteger(0,window.innerHeight);
    }
}