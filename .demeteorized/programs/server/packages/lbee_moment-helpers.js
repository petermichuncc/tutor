(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;
var _ = Package.underscore._;

/* Package-scope variables */
var mo;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// packages/lbee:moment-helpers/common.js                                                   //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
"use strict";                                                                               // 1
                                                                                            // 2
var momentHelpers = function momentHelpers () {                                             // 3
  var self = this;                                                                          // 4
                                                                                            // 5
  if (Meteor.isClient) {                                                                    // 6
    //locale                                                                                // 7
                                                                                            // 8
    //create a new reactiveVar that holds the moment helper context of locale               // 9
    self.currentLocale = new ReactiveVar();                                                 // 10
                                                                                            // 11
    //when creating the moment helper context, set the locale to the moment locale          // 12
    self.currentLocale.set(moment.locale());                                                // 13
                                                                                            // 14
    //expose a utility to set the locale, updating moment but also updating reactive locale // 15
    self.setLocale = function (locale) {                                                    // 16
      moment.locale(locale);                                                                // 17
      self.currentLocale.set(moment.locale());                                              // 18
    };                                                                                      // 19
                                                                                            // 20
    //reactive now                                                                          // 21
    self.now = new ReactiveVar(moment());                                                   // 22
    Meteor.setInterval(function() {                                                         // 23
      self.now.set(moment());                                                               // 24
    }, 1000);//every second                                                                 // 25
  }                                                                                         // 26
                                                                                            // 27
                                                                                            // 28
  //logging messages                                                                        // 29
  self._msg = {                                                                             // 30
    dateNotValidReturnNow:                                                                  // 31
      'valid date not provided, sending new moment instead',                                // 32
    dateNotValidReturnNull:                                                                 // 33
      'valid date not provided, sending null'                                               // 34
  };                                                                                        // 35
                                                                                            // 36
  //initate the default options                                                             // 37
  self.options = {                                                                          // 38
    //if a helper is called and no date given, create one as now                            // 39
    returnNowIfDateNotGiven: false,                                                         // 40
    //extra console logging                                                                 // 41
    debug: false,                                                                           // 42
    //initial library of format tokens                                                      // 43
    formatTokens: {                                                                         // 44
      'default': 'LLL',                                                                     // 45
      // defaults to locale date format                                                     // 46
      // Month name, day of month, year, time                                               // 47
    }                                                                                       // 48
  };                                                                                        // 49
                                                                                            // 50
                                                                                            // 51
  //configuration function, merges the defaults with the options provided                   // 52
  self.configure = function (options) {                                                     // 53
    _.extend(self.options, options);                                                        // 54
  };                                                                                        // 55
                                                                                            // 56
  //logging function                                                                        // 57
  self.log = function (log) {                                                               // 58
                                                                                            // 59
    //delete the currently stored log                                                       // 60
    //this was enabled to assit with logging                                                // 61
    delete self.logged;                                                                     // 62
                                                                                            // 63
    //if debugging is enabled, log it!                                                      // 64
    if (self.options.debug) {                                                               // 65
      self.logged = log;                                                                    // 66
      console.log(log);                                                                     // 67
    }                                                                                       // 68
  };                                                                                        // 69
                                                                                            // 70
  //used for moFormat, helps to get a format token eg. 'YYYY-MM-DD'                         // 71
  self._getToken = function getToken (token, aMoment) {                                     // 72
    check(token, Match.Optional(String, null));                                             // 73
    var tokenLibrary = _.defaults(self.options.formatTokens, {                              // 74
      //these tokens will always be available (unless overridden)                           // 75
      'dayOfWeek': 'dddd',                                                                  // 76
      'dayOfMonth': 'D',                                                                    // 77
      'month': 'M',                                                                         // 78
      'year': 'YYYY',                                                                       // 79
      'time': 'h:mm a',                                                                     // 80
    });                                                                                     // 81
                                                                                            // 82
    //if no token provided, use the default from the token library                          // 83
    if (! token) {                                                                          // 84
      token = 'default';                                                                    // 85
    }                                                                                       // 86
                                                                                            // 87
    //see if the token is a reference to the token library                                  // 88
    //if not keep what was provided                                                         // 89
    token = tokenLibrary[token] || token;                                                   // 90
                                                                                            // 91
    //check if token is a function & process                                                // 92
    if (_.isFunction(token)) {                                                              // 93
      token = token.call(aMoment);                                                          // 94
    }                                                                                       // 95
                                                                                            // 96
    //return the token                                                                      // 97
    return token;                                                                           // 98
  };                                                                                        // 99
                                                                                            // 100
  self._getMoment = function getMoment (obj) {                                              // 101
    check(obj, Match.Optional(                                                              // 102
      Match.OneOf(Match.Where(moment.isMoment), Date, String, null)                         // 103
    ));                                                                                     // 104
    var result;                                                                             // 105
    //goal is to get a moment object from what is provided                                  // 106
    if (moment.isMoment(obj)) {                                                             // 107
      //if a moment is provided, return that moment, no questions asked                     // 108
      result = obj;                                                                         // 109
    } else if ( _.isDate(obj) ) {                                                           // 110
      //if a date is provided, convert to moment and return                                 // 111
      result = moment(obj);                                                                 // 112
    } else if ( _.isString(obj) && (obj.length > 1) ) {                                     // 113
      //attempt to get a date from the string                                               // 114
                                                                                            // 115
      //if '|' is found, separate and use the RHS as the input format token                 // 116
      if (obj.indexOf('|') !== -1) {                                                        // 117
        var date = moment(                                                                  // 118
          obj.substring(0, obj.indexOf('|')), //input string LHS of '|'                     // 119
          obj.substring(obj.indexOf('|') + 1) //input format, RHS after '|'                 // 120
        );                                                                                  // 121
      } else {                                                                              // 122
        var date = moment(new Date(obj));                                                   // 123
      }                                                                                     // 124
      if (date.isValid()) {                                                                 // 125
        result = date;                                                                      // 126
      }                                                                                     // 127
    }                                                                                       // 128
                                                                                            // 129
    //could not get a moment object                                                         // 130
    //work out what to return if anything                                                   // 131
    if (! result ) {                                                                        // 132
      if (self.options.returnNowIfDateNotGiven) {                                           // 133
        self.log(self._msg.dateNotValidReturnNow);                                          // 134
        return moment();                                                                    // 135
      } else {                                                                              // 136
        self.log(self._msg.dateNotValidReturnNull);                                         // 137
      }                                                                                     // 138
    }                                                                                       // 139
                                                                                            // 140
    return result;                                                                          // 141
  };                                                                                        // 142
                                                                                            // 143
};                                                                                          // 144
                                                                                            // 145
                                                                                            // 146
if (typeof moment != "undefined") {                                                         // 147
  /* jshint ignore:start */                                                                 // 148
  mo = new momentHelpers();                                                                 // 149
  /* jshint ignore:end */                                                                   // 150
} else {                                                                                    // 151
  throw new Error('lbee:moment-helpers, no Moment package is installed');                   // 152
}                                                                                           // 153
                                                                                            // 154
//////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['lbee:moment-helpers'] = {
  mo: mo
};

})();

//# sourceMappingURL=lbee_moment-helpers.js.map
