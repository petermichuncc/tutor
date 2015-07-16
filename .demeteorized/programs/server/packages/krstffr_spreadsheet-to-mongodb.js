(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var SpreadsheetToMongoDB, SpreadsheetToMongoDBHandler;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/krstffr:spreadsheet-to-mongodb/lib/spreadsheet-to-mongodb.js                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
SpreadsheetToMongoDBHandler = function () {                                                                   // 1
                                                                                                              // 2
	var that = this;                                                                                             // 3
                                                                                                              // 4
	// Holder for all the forms!                                                                                 // 5
	that.forms = [];                                                                                             // 6
                                                                                                              // 7
                                                                                                              // 8
	// Handling of "types", meaning input types, such as "number", "date" etc.                                   // 9
	// Used for making sure the input "34" of type "numer" will be 34 instead of "34"                            // 10
	that.types = {};                                                                                             // 11
                                                                                                              // 12
	// The default transform method                                                                              // 13
	that.types.defaultTransformMethod = function ( formFields, inputRow, typeName, cb ) {                        // 14
		var fieldsOfType = _(_.where(formFields, { type: typeName })).pluck('name');                                // 15
		_.each(fieldsOfType, function( fieldName ) {                                                                // 16
			if (inputRow[fieldName])                                                                                   // 17
				inputRow[fieldName] = cb( inputRow[fieldName] );                                                          // 18
		});                                                                                                         // 19
		return inputRow;                                                                                            // 20
	};                                                                                                           // 21
                                                                                                              // 22
	// Execute each approved type's tranformMethod on the inputRow                                               // 23
	that.types.checkAllTypes = function ( inputRow, currentFormFields ) {                                        // 24
			                                                                                                           // 25
		check( inputRow, Object );                                                                                  // 26
		check( currentFormFields, Array );                                                                          // 27
                                                                                                              // 28
		_( that.types.approvedTypes ).each( function( type ) {                                                      // 29
			inputRow = type.transformMethod( currentFormFields, inputRow );                                            // 30
		});                                                                                                         // 31
                                                                                                              // 32
		return inputRow;                                                                                            // 33
                                                                                                              // 34
	};                                                                                                           // 35
                                                                                                              // 36
	that.types.approvedTypes = [                                                                                 // 37
	{                                                                                                            // 38
		name: 'number',                                                                                             // 39
		transformMethod: function ( formFields, inputRow ) {                                                        // 40
			return that.types.defaultTransformMethod(formFields, inputRow, this.name, function ( value ) {             // 41
				return parseFloat( value );                                                                               // 42
			});                                                                                                        // 43
		}                                                                                                           // 44
	},                                                                                                           // 45
	{                                                                                                            // 46
		name: 'date',                                                                                               // 47
		transformMethod: function ( formFields, inputRow ) {                                                        // 48
			return that.types.defaultTransformMethod(formFields, inputRow, this.name, function ( value ) {             // 49
				return new Date( value );                                                                                 // 50
			});                                                                                                        // 51
		}                                                                                                           // 52
	},                                                                                                           // 53
	{                                                                                                            // 54
		name: 'array',                                                                                              // 55
		transformMethod: function ( formFields, inputRow ) {                                                        // 56
                                                                                                              // 57
			// This is the callback used below!                                                                        // 58
			var cb = function ( value, arrayField ) {                                                                  // 59
                                                                                                              // 60
				// Either use the user passed separator or the default comma                                              // 61
				var arraySeparator = arrayField.arraySeparator || ',';                                                    // 62
                                                                                                              // 63
				// split() the value into an array                                                                        // 64
				var arrayValue = value.split( arraySeparator );                                                           // 65
				                                                                                                          // 66
				// trim() every item.                                                                                     // 67
				arrayValue = _( arrayValue ).map( function( value ) { return value.trim(); });                            // 68
				                                                                                                          // 69
				// Transform numbers into numbers                                                                         // 70
				arrayValue = _( arrayValue ).map( function( value ) {                                                     // 71
					if (!isNaN(value))                                                                                       // 72
						value = parseFloat( value );                                                                            // 73
					return value;                                                                                            // 74
				});                                                                                                       // 75
                                                                                                              // 76
				if (arrayField.arrayMaxLength)                                                                            // 77
					arrayValue = arrayValue.slice( 0, arrayField.arrayMaxLength );                                           // 78
                                                                                                              // 79
				return arrayValue;                                                                                        // 80
                                                                                                              // 81
			};                                                                                                         // 82
                                                                                                              // 83
			var arrayFields = _.where(formFields, { type: this.name });                                                // 84
                                                                                                              // 85
			_.each(arrayFields, function( arrayField ) {                                                               // 86
				if (inputRow[arrayField.name])                                                                            // 87
					inputRow[arrayField.name] = cb( inputRow[arrayField.name], arrayField );                                 // 88
			});                                                                                                        // 89
			return inputRow;                                                                                           // 90
                                                                                                              // 91
		}                                                                                                           // 92
	}                                                                                                            // 93
	];                                                                                                           // 94
                                                                                                              // 95
                                                                                                              // 96
	// Logger                                                                                                    // 97
	that.log = {};                                                                                               // 98
                                                                                                              // 99
	that.log.enabled = true;                                                                                     // 100
                                                                                                              // 101
	that.log.enable = function () {                                                                              // 102
		that.log.enabled = true;                                                                                    // 103
	};                                                                                                           // 104
                                                                                                              // 105
	that.log.disable = function () {                                                                             // 106
		that.log.enabled = false;                                                                                   // 107
	};                                                                                                           // 108
                                                                                                              // 109
	that.log.logMessage = function ( msg ) {                                                                     // 110
		if (that.log.enabled)                                                                                       // 111
			return console.log( msg );                                                                                 // 112
		return ;                                                                                                    // 113
	};                                                                                                           // 114
                                                                                                              // 115
	// Method for hashing strings in a predictable way.                                                          // 116
	that.hashCode = function( str ) {                                                                            // 117
		var hash = 0, i, chr, len;                                                                                  // 118
		if (str.length === 0) return hash;                                                                          // 119
		for (i = 0, len = str.length; i < len; i++) {                                                               // 120
			chr   = str.charCodeAt(i);                                                                                 // 121
			hash  = ((hash << 5) - hash) + chr;                                                                        // 122
			hash |= 0;                                                                                                 // 123
		}                                                                                                           // 124
		return hash;                                                                                                // 125
	};                                                                                                           // 126
                                                                                                              // 127
	that.addForm = function ( formOptions ) {                                                                    // 128
                                                                                                              // 129
		// Make sure the user has provided correct types                                                            // 130
		check(formOptions, Object);                                                                                 // 131
		check(formOptions.formName, String);                                                                        // 132
		check(formOptions.collection, Meteor.Collection);                                                           // 133
		check(formOptions.fields, Array);                                                                           // 134
                                                                                                              // 135
		// Optional options                                                                                         // 136
		if (formOptions.saveCallback)                                                                               // 137
			check(formOptions.saveCallback, Function);                                                                 // 138
                                                                                                              // 139
		// .saveToDB should be a bool, and always be set                                                            // 140
		if (formOptions.saveToDB === undefined)                                                                     // 141
			formOptions.saveToDB = true;                                                                               // 142
		check(formOptions.saveToDB, Boolean);                                                                       // 143
                                                                                                              // 144
		// Add the form to the forms array                                                                          // 145
		that.forms.push( formOptions );                                                                             // 146
                                                                                                              // 147
		return that.forms[ that.forms.length - 1 ];                                                                 // 148
                                                                                                              // 149
	};                                                                                                           // 150
                                                                                                              // 151
	// Get the current form from .optios (based on name)                                                         // 152
	that.getFormByName = function ( formName ) {                                                                 // 153
                                                                                                              // 154
		check(formName, String);                                                                                    // 155
                                                                                                              // 156
		var currentForm = _(that.forms).findWhere({ formName: formName });                                          // 157
		if (!currentForm)                                                                                           // 158
			throw new Error('You\'re trying to get a form which does not exist: '+formName);                           // 159
                                                                                                              // 160
		return currentForm;                                                                                         // 161
                                                                                                              // 162
	};                                                                                                           // 163
                                                                                                              // 164
	// Client methods                                                                                            // 165
	if (Meteor.isClient) {                                                                                       // 166
                                                                                                              // 167
		// Methods for handling the input                                                                           // 168
		that.handleInput = {};                                                                                      // 169
                                                                                                              // 170
		that.handleInput.checkRequiredFields = function ( requiredFields, inputRow ) {                              // 171
			// Make sure all required fields are set                                                                   // 172
			_.each(requiredFields, function(requiredField) {                                                           // 173
				if (!inputRow[ requiredField.name ]) {                                                                    // 174
					that.log.logMessage({ errorDoc: inputRow });                                                             // 175
					throw new Error('Required field not set: ' + requiredField.name + '. See passed doc in the row above.'); // 176
				}                                                                                                         // 177
			});                                                                                                        // 178
			return true;                                                                                               // 179
		};                                                                                                          // 180
                                                                                                              // 181
		that.handleInput.setDefaultValues = function ( fieldsWithDefaultValues, inputRow ) {                        // 182
			// Set default values for unset values                                                                     // 183
			_.each(fieldsWithDefaultValues, function( fieldWithDefaultValue ) {                                        // 184
				if( !inputRow[ fieldWithDefaultValue.name ] )                                                             // 185
					inputRow[ fieldWithDefaultValue.name ] = fieldWithDefaultValue.defaultValue;                             // 186
			});                                                                                                        // 187
			return inputRow;                                                                                           // 188
		};                                                                                                          // 189
                                                                                                              // 190
		that.handleInput.createId = function ( _idFields, inputRow, currentForm ) {                                 // 191
                                                                                                              // 192
			var _id;                                                                                                   // 193
                                                                                                              // 194
			// Generate an _id if there are _idFields set by the user                                                  // 195
			_.each(_idFields, function(_idField) {                                                                     // 196
				_id += inputRow[ _idField.name ];                                                                         // 197
			});                                                                                                        // 198
                                                                                                              // 199
			// Hash the _id and remove whitespaces (if the _id is generated by the users _idFields )                   // 200
			if (_id && _idFields.length > 0)                                                                           // 201
				_id = that.hashCode( _id.replace(/ /g, '') );                                                             // 202
                                                                                                              // 203
			// If there is no _id set from _idFields (or explicitly by                                                 // 204
			// setting { _id: 'something' }), generate one!                                                            // 205
			if (!_id)                                                                                                  // 206
				_id = Meteor.uuid();                                                                                      // 207
                                                                                                              // 208
			// Add the userId to the _id if user set addUserIdToId                                                     // 209
			if (currentForm.addUserIdToId)                                                                             // 210
				_id += Meteor.userId().substr(0,10);                                                                      // 211
                                                                                                              // 212
			return _id;                                                                                                // 213
                                                                                                              // 214
		};                                                                                                          // 215
                                                                                                              // 216
		that.saveData = function ( input, formName ) {                                                              // 217
                                                                                                              // 218
			check( input, String );                                                                                    // 219
			check( formName, String );                                                                                 // 220
                                                                                                              // 221
			// Get the form passed to options based on name                                                            // 222
			var currentForm = that.getFormByName( formName );                                                          // 223
                                                                                                              // 224
			// Fix up input data                                                                                       // 225
			input = '"'+input;										// First line                                                                  // 226
			input = input.replace(/	/g, '"	"');	// Place qoutes before and after tabs                                  // 227
			input = input.replace(/\n/g, '"\n"');	// Place quotes on end line (and start of the next)                  // 228
			input = input.replace(/ "/g, '"');		// Remove trailing spaces                                              // 229
			input = input.replace(/	/g, ',');			// Replace all tabs with commas                                        // 230
                                                                                                              // 231
			// Get the header row.                                                                                     // 232
			var header = _(currentForm.fields).pluck('name');                                                          // 233
                                                                                                              // 234
			// Add header-row                                                                                          // 235
			input = header.toString() + '\n' + input;                                                                  // 236
                                                                                                              // 237
			var inputAsArray = $.csv.toObjects(input);                                                                 // 238
                                                                                                              // 239
			// Get the idpart, number, date, required fields and fields with default values                            // 240
			var _idFields = _.where(currentForm.fields, { idpart: true });                                             // 241
			var numberFields = _(_.where(currentForm.fields, { type: 'number' })).pluck('name');                       // 242
			var dateFields = _(_.where(currentForm.fields, { type: 'date' })).pluck('name');                           // 243
			var requiredFields = _.where(currentForm.fields, { required: true });                                      // 244
                                                                                                              // 245
			var fieldsWithDefaultValues = _.filter(currentForm.fields, function ( field ) {                            // 246
				if (field.defaultValue) return field;                                                                     // 247
			});                                                                                                        // 248
                                                                                                              // 249
			inputAsArray = _(inputAsArray).map( function( inputRow ) {                                                 // 250
                                                                                                              // 251
				// Make sure all required fields are set                                                                  // 252
				that.handleInput.checkRequiredFields( requiredFields, inputRow );                                         // 253
                                                                                                              // 254
				// Set default values for unset values                                                                    // 255
				inputRow = that.handleInput.setDefaultValues( fieldsWithDefaultValues, inputRow );                        // 256
                                                                                                              // 257
				// Cretate the _id field                                                                                  // 258
				inputRow._id = that.handleInput.createId( _idFields, inputRow, currentForm );                             // 259
                                                                                                              // 260
				// Remove all values which have the REMOVE key                                                            // 261
				inputRow = _(inputRow).omit('REMOVE');                                                                    // 262
                                                                                                              // 263
				// Execute all the "approvedTypes" transformMethods                                                       // 264
				inputRow = that.types.checkAllTypes( inputRow, currentForm.fields );                                      // 265
                                                                                                              // 266
				return inputRow;                                                                                          // 267
                                                                                                              // 268
			});                                                                                                        // 269
                                                                                                              // 270
			// Check if the user has provided her own save callback method                                             // 271
			if (currentForm.saveCallback) {                                                                            // 272
				                                                                                                          // 273
				// Make sure the saveCallback is a Function                                                               // 274
				check(currentForm.saveCallback, Function);                                                                // 275
                                                                                                              // 276
				inputAsArray = currentForm.saveCallback( inputAsArray );                                                  // 277
                                                                                                              // 278
				check(inputAsArray, Array);                                                                               // 279
                                                                                                              // 280
			}                                                                                                          // 281
                                                                                                              // 282
			if (currentForm.saveToDB) {                                                                                // 283
				// If the user has not provided a custom callback, execute the default save method                        // 284
				Meteor.call('SpreadsheetToMongoDB/save', inputAsArray, formName, function (error, result) {               // 285
					if (error)                                                                                               // 286
						that.log.logMessage(error);                                                                             // 287
				});                                                                                                       // 288
			}                                                                                                          // 289
                                                                                                              // 290
			return inputAsArray;                                                                                       // 291
                                                                                                              // 292
		};                                                                                                          // 293
                                                                                                              // 294
	}                                                                                                            // 295
                                                                                                              // 296
};                                                                                                            // 297
                                                                                                              // 298
SpreadsheetToMongoDB = new SpreadsheetToMongoDBHandler();                                                     // 299
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/krstffr:spreadsheet-to-mongodb/lib/spreadsheet-to-mongodb-server-methods.js                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Meteor.methods({                                                                                              // 1
	'SpreadsheetToMongoDB/save': function ( collection, formName ) {                                             // 2
                                                                                                              // 3
		check( SpreadsheetToMongoDB, SpreadsheetToMongoDBHandler );                                                 // 4
                                                                                                              // 5
		// Var to store the result                                                                                  // 6
		var result = [];                                                                                            // 7
                                                                                                              // 8
		// Get the submitted form from the passed form name                                                         // 9
		var currentForm = SpreadsheetToMongoDB.getFormByName( formName );                                           // 10
                                                                                                              // 11
		// If the user has set addUserId == true, store it in a var for usage when saving docs                      // 12
		if (currentForm.addUserId) {                                                                                // 13
			if (!this.userId)                                                                                          // 14
				throw new Meteor.Error(400, 'You need to be logged in to use this awesome feature.');                     // 15
			var userId = this.userId;                                                                                  // 16
		}                                                                                                           // 17
                                                                                                              // 18
		// Loop over every doc, and save it                                                                         // 19
		_.each(collection, function( doc ){                                                                         // 20
                                                                                                              // 21
			// If addUserId == true, add it to the doc                                                                 // 22
			if (currentForm.addUserId)                                                                                 // 23
				doc.userId = userId;                                                                                      // 24
                                                                                                              // 25
			// Upsert it.                                                                                              // 26
			result.push( currentForm.collection.upsert( doc._id, doc ) );                                              // 27
			                                                                                                           // 28
		});                                                                                                         // 29
                                                                                                              // 30
		return result;                                                                                              // 31
                                                                                                              // 32
	}                                                                                                            // 33
});                                                                                                           // 34
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['krstffr:spreadsheet-to-mongodb'] = {
  SpreadsheetToMongoDB: SpreadsheetToMongoDB
};

})();

//# sourceMappingURL=krstffr_spreadsheet-to-mongodb.js.map
