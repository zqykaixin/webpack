const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  //入口文件，可以是单入口可以是多入口。
  //单入口
  entry: "./src/index.js",
  //多入口
  //   entry: {
  //     index: "./src/index.js",
  //     login: "./src/login.js",
  //   },
  output: {
    path: path.join(__dirname, "dist"), //输出的目录只能是绝对目录
    // filename 可以使用变量 ，多入口. 这个name 就是对应的入口中的key
    //如果是但入口文件, chunk的名字为main
    //hash 会为本次生成的文件添加hash值, :8 用来设置位数.
    //hash用来判断文件是否做出了修改.如果文件内用没有被修改,hash不会变
    filename: "[name].[hash:8].js",
  },
  //开发服务的配置文件
  //如果使用了devserver,那么产出的文件都在内存不在硬盘(为了速度)
  devServer: {
    //告诉dev  server 从什么位置查找文件
    static: path.join(__dirname, "dist"),
  },
  //   通过使用不同的loader，webpack把不同的文件转换成js文件。。 css ES6 jsx
  module: {
    rules: [
      {
        test: /\.css$/, //如果requier或者inport的文件是css文件的话
        // loader
        // use 可以是字符串 可以数组。 如果只需要一个就是字符串
        // 顺序有讲究，  从右向左，从下到上，依次处理
        //css文件中img路径也是css-loader的能力
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|jpeg)/, //如果requier或者inport的文件是css文件的话
        //file-loader 加载图片模块 底层做了什么事情?直接拷贝他的路径
        use: "file-loader",
      },
    ],
  },

  plugins: [
    //这个插件用来产出html文件
    new HtmlWebpackPlugin({
      //指定生成的html模板
      template: "./src/index.html",
      filename: "index.html", // 产出文件的名字
      hash: true, //为了避免缓存
      //如果不配置,会给HTML文件插入所有的js文件资源
      //   chunks: ["index"],
    }),
    //这个插件用于每次大抱歉向清空dist文件.
    new CleanWebpackPlugin(),
  ],
};
