// 模块加载区域;

const gulp = require("gulp");
const connect = require("gulp-connect");
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

const {
            scripts,
            scss : scssJSON,
            proxyList
      } = require("./conf/index")


const {     mergeMyScripts,
            mergeMyScss,
            watchScripts,
            watchScss,
            gpProxy
      } = require("./utils/index")

let   [scriptsTaskArray,scssTaskArray] = [];


// 功能定义区

/**
 * @function init 初始化功能 , 编列了scripts路径还有创建了 scripts 指令;
 * @function watchScripts 根据scripts对象实现的 watch 监听封装
 * @function mergeMyScripts 根据scripts 对象实现的scripts指令拆分,文件合并
 * 
 */
function init(){
      scriptsTaskArray = mergeMyScripts(scripts,"scripts-");
      scssTaskArray = mergeMyScss(scssJSON,"scss-");
}


//指令定义区

/**
 * @task html :  转存html
 * @task connect : 服务器配置
 * @task watch : 监听
 * @task default : 自动开启环境
 * 
 */


gulp.task("html",()=>{
      return gulp.src(["./src/*.html"]).pipe(gulp.dest("./dev")).pipe(connect.reload());
})

gulp.task("connect",()=>{
      connect.server({
            root: 'dev',
            livereload: true,
            middleware:function(connect, opt){
                  return gpProxy(proxyList);
            }
      });
})

gulp.task("watch",()=>{
      gulp.watch("./src/*.html",["html"]);
      gulp.watch("./src/scss/index/*.scss",["scss"])
      watchScripts(scripts,"scripts-");
      watchScss(scssJSON,"scss-");
})

gulp.task("images",()=>{
      return gulp.src('./src/images/**/*')
            .pipe(gulp.dest('dev/images'))
})

init();

console.log(scriptsTaskArray,scripts);
gulp.task("scripts",scriptsTaskArray);

console.log(scssTaskArray,scssJSON);
gulp.task('scss', scssTaskArray);

gulp.task("gulp-dev",["html","scripts","scss","images","connect","watch"]);


// fs模块的帮助 => 取出文件夹下所有文件的名称;

// 初始化整个配置文件;

require("./build"); 





