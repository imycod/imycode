'use strict';

var array = require('./modules/array.js');
var is = require('./modules/is.js');
var method = require('./modules/method.js');
var string = require('./modules/string.js');



exports.arr_unique = array.arr_unique;
exports.is_number = is.is_number;
exports.is_object = is.is_object;
exports.addMethod = method.addMethod;
exports.str_ensure_prefix = string.str_ensure_prefix;
exports.str_ensure_suffix = string.str_ensure_suffix;
