const path = require('path');

module.exports = {
    entry: './assets/js/app.ts',
    watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/assets/js')
    }
}