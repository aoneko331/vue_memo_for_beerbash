const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = ({ config }) => {
    config.resolve.alias['@'] = rootPath

    config.module.rules.push({
        test: /\.s?css$/,
        loaders: [
            'style-loader',
            'css-loader',
            // 'sass-loader',
            {
                loader: 'sass-loader',
                options: {
                    data: `@import "@/val.scss";`,
                    include: path.resolve(__dirname, '../src')
                }
            }
        ]
    })

    // config.module.rules.push({
    //     test: /\.vue$/,
    //     loader: 'storybook-addon-vue-info/loader',
    //     enforce: 'post'
    // })

    return config
}