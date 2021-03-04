const PowerLocksDecorator = function(car) {
    CarDecorator.call(this, car);
}

PowerLocksDecorator.prototype = new CarDecorator();
PowerLocksDecorator.prototype.drive = function() {
    this.car.drive();
    console.log('The doors automatically lock');
}

const WindowCarDecorator = function(car) {
    CarDecorator.call(this, car);
    console.log('Assemble: add power windows');
}
WindowCarDecorator.prototype = new CarDecorator();

const ACDecorator = function(car) {
    CarDecorator.call(this, car);
    console.log('Assemble: add ac');
}
ACDecorator.prototype = new CarDecorator();
ACDecorator.prototype.start = function() {
    this.car.start();
    console.log('The cool air...')
}

/** usage */
let car = new Car();
car = new PowerLocksDecorator(car);
car = new WindowCarDecorator(car);
car = new ACDecorator(car);

car.start(); /** The enginge starts with roar, the cool air... */
car.drive(); /** Away we go, the doors automatically lock... */
