# CentralHostel
To local debug:
1. open gulpfile.js file and uncomment  (    // ,
    // gulp.parallel(
    //   cfg.task.browserSync,
    //   cfg.task.watch
    // ))
2. goto root folder and run 'gulp'
3. goto assets/js and run uglifyjs --compress --mangle --output app.min.js -- app.js   (app.min.js will be created)

To remote deploy
1. open gulpfile.js file and comment  (    // ,
    // gulp.parallel(
    //   cfg.task.browserSync,
    //   cfg.task.watch
    // ))
2. Goto root folder on server and run 'sh deploy.sh'
