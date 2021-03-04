const Car = function() {
    console.log('frame and core parts');
}

Car.prototype = {
    start: function() {
        console.log('The engine starts with roar')
    },
    drive: function() {
        console.log('Away we go');
    },
    getPrice: function() {
        return 1000.10;
    }
}