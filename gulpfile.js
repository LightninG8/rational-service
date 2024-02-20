var gulp         = require('gulp');
var includer     = require("gulp-x-includer");

gulp.task("build", function(){
    return gulp.src(["./src/*.html", "./src/*.css", "./src/*.js", "./src/*/*.html", "./src/*/*.css", "./src/*/*.js", "./src/*/*/*.html", "./src/*/*/*.css", "./src/*/*/*.js"])
    .pipe(includer())
    .pipe(gulp.dest("./build"));
});
