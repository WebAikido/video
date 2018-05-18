'use strict';

module.exports = function() {
$.gulp.task('sprite:png', function () {
  var spriteData = $.gulp.src('./source/sprite/*.png').pipe($.gp.spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss'
  }));
return    spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img')); // путь, куда сохраняем картинку
//return    spriteData.css.pipe($.gulp.dest('./source/style/common')); // путь, куда сохраняем стили

})
};