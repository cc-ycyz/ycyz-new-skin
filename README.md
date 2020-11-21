# new-skin

## Project setup
```
npm install

npm run d projectA/1
npm run b projectB/2
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


###### 整体结构目录
```text
    .
    ├── README.md
    ├── folder_zip.py
    ├── pc                                              模板内容
    │   ├── all                                         整体模板
    │   │   └── 1                                       第一套
    │   ├── chess                                       chess
    │   │   └── 1                                       第一套
    │   ├── electronics                                 electronics
    │   │   └── 1                                       第一套
    │   ├── fish                                        fish
    │   │   └── 1                                       第一套
    │   ├── lottery                                     lottery
    │   │   └── 1                                       第一套
    │   ├── member                                      个人中心
    │   │   ├── 2                                       第一套
    │   │   └── 3                                       第二套
    │   ├── sports                                      sports
    │   │   └── 1                                       第一套
    │   └── video                                       video
    │       └── 1                                       第一套
    └── public                                          公共资源
        ├── js                                          公共JS
        │   ├── common_ajax.js                          公共接口请求地址 + 接口请求方法
        │   └── common_forpage.js                       页面跳转方法
        └── lib                                         第三方库
            ├── css
            ├── i18n                                    国际化插件
            └── js
           
```
###### 整体模板目录
```text
    .
    ├── member
    │   └── discount.tpl
    ├── pages                                       整体内容页面
    │   ├── chess.tpl
    │   ├── download.tpl
    │   ├── electronics.tpl
    │   ├── fish.tpl
    │   ├── index.tpl
    │   ├── lottery.tpl
    │   ├── sports.tpl
    │   └── video.tpl
    ├── partials                                    整体组件
    │   ├── footer.tpl                              底部组件
    │   └── header.tpl                              头部组件
    ├── preview.jpeg
    └── static                                      整体模板资源文件
        ├── css
        │   ├── download-gold.css
        │   ├── download-gold.min.css
        │   └── download-gold.scss
        ├── images
        │   └── download-gold
        │       ├── 01-txt.png
        │       ├── 01_bg.png
        │       ├── Bt_bg.png
        │       ├── android_button.png
        │       ├── icon_bt.png
        │       └── ios_button.png
        └── js
            ├── i18n-en.js
            └── i18n-zh.js
```

-----