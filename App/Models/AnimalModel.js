export default class AnimalModel {
    id = null ;
    element = null ;
    nerdString = null ;
    constructor(nerdString) {
        this.nerdString = nerdString ;
    }
    /** @return NerdString */
    getNerdString(){
        return this.nerdString;
    }
    bootstrap(){
        this.initializeElement();
    }
    fetchElement(){
        return window.document.body.querySelector(`#${this.id}`);
    }
    initializeElement(){
        this.element = this.fetchElement();
    }
    getWidth(){
        return this.getElement().width;
    }
    getHeight(){
        return this.getElement().height;
    }
    getElement(){
        return this.element;
    }
    setTop(value){
        this.getElement().style.top = value;
    }
    getTop(){
        return getComputedStyle(this.getElement()).top;
    }
    getTopWithoutUnit(){
        return this.getNerdString()
                   .numericSectorFromUnit(this.getTop())
    }
    getLeft(){
        return getComputedStyle(this.getElement()).left;
    }
    getLeftWithoutUnit(){
        return this.getNerdString()
                   .numericSectorFromUnit(this.getLeft());
    }

    setLeft(value){
        this.getElement().style.left = value;
    }
    getPositionWithoutUnit(){
        return [this.getTopWithoutUnit(),this.getLeftWithoutUnit()];
    }
    isNear(animal){
        let [animalTop,animalLeft] = animal.getPositionWithoutUnit();
        let [himselfTop,himselfLeft] = this.getPositionWithoutUnit();
        const diffTop = Math.abs(animalTop - himselfTop) ;
        const diffLeft = Math.abs(animalLeft - himselfLeft) ;
        return diffTop <= 25 && diffLeft <= 25;
    }
    dead(){
        this.getElement().style.display = 'none';
    }
    addLoseClass(){
        this.getElement().classList.add('loser-animal');
    }
    addWineClass(){
        this.getElement().classList.add('winner-animal');
    }
}