const path = require('path');
// 帮助我们自动生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 会将之前编译文件的内容清空在追加 记住需要解构 否则会报：TypeError: CleanWebpackPlugin is not a constructor
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中所有的配置信息都应该写在module.exports中
module.exports = {
    mode:"development",
    // 指定入口文件
    entry:'./src/index.ts',
    // 指定打包文件所在目录
    output:{
        // 指定打包文件的目录
        path: path.resolve(__dirname,'dist'),
        // 打包后文件的文件名
        filename:'bundle.js'
    },

    // 指定webpack打包时要使用的模块
    module:{
        // 指定要加载的规则
        rules:[
            {
                // test指定的是规则生效的文件
                test:/\.ts$/,
                // 要使用的loader
                use:'ts-loader',
                // 要排除的文件
                exclude:/node-modules/
            }
        ]
    },
    // 配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title:'这是一个自定义的title'
            template:'./src/index.html'
        }),
    ],

    // 用来设置引用模块，使用import时候需要的添加这个配置
    resolve:{
        extensions:['.ts','.js']
    }
}