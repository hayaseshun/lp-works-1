const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,         //最後のスライドまでいったときに最初に戻る

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',   //ページ数を表す丸い点   
    clickable: true             // clickable: true これによって丸い点を押すと次のページに飛ぶ
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',     //サイドのアローアイコン
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
});

new WOW().init();

jQuery('.drawer-icon').on('click',function(e) {  //セットで覚える
  e.preventDefault();      //aタグ本来の動きを無効

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.q-a-answer').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
});

jQuery('a[href^="#"]').on('click',function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0
  if ( id != '#') {
    position = jQuery(id).offset().top - header;
  }
  
  jQuery('html,body').animate({
    scrollTop: position
  },
  1000);
});

jQuery(window).on('scroll',function() {     //スクロールを検知する
  if ( 100 < jQuery(this).scrollTop()) {    //高さが１００に達したら
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }
});

jQuery('.header_nav li a').on('click', function(){
  jQuery('.header_nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});

jQuery('.qa-box-q').on('click',function() {
  jQuery(this).next().slideToggle();    //  クリックされた要素の次の要素
  jQuery(this).children().toggleClass('is-open');
});

jQuery('.js-close-button').on('click',function(e) {
  e.preventDefault();    //aタグ本来の動きを無効
  var target = jQuery(this).data('target');  //data-targetの値を取得する
  jQuery(target).hide();
});

jQuery('.js-open-button').on('click',function(e) {
  e.preventDefault();    //aタグ本来の動きを無効
  var target = jQuery(this).data('target');  //data-targetの値を取得する
  jQuery(target).show();
});

jQuery('.qa-q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-icon').toggleClass('is-open');
});