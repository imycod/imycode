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
declare function arr_unique<T>(arr: T[]): T[];

export { arr_unique };
