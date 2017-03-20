/**
 * Created by zhihe on 2017/3/20.
 */

//导入需要的工具包 ：require('node_module里面对应的模快')
var gulp = require('gulp'),
    sass = require('gulp-sass');
var clean_css = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

//sass任务
gulp.task('sass',function () {
    return gulp.src('src/scss/*.scss')/*获取所需要配置的任务*/
        .pipe( sass() )  /*该任务调用的模块*/
        .pipe( gulp.dest('src/css') ); /*将在src/css文件夹中产生test.css*/
});

//监听文件
gulp.task('watch',function () {
    return gulp.watch('src/scss/test.scss', ['sass']);
    /*监听src/css/test/scss文件，修改自动执行sass任务*/
});

//css压缩任务
gulp.task('clean_css',function () {
   return gulp.src('src/css/*.css')
       .pipe( clean_css() )
       .pipe( gulp.dest('src/cssmin') );
});

//js压缩任务
gulp.task('uglify', function () {
   return gulp.src('gulpfile.js')
       .pipe( uglify() )
       .pipe( gulp.dest('src/jsmin') );
});

//图片压缩
gulp.task('imagemin',function () {
    return gulp.src('src/images/*')
        .pipe( imagemin() )
        .pipe( gulp.dest('src/imagemin') );
});


//默认任务
gulp.task('default',['sass','watch']);

