const projectName = require('./project');
const path = require('path');
const CompressionWebpackPlugin = require("compression-webpack-plugin")
const productionGzipExtensions = ['js', 'css']
function resolve (dir) {
  // console.log("dir",__dirname);
  return path.join(__dirname, dir)
}

let projectNames = projectName.name.split('/')[0];
let projectVersion = projectName.name.split('/')[1]+'';
let projectDir = `${projectName.name}`
console.log(projectDir,'projectDir')
console.log(projectVersion,'projectVersion')
const pja = {
  pages: {
        index: {
          entry: `src/projects/${projectDir}/main.js`,
          template: 'public/index.html',
          filename: 'index.html',
        }
      },
      outputDir:`dist/${projectDir}/`,
      devServer: {
        // 设置主机地址
        host: '0.0.0.0',
        // 设置默认端口
        port: 8080,
        // 设置代理
        proxy: {
          '/api': {
            // 目标 API 地址
            target: '',
            ws: false,
            // 将主机标头的原点更改为目标URL
            changeOrigin: false,
            pathRewrite: {
              '^/api': ''
            },
            secure: false
          }
        }
      },
      chainWebpack: (config)=> {
          config.entry.app = ['babel-polyfill', `../src/projects/${projectDir}/main.js`]
          config.resolve.alias
            .set('@', resolve(`../src/projects/${projectDir}/`))
            .set('$project', resolve('../src/'))
      },
      configureWebpack: (config) => {
          //开启gzip压缩,需要配置Nginx服务器gzip选项开启
          // config.plugins.push(
          //   new CompressionWebpackPlugin({
          //     filename: '[path].gz[query]',
          //     algorithm: 'gzip',
          //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          //     threshold: 10240,
          //     minRatio: 0.8
          //   })
          // );
      },
}
const pjb = {
  pages: {
        index: {
          entry: `src/projects/${projectDir}/main.js`,
          template: 'public/index_s.html',
          filename: 'index.html',
        }
      },
      outputDir:`dist/${projectDir}/`,
      devServer: {
        // 设置主机地址
        host: '0.0.0.0',
        // 设置默认端口
        port: 8080,
        // 设置代理
        proxy: {
          '/api': {
            // 目标 API 地址
            target: '',
            // 如果要代理 websockets
            ws: false,
            // 将主机标头的原点更改为目标URL
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            },
            secure: false
          }
        }
      },
      chainWebpack: (config)=> {
        config.entry.app = ['babel-polyfill', `../src/projects/${projectDir}/main.js`]
        config.resolve.alias
          .set('@', resolve(`../src/projects/${projectDir}/`))
          .set('$project', resolve('../src/'))
      }
}
const config = {
    projectA: {
      "1":{
        ...pja
      },
      "2":{
        ...pja
      },
      "3":{
        ...pja
      },
      "4":{
        ...pja
      },
      "5":{
        ...pja
      },
    },
    projectB: {
      "1":{
        ...pjb
      },
      "2":{
        ...pjb
      },
      "3":{
        ...pjb
      },
      "4":{
        ...pjb
      },
      "5":{
        ...pjb
      },
    }

}

const configObj = config[projectNames][projectVersion]
module.exports = configObj
