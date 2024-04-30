 const {src, dest, watch, series } = require('gulp');
 const sass = require('gulp-sass')(require('sass'))
//  const purgecss = require('gulp-purgecss');

 //Funkcija koja ce compile Sass => Css i pipe ga u neki file
 function buildStyles(){
    return src('sass/**/*.scss')
        .pipe(sass())
        //u rutu trazi sve html i da vidi koje klase i rule koristimo i izbaci sve rules koje ne koristimo
        //Ako izbacis index.html ili ga prebaci u novi folder da nije rutu i pokrenes gulp.js onda ce finalni css biti mnogo
        //samo ono sto se koristi u html-u ce biti ispisano
      //   .pipe(purgecss({ content: ['*.html']})) 
        .pipe(dest('css'))
 }

 //Watcher koji gleda kod i kada dodje do promjene opet se poziva buildStyles
 function watchTask(){ 
    watch(['sass/**/*.scss', '*.html'], buildStyles)
 }

 exports.default =  series(buildStyles, watchTask);