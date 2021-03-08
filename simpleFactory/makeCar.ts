const CarFactory = {
    makeCar: function(features: string[] = []) {
        let car = new Car();

        const featureList = {
            powerwindows: 0,
            powerLocks: 0,
            ac: 0
        }

        if(features.length) {
            features.forEach(f => {
                if(featureList.hasOwnProperty(f)) {
                    featureList[f] = 1;
                }
            });

            if(featureList.powerwindows) {
                car = new PowerWindowsDecorator(car);
            }

            if(featureList.powerwindows) {
                car = new PowerLocksDecorator(car);
            }

            if(featureList.ac) {
                car = new ACDecorator(car);
            }
        }

        return car;
    }
}

var myCar = CarFactory.makeCar(['ac', 'ac', 'powerlocks', 'powerwindows', 'ac']);