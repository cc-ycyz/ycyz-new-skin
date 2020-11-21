const projectName = require('./project');
const path = require('path');
const CompressionWebpackPlugin = require("compression-webpack-plugin")
const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
  // console.log("dir",__dirname);
  return path.join(__dirname, dir)
}

let projectNames = projectName.name.split('/')[0];
let projectVersion = projectName.name.split('/')[1] + '';
let projectDir = `${projectName.name}`
console.log(projectDir, 'projectDir')
console.log(projectVersion, 'projectVersion')
const pja = {
  // https://juejin.cn/post/6844904183917871117#heading-7 js提取公用部分
  pages: {
    index: {
      entry: `src/projects/${projectDir}/main.js`,
      template: 'public/index.html',
      filename: 'index.html',
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。 每个project的subpage 则作为 模板的入口 1-2-3-4-5.....
    // todo 模板 
    // 公共资源地址：
    // 整体模板地址：
    // aa1模板地址：
    // aa2模板地址：
    // aa3模板地址：
    // aa4模板地址：
    // aa5模板地址：
    // aa6模板地址：
    // 个人中心地址：
    // 分别对应指定参数，进行渲染和打包
    // 如果该模板内可以进行打包，那么可以通过配置参数使各个模块拼装
    // 直接在这一个文件内进行拼接页面即可完成 模板选择功能
    subpage: {
      entry: `src/projects/${projectDir}/subpage/main.js`,
      template: 'public/subpage.html',
      filename: 'subpage.html',
    }

  },
  outputDir: `dist/${projectDir}/`,
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
  chainWebpack: (config) => {
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
  outputDir: `dist/${projectDir}/`,
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
  chainWebpack: (config) => {
    config.entry.app = ['babel-polyfill', `../src/projects/${projectDir}/main.js`]
    config.resolve.alias
      .set('@', resolve(`../src/projects/${projectDir}/`))
      .set('$project', resolve('../src/'))
  }
}
const config = {
  projectA: {
    "1": {
      ...pja
    },
    "2": {
      ...pja
    },
    "3": {
      ...pja
    },
    "4": {
      ...pja
    },
    "5": {
      ...pja
    },
  },
  projectB: {
    "1": {
      ...pjb
    },
    "2": {
      ...pjb
    },
    "3": {
      ...pjb
    },
    "4": {
      ...pjb
    },
    "5": {
      ...pjb
    },
  }

}

const configObj = config[projectNames][projectVersion]
module.exports = configObj