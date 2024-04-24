 const {src, dest, watch, series } = require('gulp');
 const sass = require('gulp-sass')(require('sass'))
 

 //Funkcija koja ce compile Sass => Css i pipe ga u neki file
 function buildStyles(){
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
 }

 //Watcher koji gleda kod i kada dodje do promjene opet se poziva buildStyles
 function watchTask(){ 
    watch(['sass/**/*.scss'], buildStyles)
 }

 exports.default =  series(buildStyles, watchTask);