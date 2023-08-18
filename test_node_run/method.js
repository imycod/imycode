function overload(params) {
    const map = new Map();

    const keys = Object.keys(params)
    if (!keys.length) return () => { throw new Error("No matching overload") };
    keys.forEach((key) =>{
        const types = params[key].toString().match(/\((.*?)\)/)?.[1].split(",") ?? [];
        console.log('types-----',types);
        return map.set(key, params[key])
    })

    return ((...args) => {
        const key = args.map((a) => typeof a).join('.');
        const fn = map.get(key);
        if (fn) {
            return fn(...args);
        } else {
            throw new Error("No matching overload")
        }
    });
}
const fn1 = overload({
    'string.number.string': (a, b, c) => a + b + c,
    'string.number': (a, b) => a + b,
    'string.number.string': (a = '10', b, c = '10') => a + b + c,
})


console.log(fn1('1', 2, '3')); //123
console.log(fn1('1', 2)); // 12
console.log(fn1('20', 3, '1')); // 2031
console.log(fn1('20', 3)); // 20310

