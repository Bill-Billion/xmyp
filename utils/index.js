const fs = require("fs");
let join = require('path').join;
const gulp = require("gulp");
const connect = require("gulp-connect");
const concat = require("gulp-concat");
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var uglify = require('gulp-uglify');
let cleanCSS = require('gulp-clean-css');
const babel = require("gulp-babel");
const proxy = require('http-proxy-middleware')



function watchScripts(json, prefix) {
    for (let attr in json) {
        gulp.watch(json[attr].src + "*.js", [prefix + attr]);
    }
}

function watchScss(json, prefix) {
    for (let attr in json) {
        gulp.watch(json[attr].src + "*.scss", [prefix + attr])
    }
}

function mergeMyScripts(json, prefix = "scripts-", mode = "dev") {
    let scriptsTaskArray = [];
    for (let attr in json) {
        scriptsTaskArray.push(prefix + attr)
        if (mode === "dev") {
            devScriptsMode(json, prefix, mode, attr)
        } else if (mode === "build") {
            buildScriptsMode(json, prefix, mode, attr)
        }
    }
    return scriptsTaskArray;
}
// scripts 开发环境下配置
function devScriptsMode(json, prefix, mode, attr) {
    gulp.task(prefix + attr, () => {
        return gulp.src([json[attr].src + "*.js"])
            .pipe(concat(attr + ".js"))
            .pipe(gulp.dest("./" + mode + "/scripts"))
            .pipe(connect.reload())
    })
}
// scripts 构建环境下配置;
function buildScriptsMode(json, prefix, mode, attr) {
    gulp.task(prefix + attr, () => {
        return gulp.src([json[attr].src + "*.js"])
            .pipe(concat(attr + ".js"))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            // .pipe(uglify())
            .pipe(gulp.dest("./dist/scripts"))
    })
}

function mergeMyScss(json, prefix = "scss-", mode = "dev") {
    let scssTaskArray = [];
    for (let attr in json) {
        scssTaskArray.push(prefix + attr);
        if (mode === "dev") {
            devScssMode(json, prefix, mode, attr)
        } else if (mode === "build") {
            buildScssMode(json, prefix, mode, attr)
        }
    }
    return scssTaskArray;
}

// scss 开发配置
function devScssMode(json, prefix, mode, attr) {
    gulp.task(prefix + attr, () => {
        return gulp.src(json[attr].src + "*.+(scss|sass)")
            .pipe(concat(attr + ".scss"))
            .pipe(sass().on("error",sass.logError))
            .pipe(gulp.dest("./" + mode + "/stylesheets"))
            .pipe(connect.reload())
    })
}
// scss build配置
function buildScssMode(json, prefix, mode, attr) {
    gulp.task(prefix + attr, () => {
        return gulp.src(json[attr].src + "*.+(scss|sass)")
            .pipe(concat(attr + ".scss"))
            .pipe(sass())
            .pipe(cleanCSS({ debug: true }, (details) => {
                console.log(`${details.name}: ${details.stats.originalSize}`);
                console.log(`${details.name}: ${details.stats.minifiedSize}`);
            }))
            .pipe(gulp.dest("./dist/stylesheets"))
    })
}

function gpProxy(proxyList){
    let result = [];
    for(let attr in proxyList) {
          let options = {
                target : proxyList[attr].url,
                changeOrigin : true ,
                pathRewrite : !proxyList[attr].rewrite ? {
                      ["^"+attr] : ""
                } : {}
          };
          result.push( proxy( attr , options) )
    }
   return result;
}

//读取文件路径功能;
function findSync(startPath) {
    let result = [];
    function finder(path) {
        let files = fs.readdirSync(path);
        files.forEach((val, index) => {
            let fPath = join(path, val);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) finder(fPath);
            if (stats.isFile()) result.push(fPath);
        });

    }
    finder(startPath);
    return result;
}

module.exports = {
    findSync,
    watchScripts,
    watchScss,
    mergeMyScripts,
    mergeMyScss,
    gpProxy,
}