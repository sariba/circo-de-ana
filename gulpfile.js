var gulp = require('gulp');
var sass = require('gulp-sass');


// Compilar SASS
gulp.task('compilar-sass', function() {
	return gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./estilos/'));
});


// Compilar y ejecutar tareas cuando se modifican los ficheros

gulp.task('mirar-compilar', ['compilar-sass'], function() {
	gulp.watch('./src/scss/**/*.scss', ['compilar-sass']);
});



// Automatizamos tareas

gulp.task('desarrollo', ['compilar-sass', 'mirar-compilar']);