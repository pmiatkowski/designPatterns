var EnableAlarm = function(alarm) {
    this.alarm = alarm;
}
EnableAlarm.prototype.execute = function () {
    this.alarm.enable();
}

var DisableAlarm = function(alarm) {
    this.alarm = alarm;
}
DisableAlarm.prototype.execute = function () {
    this.alarm.disable();
}

var ResetAlarm = function(alarm) {
    this.alarm = alarm;
}
ResetAlarm.prototype.execute = function () {
    this.alarm.reset();
}

var SetAlarm = function(alarm) {
    this.alarm = alarm;
}
SetAlarm.prototype.execute = function () {
    this.alarm.set();
}

var alarms = [/* array of alarms */],
    i = 0, len = alarms.length;

for (; i < len; i++) {
    var enable_alarm = new EnableAlarm(alarms[i]),
        disable_alarm = new DisableAlarm(alarms[i]),
        reset_alarm = new ResetAlarm(alarms[i]),
        set_alarm = new SetAlarm(alarms[i]);

    new Button('enable', enable_alarm);
    new Button('disable', disable_alarm);
    new Button('reset', reset_alarm);
    new Button('set', set_alarm);
}

///////////////
/// Callback version
var createEnableCommand = function (alarm) {
    return function() {
        alarm.enable();
    }
}

var createDisableCommand = function (alarm) {
    return function() {
        alarm.disable();
    }
}

var createResetCommand = function (alarm) {
    return function() {
        alarm.reset();
    }
}

var createSetCommand = function (alarm) {
    return function() {
        alarm.set();
    }
}

var alarms = [/* array of alarms */],
    i = 0, len = alarms.length;

for (; i < len; i++) {
    new Button('enable', createEnableCommand(alarms[i]));
    new Button('disable', createDisableCommand(alarms[i]));
    new Button('reset', createResetCommand(alarms[i]));
    new Button('set', createSetCommand(alarms[i]));
}