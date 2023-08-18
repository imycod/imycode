/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-08-09 14:49:38
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-08-18 14:35:13
 * @FilePath: \vue3-plugin-effect-vite-admin-element-plusd:\studio\imycode\rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'rollup'
import ts from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import babelPlugin from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import { importExportPlugin } from 'rollup-plugin-import-export'

const config = defineConfig([
    {
        input: ['src/index.ts'],
        output: [
            {
                dir: 'dist/esm',
                format: 'esm',
                preserveModules: true,
            },
            {
                dir: 'dist/cjs',
                format: 'cjs',
                preserveModules: true,
            },
        ],
        plugins: [
            importExportPlugin(),
            ts(),
            babelPlugin({ exclude: '**/node_modules/**' }),
            commonjs(),
        ],
    },
    {
        input: 'src/helper/index.ts',
        output: [
            {
                file: 'dist/umd/helper/index.js',
                format: 'umd',
                name: '/helper',
            },
        ],
        plugins: [
            importExportPlugin(),
            ts(),
            babelPlugin({ exclude: '**/node_modules/**' }),
            commonjs(),
            resolve({ preferBuiltins: true, mainFields: ['browser'] }),
            globals(),
            builtins(),
            terser(),
        ],
    },
    {
        input: 'src/directives/index.ts',
        output: [
            {
                file: 'dist/umd/directives/index.js',
                format: 'umd',
                name: '/directives',
            },
        ],
        plugins: [
            importExportPlugin(),
            ts(),
            babelPlugin({ exclude: '**/node_modules/**' }),
            commonjs(),
            resolve({ preferBuiltins: true, mainFields: ['browser'] }),
            globals(),
            builtins(),
            terser(),
        ],
    },
    // types
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/types',
            format: 'esm',
            preserveModules: true,
        },
        plugins: [
            importExportPlugin(),
            dts()
        ],
    },
])

export default config
