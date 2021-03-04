/** original */
const AjaxLogger = {
    sendLog: function() {
        // some http call
        this.urlEncode('abc');
        // ...
    },
    urlEncode: function(arg) {
        return arg;
    }
}

/** adapter */
const AjaxLoggerAdapter = {
    log: function(arg) {
        return AjaxLogger.sendLog(arg);
    }
}

/** factory used in the application */
const LoggerFactory = {
    getLogger: function() {
        return AjaxLoggerAdapter;
    }
}
/** usage */
const logger = LoggerFactory.getLogger();
logger.log('abc')