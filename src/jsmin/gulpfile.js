var gulp=require("gulp"),sass=require("gulp-sass"),clean_css=require("gulp-clean-css"),uglify=require("gulp-uglify");gulp.task("sass",function(){return gulp.src("src/scss/*.scss").pipe(sass()).pipe(gulp.dest("src/css"))}),gulp.task("watch",function(){return gulp.watch("src/scss/test.scss",["sass"])}),gulp.task("clean_css",function(){return gulp.src("src/css/*.css").pipe(clean_css()).pipe(gulp.dest("src/cssmin"))}),gulp.task("uglify",function(){return gulp.src("gulpfile.js").pipe(uglify()).pipe(gulp.dest("src/jsmin"))}),gulp.task("default",["sass","watch"]);