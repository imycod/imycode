/**
 * 函数“str_ensure_prefix”确保给定的字符串具有指定的前缀。
 * @param {string} s - `s` 参数是一个表示输入字符串的字符串。
 * @param {string} prefix - “prefix”参数是一个字符串，表示所需的前缀，如果“s”字符串尚不存在，则应将其添加到该前缀中。
 * @returns 函数“str_ensure_prefix”返回一个字符串。
 */
declare function str_ensure_prefix(s: string, prefix: string): string;
declare function str_ensure_suffix(s: string, suffix: string): string;

export { str_ensure_prefix, str_ensure_suffix };
