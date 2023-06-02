const {src, dest, watch}=require("gulp");
const plumber=require("gulp-plumber");
const sass = require("gulp-sass")(require("sass"));

function css(done){
    src("frontend/src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("frontend/build/css"))
    done()
}
function tareas(done){
    watch("frontend/src/scss/**/*.scss", css);
    done();
}
exports.css=css;
exports.tareas=tareas;