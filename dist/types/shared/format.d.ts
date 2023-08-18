/**
 *  "formatMoney”函数用于将数字格式化为具有指定小数位数和千位分隔符的货币值。
 * @public
 * @param money
 * @param len
 * @param separator
 * @returns
 * @example
 * ```js
 * formatMoney(123456789.123456) // 123,456,789.12
 * ```
 */
declare function formatMoney(money: any, len?: number, separator?: string, curency?: string): string;

export { formatMoney };
