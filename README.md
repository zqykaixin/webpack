# webpack
webpack学习

初始化一个项目

npm init -y

node版本

nvm install 18.9.0

切换镜像源

npm config set registry http://registry.npm.taobao.org

下载webpack

npm i webpack webpack-cli -D

下载开发服务器

npm i webpack-dev-server -D
"dev": "webpack-dev-server --open", " --open" 表示自动打开服务器

下载 css-loader style-loader 否则无法识别css模块

npm i css-loader style-loader -D

下载html-webpack-plugin 插件 用来自动生成html文件

npm i html-webpack-plugin -D

下载 file-loader:解析文件 比如字体,图片,json文件 url-loader  

npm i file-loader url-loader  -D

下载 clean-webpack-plugin 插件, 用来每次build之前先清空dist文件.

分离css和js模块,单独加载.

npm i mini-css-extract-plugin -D

压缩js和css

npm i terser-webpack-plugin  -D

webpack5 一下的用 optimize-css-assets-webpack-plugin 插件压缩css . 

webpack5 需要用 npm install css-minimizer-webpack-plugin 插件压缩css

指定存放位置, 图片放在images,css放在css文件夹

在html加载img标签

npm i html-withimg-loader - D
