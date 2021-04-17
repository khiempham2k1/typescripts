module.exports = {
    mode: "development",

    entry: {
        main: './src/backend/app.ts',
        user: "./src/backend/userApp.ts",
    },

    output: {
        publicPath: '/assets/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',//nội dung các thư viện liên quan
        path: __dirname + "/dist/backend",
    },

    devtool: "source-map",

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },



    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'

            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },

    optimization: {
        splitChunks: {
            chunks: "all"
        },
        usedExports: true
    },


}