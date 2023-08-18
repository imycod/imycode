'use strict';

var format = require('../../shared/format.js');

/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-08-16 18:23:31
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-08-18 11:21:46
 * @FilePath: \vue3-plugin-effect-vite-admin-element-plusd:\goktech\pms-pc\src\directives\format-money.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 格式化输入框输入金额的指令，自动格式化金额，每三位加逗号
 * @param app
 * @example
 * ```js
    const inputValue=ref('')
    <input type="text" v-format-money v-model="inputValue">
 * ```
 */
const moneyOptions = {
    precision: 2,
    thousands: ',',
    curency: '', // 可处理可不处理看情况
};
function loadMoney(app) {
    // 自定义指令
    const params = {
        mounted(el, binding) {
            // 判断是否是input元素
            var els = el.tagName.toLocaleUpperCase() === 'INPUT' ? el : (el.querySelector('input') ? el.querySelector('input') : null);
            if (els) {
                el = els;
            }
            else {
                throw new Error('v-money-format requires 1 input');
            }
            const opt = Object.assign({}, moneyOptions, binding.value ? binding.value : {});
            const regStr = '/^$*+?.|';
            const inRegStr = regStr.includes(opt.thousands) ? (`\\${opt.thousands}`) : opt.thousands;
            const thousandsReg = new RegExp(inRegStr, 'g');
            if (!el.isFocus) {
                el.value = format.formatMoney(el.value, opt.precision, opt.thousands, opt.curency);
            }
            el.onfocus = function () {
                el.isFocus = true;
                el.value = el.value.replace(thousandsReg, '');
            };
            el.onblur = function () {
                el.isFocus = false;
                el.value = format.formatMoney(el.value, opt.precision, opt.thousands, opt.curency);
            };
            el.oninput = function () {
                const reg = new RegExp('^\\D*(\\d*(?:\\.\\d{0,' + opt.precision + '})?).*$', 'g');
                el.value = el.value.replace(thousandsReg, '').replace(reg, '$1').replace(/^(0)[^.]/g, '$1');
            };
        }
    };
    app.directive('format-money', params);
}

exports.loadMoney = loadMoney;
