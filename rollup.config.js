import typescript from '@rollup/plugin-typescript';

export default {
    input: "src/index.tsx",
    output: [
        {
            file: 'build/index.es.js',
            format: "es",
            exports: "named",
            sourcemap: true
        }
    ],
    plugins: [
        typescript()
    ]
};
