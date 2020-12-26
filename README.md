
 
``` text
├── README.md          文档  
├── config             webpack配置及插件    
├── dist               打包目标文件夹  
├── logs               server端报错日志  
├── package.json       包管理文件  
├── scripts            shell 脚本  
├── src                项目文件夹 - [server, web]  
└── webpack.config.js  webpack配置文件  
```

## 打包server端
> 在server端使用es6 module 通过gulp编译成 可支持的 require的方式

- gulp-babel 将es6 module编译成require
- gulp-plumber 防止报错终止监控
- 
