$(function(){
  // スムーズスクロール トップに戻る
  $('.btn-wrapper').on('click',function(){
    $('body,html').animate({scrollTop: 0},500);
    return false;
  });

  // 各メニューボタンで各項目までスクロール
  $('#about').on('click',function(){
    $('.container').slideDown(800);
    $("html,body").animate({scrollTop:$('.about').offset().top}, 2000);
    return false;
  });

  $('#careers').on('click',function(){
    $('.container').slideDown(800);
    $("html,body").animate({scrollTop:$('.careers').offset().top}, 2000);
    return false;
  });

  $('#hobbies').on('click',function(){
    $('.container').slideDown(800);
    $("html,body").animate({scrollTop:$('.hobbies').offset().top}, 2000);
    return false;
  });

  $('#contact').on('click',function(){
    $('.container').slideDown(800);
    $("html,body").animate({scrollTop:$('.contact').offset().top}, 2000);
    return false;
  });

  $('#about2').on('click',function(){
    $('body,html').animate({scrollTop:$('.about').offset().top},2000);
    return false;
  });

  $('#careers2').on('click',function(){
    $('body,html').animate({scrollTop:$('.careers').offset().top},2000);
    return false;
  });

  $('#hobbies2').on('click',function(){
    $('body,html').animate({scrollTop:$('.hobbies').offset().top},2000);
    return false;
  });

  $('#contact2').on('click',function(){
    $('body,html').animate({scrollTop:$('.contact').offset().top},2000);
    return false;
  });
  // 各メニューボタンで各項目までスクロール


// .readmoreを押すと.readmoreにon-clickが適用されてREAD MOREボタンが透明なる＆.hideで隠していた要素を表示する
  $(".readmore").on("click", function() {
    $(this).toggleClass("on-click");
    $(".hide").slideToggle(1000);
    $("html,body").animate({scrollTop:$('.detail-list2-subtitle').offset().top}, 2000);
  });

  $('head').append(
    '<style>.fadein{display:none;}'
    );
    $(window).on("load", function() {
    $('.fadein').delay(1000).fadeIn("slow");
    });
});