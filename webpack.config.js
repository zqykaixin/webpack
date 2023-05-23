const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", //入口
  output: {
    path: path.join(__dirname, "dist"), //输出的目录只能是绝对目录
    filename: "bundle.js",
  },
  //开发服务的配置文件
  devServer: {
    //告诉dev  server 从什么位置查找文件
    static: path.join(__dirname, "dist"),
  },
};
