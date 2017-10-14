var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 4 versions'] });

// Static server

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
		// files: ["app/css/style.css", "app/js/*.js"]
		// files: "css/all.css"
	});
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("css/*.less", ['less']).on('change', browserSync.reload);
});

// compile and prefix
gulp.task('less', function () {
return gulp.src('./css/*.less')
  // .pipe(less({
	// plugins: [autoprefix]
  // }))
  .pipe(gulp.dest('./css'));
});

gulp.task('default', ['browser-sync', 'less']);
