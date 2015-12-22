var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    babel = require("gulp-babel"),
    livereload = require('gulp-livereload');

gulp.task('babel', () => {
    return gulp.src('spec/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

// gulp.task('scripts',function(){
//     return gulp.src('spec/*.js')
//         .pipe(jshint('.jshintrc'));
//         
// });
    
gulp.task('watch', function() {
  
  //any time we make a change to our spec files, run babel and dump es5 files into the dist folder
  gulp.watch('spec/*.js', ['babel']);
  
  livereload.listen();
  
  gulp.watch(['dist/**']).on('change', livereload.changed);

});
 
gulp.task('default', [], function() {
    gulp.start('watch');
});

