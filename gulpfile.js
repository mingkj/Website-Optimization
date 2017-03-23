var gulp=require('gulp');
var del=require('del');

var changed=require('gulp-changed');
var uglify=require('gulp-uglify');
var imagemin=require('gulp-imagemin');
var htmlmin=require('gulp-htmlmin');
var cssmin=require('gulp-cssmin');

var DEST='dist/';

gulp.task('clean',function(){
    return del('dist/*');
});

gulp.task('uglify',function(){
    return gulp.src('src/**/*.js')
    .pipe(changed(DEST))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('imagemin',function(){
    return gulp.src('src/**/*.{png,jpg}')
    .pipe(changed(DEST))
    .pipe(imagemin())
    .pipe(gulp.dest('dist'));
});
gulp.task('htmlmin',function(){
    var options={
        collapseWhitespace:true,
        removeComments:true,
        minifyJS:true,
        minifyCSS:true
    };

    return gulp.src('src/**/*.html')
    .pipe(changed(DEST))
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist'));
});
gulp.task('cssmin',function(){
    return gulp.src('src/**/*.css')
    .pipe(changed(DEST))
    .pipe(cssmin())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch',function(){
    gulp.watch('src/index.html',['htmlmin']);
    gulp.watch('src/views/js/main.js',['uglify']);
});

gulp.task('default',function(){
    gulp.start('htmlmin','cssmin','imagemin','uglify');
});


