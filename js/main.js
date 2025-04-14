$(function () {
  /*=================================================
  loading
  ===================================================*/
  $(window).on("load" , function(){
    $(".loading").delay(500).queue(function(){
        $(this).addClass("loaded");
    });
  });

  /*=================================================
  drawer
  ===================================================*/
  $(".toggle_btn , #mask , #nav a , .nav-title").on("click", function () {
    ($("#header").toggleClass("open"));
  });
  
  /*=================================================
  text-animation
  ===================================================*/
  $(window).on("load" , function(){
    $(".text-animation-trigger").delay(1300).queue(function(){
        $(this).addClass("text-animation");
        $(this).children(".text-animation-trigger-inner").addClass("text-animation-inner");
        $(".fv-title").css("opacity" , "1");
    });
  });

  /*=================================================
  smooth　scroll
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = ((target.offset().top) -100);
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    const speed_scroll = 1000
    // 1000はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop:position}, speed_scroll, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });


  /*=================================================
  slider
  ===================================================*/
  $(".slick-area").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  /*=================================================
  slide
  ===================================================*/
  $(window).scroll(function () {
    $(".explanation-slide-left").each(function () {
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 100) {
        $(this).addClass("slide-left");
      }
      else{
        $(this).removeClass("slide-left");
      }
    });
  });

  $(window).scroll(function () {
    $(".explanation-slide-right").each(function () {
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 100) {
        $(this).addClass("slide-right");
      }
      else{
        $(this).removeClass("slide-right");
      }
    });
  });

  $(window).scroll(function () {
    $(".explanation-slide-bottom").each(function () {
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 100) {
        $(this).addClass("slide-bottom");
      }
      else{
        $(this).removeClass("slide-bottom");
      }
    });
  });

  /*=================================================
  ballon
  ===================================================*/
  $(window).scroll(function () {
    $(".image-balloon").each(function () {
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 100) {
        $(this).addClass("balloon");
      }
      else{
        $(this).removeClass("balloon");
      }
    });
  });

  /*=================================================
  fade
  ===================================================*/
  $(function(){
    $(".fade-img img:not(:first-child)").hide();
    setInterval(function() {
      $(".fade-img img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".fade-img");
    },2500);
  });

  // (function(){
  //   // 設定
  //   var interval =3000; // 切り替わりの間隔（ミリ秒）
  //   var fade_speed = 1000;// フェード処理の早さ（ミリ秒）
  //   $(".fade-img-box img").hide();
  //   $(".fade-img-box img:first").addClass("active").show();
    
  //   var changeImage = function(){
  //       var $active = $(".fade-img-box img.active");
  //       var $next = $active.next("img").length?$active.next("img"):$(".fade-img-box img:first");
       
  //       $active.fadeOut(fade_speed).removeClass("active");
  //       $next.fadeIn(fade_speed).addClass("active");
  //   }
  
  // setInterval(changeImage,interval);
  // }());

  /*=================================================
  top
  ===================================================*/
  $(window).scroll(function () {
    $(".go-top").each(function () {
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > 500) {
        $(this).fadeIn();
      }
      else{
        $(this).fadeOut();
      }
    });
  });
});
