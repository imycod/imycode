/**
 * 函数“arr_unique”接受一个数组作为输入，并返回一个仅包含唯一元素的新数组。
 * @public
 * @param  arr - 参数“arr”是一个“T”类型的数组。
 * @returns 函数“arr_unique”从输入数组“arr”返回唯一元素的数组。
 * @example
 * ```ts
 * const arr = [1, 2, 3, 3, 4, 5, 5, 5, 6]
 * const unique = arr_unique(arr)
 * console.log(unique) // [1, 2, 3, 4, 5, 6]
 * ```
 */
export declare function arr_unique<T>(arr: T[]): T[];

export declare function is_number(n: any): n is number;

export declare function is_object(o: any): o is Exclude<object, Array<any>>;

/**
 * 函数“str_ensure_prefix”确保给定的字符串具有指定的前缀。
 * @param {string} s - `s` 参数是一个表示输入字符串的字符串。
 * @param {string} prefix - “prefix”参数是一个字符串，表示所需的前缀，如果“s”字符串尚不存在，则应将其添加到该前缀中。
 * @returns 函数“str_ensure_prefix”返回一个字符串。
 */
export declare function str_ensure_prefix(s: string, prefix: string): string;

export declare function str_ensure_suffix(s: string, suffix: string): string;

export { }
