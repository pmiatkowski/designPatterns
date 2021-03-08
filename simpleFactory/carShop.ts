var CarShop = function() {};

CarShop.prototype = {
    sellCar: function(type, features) {
        var car = this.manufactureCar(type, features);

        getMoney(); // whatever

        return car;
    },
    manufactureCar: function(type, features) {
        throw new Error('must be implemented by a subclass')
    },
    decorateCar: function(car, features) {
        /* decorate car with features - check makeCar.ts */
    }
}

var MyCarShop = function() {}
MyCarShop.prototype = new MyCarShop();
MyCarShop.prototype.manufactureCar = function(type, features) {
    var car;

    switch(type) {
        case 'sedan':
            car = new MySedanCar();
            break;
        case 'hatchbak':
            car = new MyHatchbackCar();
            break;
        case 'coupe':
        default:
            car = new MyCoupeCar();
    }

    return this.decorateCar(car, features)
}

/* Another CarShop and with factory method */
var ZimCarShop = function() {};
ZimCarShop.prototype = new CarShop();
ZimCarShop.prototype.manufactureCar = function (type, features) {
    var car;

    // Create a different car depending on what type the user specified
    // These are all Zim brand
    switch(type) {
        case 'sedan':
            car = new ZimSedanCar();
            break;
        case 'hatchback':
            car = new ZimHatchbackCar();
            break;
        case 'coupe':
        default:
            car = new ZimCoupeCar();
    }

    // Decorate the car with the specified features
    return this.decorateCar(car, features);
};

/* USAGE */
var shop = new MyCarShop();
var car = shop.sellCar('sedan', ['powerlocks']);

var shop2 = new ZimCarShop();
var car2 = shop2.sell('coupe', ['ac'])