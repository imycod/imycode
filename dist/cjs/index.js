'use strict';

var formatMoney = require('./directives/modules/formatMoney.js');
var array = require('./helper/modules/array.js');
var is = require('./helper/modules/is.js');
var method = require('./helper/modules/method.js');
var format = require('./shared/format.js');
var string = require('./helper/modules/string.js');



exports.loadMoney = formatMoney.loadMoney;
exports.arr_unique = array.arr_unique;
exports.is_number = is.is_number;
exports.is_object = is.is_object;
exports.addMethod = method.addMethod;
exports.overload = method.overload;
exports.moneyFormat = format.formatMoney;
exports.str_ensure_prefix = string.str_ensure_prefix;
exports.str_ensure_suffix = string.str_ensure_suffix;
