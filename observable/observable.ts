var Observable = function() {
    this.subscribers = [];
}

Observable.prototype = {
    subscribe: function(callback) {
        // In most situations, you would check to see if the
        // callback already exists within the subscribers array,
        // but for the sake of keeping us on track and because
        // this isn't necessarily included, we'll leave it out.
        // Just add the callback to the subscribers list
        this.subscribers.push(callback);
    },
    unsubscribe: function(callback) {
        var i = 0,
            len = this.subscribers.length;

        // Iterate through the array and if the callback is
        // found, remove it.
        for (; i < len; i++) {
            if (this.subscribers[i] === callback) {
                this.subscribers.splice(i, 1);
                // Once we've found it, we don't need to
                // continue, so just return.
                return;
            }
        }
    },
    publish: function(data) {
        var i = 0,
            len = this.subscribers.length;

        // Iterate over the subscribers array and call each of
        // the callback functions.
        for (; i < len; i++) {
            this.subscribers[i](data);
        }
    }
};

var Observer = function (data) {
    console.log(data);
}

// Here's where it gets used.
observable = new Observable();
observable.subscribe(Observer);
observable.publish('We published!');