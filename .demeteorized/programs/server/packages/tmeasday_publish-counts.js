(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Counts, publishCount;

(function () {

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/tmeasday:publish-counts/publish-counts.js                                //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
if (Meteor.isServer) {                                                               // 1
  Counts = {};                                                                       // 2
  Counts.publish = function(self, name, cursor, options) {                           // 3
    var initializing = true;                                                         // 4
    var handle;                                                                      // 5
    options = options || {};                                                         // 6
                                                                                     // 7
    var extraField, countFn;                                                         // 8
                                                                                     // 9
    if (options.countFromField) {                                                    // 10
      extraField = options.countFromField;                                           // 11
      countFn = function(doc) {                                                      // 12
        return doc[extraField];                                                      // 13
      }                                                                              // 14
    } else if (options.countFromFieldLength) {                                       // 15
      extraField = options.countFromFieldLength;                                     // 16
      countFn = function(doc) {                                                      // 17
        return doc[extraField].length;                                               // 18
      }                                                                              // 19
    }                                                                                // 20
                                                                                     // 21
                                                                                     // 22
    if (countFn && options.nonReactive)                                              // 23
      throw new Error("options.nonReactive is not yet supported with options.countFromFieldLength or options.countFromFieldSum");
                                                                                     // 25
    if (countFn)                                                                     // 26
      var prev = {};                                                                 // 27
                                                                                     // 28
    // ensure the cursor doesn't fetch more than it has to                           // 29
    cursor._cursorDescription.options.fields = {_id: true};                          // 30
    if (extraField)                                                                  // 31
      cursor._cursorDescription.options.fields[extraField] = true;                   // 32
                                                                                     // 33
    var count = 0;                                                                   // 34
    var observers = {                                                                // 35
      added: function(id, fields) {                                                  // 36
        if (countFn) {                                                               // 37
          if (!fields[extraField])                                                   // 38
            return;                                                                  // 39
                                                                                     // 40
          prev[id] = countFn(fields);                                                // 41
          count += prev[id];                                                         // 42
        } else {                                                                     // 43
          count += 1;                                                                // 44
        }                                                                            // 45
                                                                                     // 46
        if (!initializing)                                                           // 47
          self.changed('counts', name, {count: count});                              // 48
      },                                                                             // 49
      removed: function(id, fields) {                                                // 50
        if (countFn) {                                                               // 51
          if (!fields[extraField])                                                   // 52
            return;                                                                  // 53
                                                                                     // 54
          count -= countFn(fields);                                                  // 55
          delete prev[id];                                                           // 56
        } else {                                                                     // 57
          count -= 1;                                                                // 58
        }                                                                            // 59
        self.changed('counts', name, {count: count});                                // 60
      }                                                                              // 61
    };                                                                               // 62
                                                                                     // 63
    if (countFn) {                                                                   // 64
      observers.changed = function(id, fields) {                                     // 65
        if (countFn) {                                                               // 66
          if (!fields[extraField])                                                   // 67
            return;                                                                  // 68
                                                                                     // 69
          var next = countFn(fields);                                                // 70
          count += next - prev[id];                                                  // 71
          prev[id] = next;                                                           // 72
        }                                                                            // 73
                                                                                     // 74
        self.changed('counts', name, {count: count});                                // 75
      };                                                                             // 76
    }                                                                                // 77
                                                                                     // 78
    if (!countFn) {                                                                  // 79
      self.added('counts', name, {count: cursor.count()});                           // 80
      if (!options.noReady)                                                          // 81
        self.ready();                                                                // 82
    }                                                                                // 83
                                                                                     // 84
    if (!options.nonReactive)                                                        // 85
      handle = cursor.observeChanges(observers);                                     // 86
                                                                                     // 87
    if (countFn)                                                                     // 88
      self.added('counts', name, {count: count});                                    // 89
                                                                                     // 90
    if (!options.noReady)                                                            // 91
      self.ready();                                                                  // 92
                                                                                     // 93
    initializing = false;                                                            // 94
                                                                                     // 95
    self.onStop(function() {                                                         // 96
      if (handle)                                                                    // 97
        handle.stop();                                                               // 98
    });                                                                              // 99
                                                                                     // 100
    return {                                                                         // 101
      stop: function() {                                                             // 102
        if (handle) {                                                                // 103
          handle.stop();                                                             // 104
          handle = undefined;                                                        // 105
        }                                                                            // 106
      }                                                                              // 107
    };                                                                               // 108
  };                                                                                 // 109
  // back compatibility                                                              // 110
  publishCount = Counts.publish;                                                     // 111
}                                                                                    // 112
                                                                                     // 113
if (Meteor.isClient) {                                                               // 114
  Counts = new Mongo.Collection('counts');                                           // 115
                                                                                     // 116
  Counts.get = function(name) {                                                      // 117
    var count = this.findOne(name);                                                  // 118
    return count && count.count || 0;                                                // 119
  };                                                                                 // 120
                                                                                     // 121
  if (Package.templating) {                                                          // 122
    Package.templating.Template.registerHelper('getPublishedCount', function(name) { // 123
      return Counts.get(name);                                                       // 124
    });                                                                              // 125
  }                                                                                  // 126
}                                                                                    // 127
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tmeasday:publish-counts'] = {
  Counts: Counts,
  publishCount: publishCount
};

})();

//# sourceMappingURL=tmeasday_publish-counts.js.map
