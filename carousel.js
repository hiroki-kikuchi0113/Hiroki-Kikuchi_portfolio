$(document).ready(function (argument) {
    $('.carousel').slick({
        autoplay: true, //自動再生
        autoplaySpeed: 5000, //自動再生の速さ、単位はミリ秒
        arrows: false, //左右のナビゲーションを有効にする
        dots: true, //スライド下にビットを表示する
        fade: true, //スライドの切り替えをフェードする
    });
});