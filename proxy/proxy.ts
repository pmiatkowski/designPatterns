/*  For the sake of keeping us on track, we won't
    show implementation code in great detail. */
    var CarList = function() {
        //creation
    };
    
    CarList.prototype = {
        getCar: function(...) {
            // get a vehicle from the list using the
            // given parameters
        },
    
        search: function(...) {
            // search through the cars using the query
        },
    
        addCar: function(...) {
            // add a car to the database
        },
    };
    
    // var CarListProxy = function() {
    //     this.carList = new CarList();
    // };
    
    // CarListProxy.prototype = {
    //     getCar: function(...) {
    //         return this.carList.getCar(...);
    //     },
    
    //     search: function(...) {
    //         return this.carList.search(...);
    //     },
    
    //     addCar: function(...) {
    //         return this.carList.addCar(...);
    //     },
    // };

/* initialize big object when its needed */
var CarListProxy = function() {
    // Don't initialize the CarList yet.
    this.carList = null;
}
CarListProxy.prototype = {
    // this function is called any time any other
    // function gets called in order to initialize
    // the CarList only when needed.
    _init: function() {
        if (!this.carList) {
            this.carList = new CarList();
        }
    },

    getCar: function(...arg) {
        // every function makes this call to _init()
        this._init();
        return this.carList.getCar(...arg);
    },

    search: function(...arg) {
        this._init();
        return this.carList.search(...);
    },

    addCar: function(...arg) {
        this._init();
        return this.carList.addCar(...arg);
    },
}


// Remote proxy
// The real CarList is contained on the server, so
// CarListProxy gets the information from the server
var CarListProxy = function (){};

CaListProxy.prototype = {
    getCar: function(...) {
        // Once again we don't show implementation code
        // so that you don't get distracted by it
        ajax('http://www.everyvehicleever.com/getCar/'
            + args);
    },

    search: function(...) {
        ajax('http://www.everyvehicleever.com/search/'
            + args);
    },

    addCar: function(...) {
        ajax('http://www.everyvehicleever.com/addCar/'
            + args);
    },
    .
    .
    .
}

// Controlling Access to a JavaScript Object via Proxy
/* In order to truly control access, we have to make sure that there is no way to access the original object in any way except through the proxy, 
so we’ll close it all up in a self-invoking anonymous function, 
but attach the proxy as a property to window in order to give access to it from the outside world. */
// self invoking anonymous function
(function() {
    // We already know what the CarList looks like, so I
    // won't rewrite it here
    var CarList = ...
    
    var CarListProxy = function() {
        // Don't initialize the CarList yet.
        this.carList = null;
        this.date = new Date();
    };
    CarListProxy.prototype = {
        // this function is called any time any other
        // function gets called in order to initialize
        // the CarList only when needed. The CarList will
        // not be initialized if it isn't time to yet.
        _initIfTime: function() {
            if (this._isTime() &amp;&amp; !this.carList) {
                this.carList = new CarList();
                return true;
            }
            return false;
        },
        // Check to see if we've reached the right date yet
        _isTime() {
            return this.date > plannedReleaseDate;
        },
    
        getCar: function(...) {
            // if _initIfTime returns a falsey value, getCar will
            // return a falsey value, otherwise it will continue
            // and return the expression on the right side of the
            // &amp;&amp; operator
            return this._initIfTime() && this.carList.getCar(...);
        },
    
        search: function(...) {
            return this._initIfTime() && this.carList.search(...);
        },
    
        addCar: function(...) {
            return this._initIfTime() && this.carList.addCar(...);
        },
        .
        .
        .
    }
    
    // Make the CarListProxy publicly available
    window.CarListProxy = CarListProxy;
    
    // you could also do the below statement so people don't even
    // know they're using a proxy:
    window.CarList = CarListProxy;
    }());