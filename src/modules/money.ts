/**
 *  “moneyFormat”函数用于将数字格式化为具有指定小数位数和千位分隔符的货币值。 
 * @public
 * @param money 
 * @param len 
 * @param separator 
 * @returns 
 * @example
 * ```js
 * moneyFormat(123456789.123456) // 123,456,789.12
 * ```
 */
function moneyFormat(money, len = 2, separator = ',', curency = '￥') {
    len = len || 2
    if (!money && money !== 0) return ''
    if (isNaN(+money)) return ''
    if (money === 0 || money === '0') return '0.' + '0'.repeat(len)
    var arr = (money + '').split('.')
    var intStr = arr[0] ? arr[0] : 0
    var floatStr = arr[1] ? arr[1] : 0
    if (floatStr === 0) {
        floatStr = '0'.repeat(len)
    } else {
        floatStr = (+('0.' + floatStr)).toFixed(len).split('.')[1]
    }
    money = (intStr + '.' + floatStr).replace(/(\d{1,3})(?=(?:\d{3})+\.)/g, `$1${separator}`)
    return curency + money
}

export {
    moneyFormat
}