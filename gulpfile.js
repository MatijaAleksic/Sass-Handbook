 const {src, dest, watch, series } = require('gulp');
 const sass = require('gulp-sass')(require('sass'))
 

 //Funkcija koja ce compile Sass => Css i pipe ga u neki file
 function buildStyles(){
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('css'))
 }

 function watchTask(){
    watch(['index.scss'], buildStyles)
 }

 export default series(buildStyles, watchTask);
//  export default series(buildStyles, watchTask)