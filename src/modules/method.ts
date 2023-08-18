/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-08-09 17:06:46
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-08-14 10:56:58
 * @FilePath: \vue3-plugin-effect-vite-admin-element-plusd:\studio\imycode\src\modules\method.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
const addMethod = function (object: paramsObj, name: string, fn: Function) {
    const old = object[name];

    object[name] = function (...args: any[]) {
        if (fn.length === args.length) {
            return fn.apply(this, args);
        } else if (typeof old === 'function') {
            return old.apply(this, args);
        }
    };
};

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
function overload<T extends (...args: any[]) => any>(...fns: T[]): T {
    const map = new Map<string, T>();
    for (const fn of fns) {
        // 匹配传入的参数列入 fn(a,b) => ['a','b']
        const types = fn.toString().match(/\((.*?)\)/)?.[1].split(",") ?? [];

        const key = types.map((t) => {
            // 判断t是否有默认值 (a=1,b) => ['a=1','b']
            if (t.includes("=")) {
                return t.split("=")[0].trim()
            } else {
                return t.trim()
            }
        }).join(",");
        // 'a,b' => fn
        map.set(key, fn);
    }
    return ((...args: any[]) => {
        // const key = args.map((a) => typeof a).join(",");
        const key = args.join(',')
        console.log('key---', args);
        const fn = map.get(key);
        if (fn) {
            return fn(...args);
        } else {
            throw new Error("No matching overload");
        }
    }) as T;
}

export {
    addMethod,
    overload
}