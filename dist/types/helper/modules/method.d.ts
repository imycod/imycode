interface paramsObj {
    [key: string]: (...args: any[]) => any;
}
/**
 * 函数“addMethod”向对象添加新方法，同时保留任何具有相同名称的现有方法的功能。
 * @public
 * @param {paramsObj} object - “object”参数是我们要添加方法的对象。
 * @param {string} name - “name”参数是一个字符串，表示要在“object”中添加或修改的方法的名称。
 * @param {Function} fn - 参数“fn”是一个函数，它将作为方法添加到“对象”中。
 * @returns 函数“addMethod”没有 return 语句。因此，它不会显式返回任何内容。
 * @example
 * ```ts
 * const obj = {}
 * addMethod(obj, 'greet', function (a:number,b:string) {  ...todo  })
 * obj.greet(1,'2')
 * addMethod(obj, 'greet', function (a:number) {  ...todo  })
 * obj.greet(1)
 * ```
 */
declare const addMethod: (object: paramsObj, name: string, fn: Function) => void;
/**
 * 重载函数
 * @beta
 * @param {Function} fn - 参数“fn”是一个函数，它将作为方法添加到“对象”中。
 * @returns 函数“overload”没有 return 语句。因此，它不会显式返回任何内容。
 * @example
 * ```ts
 * const fn = overload(
 *    (a: number) => a,
 *    (a: string) => a,
 *    (a: boolean) => a,
 * );
 * fn(1)
 * fn('1')
 * fn(true)
 * ```
 * @example
 **/
declare function overload<T extends (...args: any[]) => any>(...fns: T[]): T;

export { addMethod, overload };
