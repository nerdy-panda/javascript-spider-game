export default class MathUtility {
    constructor(nerdMath) {
        this.nerdMath = nerdMath;
    }
    getNerdMath() {
        return this.nerdMath;
    }
    randomInteger0ToInnerWidth() {
        return this.getNerdMath().randomInteger(0, window.innerWidth);
    }
    randomInteger0ToInnerHeight() {
        return this.getNerdMath().randomInteger(0, window.innerHeight);
    }
}
//# sourceMappingURL=MathUtility.js.map