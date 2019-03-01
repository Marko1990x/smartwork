class Animal {
    name: string;
    constructor(animalName: string) {
        this.name = animalName;
    }
    move(distanceInMeters: number = 0) {
        console.log('distance in meters = ' + distanceInMeters);
        return null;
    }
    behave(trait: string) {
        console.log(name + trait);
    }
}

class Snake extends Animal{
    /**
     *
     */
    constructor(name: string) {
        super(name);
    }
}
