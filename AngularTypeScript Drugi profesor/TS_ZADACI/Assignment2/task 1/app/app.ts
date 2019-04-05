class Animal {
    constructor(public name: string) { }
    move(distanceInMeters: number = 0): void {
        console.log(`${this.name} moved ${distanceInMeters} meters.`);
    }
    behave(trait: string): void {
        if (trait === undefined) {
            console.error('Please provide parameter: trait.');
        }
        console.log(`${this.name} does a ${trait}.`);
    }
}
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number = 5) {
        console.log('My Snake is Slithering...');
        super.move(distanceInMeters);
    }
    behave(trait = 'hiss') {
        console.log('Hissing SCARILY!!..');
        super.behave(trait);
    }
}
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number = 45) {
        console.log('That Horse is Galloping...');
        super.move(distanceInMeters);
    }
}
let snake = new Snake('Sammy the Python');
let horse = new Horse('Tommy the Horse');

snake.behave();
horse.move(34);