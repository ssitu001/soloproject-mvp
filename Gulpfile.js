const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('build', () => {
 return browserify('Client/main.js')
   .transform(babelify, { presets: ['es2015', 'react'] })
   .bundle()
   .pipe(source('bundle.js'))
   .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
 gulp.watch('Client/**/*.js', ['build']);
 gulp.watch('Client/**/*.jsx', ['build']);
});

gulp.task('default', ['watch', 'build']);