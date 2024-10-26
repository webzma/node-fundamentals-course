const gulp = require("gulp");
const server = require("gulp-server-livereload");

gulp.task("build", (cb) => {
  console.log("Building the site");
  setTimeout(() => {
    cb();
  }, 2000);
});

gulp.task("serve", (cb) => {
  gulp.src("www").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});
