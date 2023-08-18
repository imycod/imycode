import { describe, expect, it, test } from 'vitest'

import { overload } from "../src/modules/method"

test('overload', () => {
    const fn1 = overload('number','string', (a: number, b: string) => a + b))

    expect(fn1(1,'2')).toEqual('12')
    // expect(fn2('1')).toEqual('1')
    // expect(fn3(true)).toEqual(true)
})

