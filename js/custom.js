
// スクロール途中からナビゲーションを固定表示
    $(function () {
      var $win = $(window),
        $main = $('main'),
        $nav = $('nav'),
        navHeight = $nav.outerHeight(),
        navPos = $nav.offset().top,
        fixedClass = 'is-fixed';

      $win.on('load scroll', function () {
        var value = $(this).scrollTop();
        if (value > navPos) {
          $nav.addClass(fixedClass);
          $main.css('margin-top', navHeight);
        } else {
          $nav.removeClass(fixedClass);
          $main.css('margin-top', '0');
        }
      });
    });

// // Myにマウスホバーするとなかじーに代わる
// $(function() {
//   $('span').hover(function() {
//     $(this).text('Nj');
//   }, function() {
//     $(this).text('My');
//   });
// });

// パララックスの記述
	
