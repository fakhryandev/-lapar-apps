const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const { default: ImageminWebpackPlugin } = require('imagemin-webpack-plugin')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
const imageminMozjpeg = require('imagemin-mozjpeg')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
            ],
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: './sw.bundle.js',
            runtimeCaching: [
                {
                    urlPattern: ({ url }) =>
                        url.href.startsWith(
                            'https://restaurant-api.dicoding.dev/'
                        ),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-api',
                    },
                },
                {
                    urlPattern: ({ url }) =>
                        url.href.startsWith(
                            'https://restaurant-api.dicoding.dev/images/medium/'
                        ),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-image-api',
                    },
                },
                {
                    urlPattern: ({ url }) =>
                        url.href.startsWith(
                            'https://restaurant-api.dicoding.dev/images/small/'
                        ),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-image-api',
                    },
                },
                {
                    urlPattern: ({ url }) =>
                        url.href.startsWith(
                            'https://restaurant-api.dicoding.dev/images/large/'
                        ),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'restaurant-image-api',
                    },
                },
            ],
        }),
        new ImageminWebpackPlugin({
            plugins: [
                imageminMozjpeg({
                    quality: 60,
                    progressive: true,
                }),
            ],
        }),
        new ImageminWebpWebpackPlugin({
            config: [
                {
                    test: /\.(jpe?g|png)/,
                    options: {
                        quality: 60,
                    },
                },
            ],
            overrideExtension: true,
        }),
    ],
}
