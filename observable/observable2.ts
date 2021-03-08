Observable = function() {
    this.status = "constructed";
}
Observable.prototype.getStatus = function() {
    return this.status;
}

Observer = function() {
    this.subscriptions = [];
}
Observer.prototype = {
    subscribeTo: function(observable) {
        this.subscriptions.push(observable);
    },
    unsubscribeFrom: function(observable) {
        var i = 0,
            len = this.subscriptions.length;

        // Iterate through the array and if the observable is
        // found, remove it.
        for (; i < len; i++) {
            if (this.subscriptions[i] === observable) {
                this.subscriptions.splice(i, 1);
                // Once we've found it and removed it, we
                // don't need to continue, so just return.
                return;
            }
        }
    }
    doSomethingIfOk: function() {
        var i = 0;
            len = this.subscriptions.length;

        // Iterate through the subscriptions and determine
        // whether the status has changed to ok on each of them,
        // and do something for each subscription that has
        for (; i < len; i++) {
            if (this.subscriptions[i].getStatus() === "ok") {
                // Do something because the status of the
                // observable is what we want it to be
            }
        }
    }
}

var observer = new Observer(),
    observable = new Observable();
observer.subscribeTo(observable);

// Nothing will happen because the status hasn't changed
observer.doSomethingIfOk();

// Change the status to "ok" so now something will happen
observable.status = "ok";
observer.doSomethingIfOk();