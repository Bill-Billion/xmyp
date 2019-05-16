// 模块加载区域;

const gulp = require("gulp");
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
const imagemin = require('gulp-imagemin');


const {     mergeMyScripts,
            mergeMyScss,
} = require("./utils/index")

const scripts  = require("./conf/index").scripts;
const scssJSON  = require("./conf/index").scss;


let   [scriptsTaskArray,scssTaskArray] = [];



// 功能定义区

/**
 * @function init 初始化功能 , 编列了scripts路径还有创建了 scripts 指令;
 * @function watchScripts 根据scripts对象实现的 watch 监听封装
 * @function mergeMyScripts 根据scripts 对象实现的scripts指令拆分,文件合并
 * 
 */
function init(){
      scriptsTaskArray = mergeMyScripts(scripts,"scripts-build-","build");
      scssTaskArray = mergeMyScss(scssJSON,"scss-build-","build");
}

//指令定义区

/**
 * @task html :  转存html
 * 
 */


gulp.task("html-build",()=>{
      return gulp.src(["./src/*.html"]).pipe(gulp.dest("./dist"));
})


gulp.task("images-build",()=>{
      return gulp.src('./src/images/**/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/images'))
})

init();

gulp.task("scripts-build",scriptsTaskArray)
gulp.task('scss-build', scssTaskArray);

gulp.task("build",["html-build","scripts-build","scss-build","images-build"]);

// fs模块的帮助 => 取出文件夹下所有文件的名称;

// 初始化整个配置文件;







