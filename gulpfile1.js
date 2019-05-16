// 模块加载区域;

const gulp = require("gulp");
const connect = require("gulp-connect");
const concat = require("gulp-concat");
var sass = require('gulp-sass');
sass.compiler = require('node-sass')
const findSync = require("./utils/index").findSync;
const scripts  = require("./conf/index").scripts;
const scssJSON  = require("./conf/index").scss;

let scriptsPathArray = null
let scriptsTaskArray = [];
let scssTaskArray = [];

// 功能定义区

/**
 * @function init 初始化功能 , 编列了scripts路径还有创建了 scripts 指令;
 * @function watchScripts 根据scripts对象实现的 watch 监听封装
 * @function mergeMyScripts 根据scripts 对象实现的scripts指令拆分,文件合并
 * 
 */
function init(){
      scriptsPathArray = findSync("./src/scripts").map(path => {
            return  "./"+path.replace(/\\/g,"/")
      })
      // 禁止数组;
      let scriptsUnSaveArray = ["!./src/scripts/libs/*.js"];
      scriptsPathArray = scriptsPathArray.concat(scriptsUnSaveArray);
      mergeMyScripts(scripts);
      mergeMyScss(scssJSON);
}


function watchScripts(json){
      for(let attr in json){
            gulp.watch(json[attr].src+"*.js",["scripts-"+attr]);
      }
}


function mergeMyScripts(json){
      for(let attr in json ){
            gulp.task("scripts-"+attr,()=>{
                  return gulp.src([scripts[attr].src+"*.js"])
                        .pipe(concat(attr + ".js"))
                        .pipe(gulp.dest("./dev/scripts"))
                        .pipe(connect.reload())
            })
      }
}
function mergeMyScss(json){
      for(let attr in json){
            scssTaskArray.push("scss-"+attr);
            gulp.task("scss-"+attr,()=>{
                  return gulp.src(json[attr].src+"*.+(scss|sass)")
                  .pipe(concat(attr + ".scss"))
                  .pipe(sass())
                  .pipe(gulp.dest("./dev/stylesheets"))
            })
      }
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
});

gulp.task('scss',function(){
      return gulp.src('./src/scss/index/*.scss')
      .pipe(sass().on("error",sass.logError))
      .pipe(gulp.dest('./dev/stylesheets'));
});

gulp.task("connect",()=>{
      connect.server({
            root: 'dev',
            livereload: true,
      });
});

gulp.task("watch",()=>{
      gulp.watch("./src/*.html",["html"]);
      gulp.watch("./src/scss/index/*.scss",["scss"])
      watchScripts(scripts);
});


gulp.task("default",["connect","watch"]);


// fs模块的帮助 => 取出文件夹下所有文件的名称;

// 初始化整个配置文件;

init();





