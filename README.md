# 小米有品商城

###  介绍
复刻小米有品商城
预计实现：主页、登录、注册、购物车、商品详情等功能

### 软件架构

```
.
├── conf
│	├── index.js
├── dist
│	├── images
│	├── scripts
│	│	├── index.js
│	│	├── login.js
│	│	├── register.js
│	├── stylesheets
│	│	├── index.css
│	│	├── login.css
│	│	├── register.css
│	├── index.html
│	├── login.html
│	├── register.html
├── src
│	├── images
│	├── scripts
│	│	├── index.js
│	│	├── login.js
│	│	├── register.js
│	├── scss
│	│	├── _commont
│	│	│	├──reset.scss
│	│	├── index
│	│	│	├──index.scss
│	│	├── login
│	│	│	├──login.scss
│	│	├── register
│	│	│	├──register.scss
│	├── index.html
│	├── login.html
│	├── register.html
├── utils
│	├── index.js
├── .gitignore
├── README.md
├── build.js
├── gulpfile.js
├── package-lock.json
├── package.json
```

----

### 目标功能

- [ ] 小米有品主页排版
- [ ] 主页样式复刻
- [ ] 登录界面前端
- [ ] 登录界面后端
- [ ] 注册界面前端
- [ ] 注册界面后端
- [ ] 商品详情页
- [ ] 商品管理界面前端
- [ ] 商品管理界面后端

---

#### 使用说明

*安装运行环境 `npm install`
*启动自动打包工具 `npm start`
*建立工程化文件 `npm run build`

1. 建立目录结构，在conf文件夹下的json之中配置自己的开发路径

项目路径配置示例

```javascript
  scripts : {
            "index" : {
                  src : "./src/scripts/index/"
            },
            "login" : {
                  src : "./src/scripts/login/"
            }
      },
      scss : {
            "index" :{
                  src : "./src/scss/index/"
            },
            "login" :{
                  src : "./src/scss/login/"
            }
      }
```

2. npm run bulid 打包，打包之后所有的文件都是独立的，例如 index.xxx.js ,index.xxx.js 等n个js会合并为一个index.js ， 这个命名是根据config里面的json的key值命名的。

#### 部分git语句

1. git clone 项目到本地;
2. git pull 保证版本最新;
3. git branch sayhello-huaizhi(业务名-你的名字) 创建自己的开发分支;
4. git branch 查看分支是否成功建立
5. git checkout sayhello-huaizhi 切换分支(之前路径后面的 分支名显示应由 master -变为> 你的分支名)
6. ....开发   创建一个 sayHello-huaizhi.js  document.write("你的名字"+"helloworld");
       在index.html 之中引入
7. git add -A 
8. git commit -m "注释请规范编写(1.保证你更新的模块功能体现出来，更改的代码在哪里体现出来)";
9. git push -u orgin 分支名;

