/// <reference types="../@types/jquery"/>

$('#close').on('click', function () {
    $('.navbar-nav').animate({ width: 'hide' }, 1000);
    $('.open').animate({ 'margin-left': '30px' }, 1000);
    $('.main-title').animate({ 'margin-left': '0px' }, 1000);
    $('#duration').animate({ 'margin-left': '0px' }, 1000);

});

$('.open').on('click', function () {
    $('.navbar-nav').animate({ width: 'show' }, 1000);
    $('.main-title').animate({ 'margin-left': '250px' }, 1000);
    $('.open').animate({ 'margin-left': '280px' }, 1000);
    $('#duration').animate({ 'margin-left': '280px' }, 1000);
});

$('a.nav-link').on('mouseenter', function () {
    $(this).css('color', 'rgba(214, 46, 51, 0.4)');
});

$('a.nav-link').on('mouseleave', function () {
    $(this).css('color', '#FFF');
});

$('h2').on('click', function (e) {
    $(e.target.nextElementSibling).slideDown(1000); 
    $('.updown div .inner h2').not(e.target).next().slideUp(700);
    // $(e.target.nextElementSibling).slideToggle(1000);
});

let partyTime = new Date('6 jan 2025 10:30:00');

function upDateTime() {
    let today = new Date();
    let differnceBetweenTime = (partyTime.getTime() - today.getTime()) / 1000;
    let differnceInDays = Math.floor(differnceBetweenTime / (24 * 60 * 60));
    let differnceInHour = Math.floor((differnceBetweenTime % (24 * 60 * 60)) / (60 * 60));
    let differnceInMin = Math.floor((differnceBetweenTime % (60 * 60)) / (60));
    let differnceInSecs = Math.floor((differnceBetweenTime % (60)));
    $('.day').html(differnceInDays + ' Days');
    $('.hour').html(differnceInHour + ' Hour');
    $('.min').html(differnceInMin + ' Min');
    $('.sec').html(differnceInSecs + ' Sec');
}

setInterval(() => upDateTime(), 1000);

$('.overflow').css('display', 'none');

$('textarea').on('input', function () {
    if (100 - this.value.split("").length != 0) {
        $('.number').html(100 - this.value.split("").length);
        $('.normal').css(`cssText`, `display: block !important`);
        $('.overflow').css(`cssText`, `display: none !important`);
    } else {
        $('.overflow').css(`cssText`, `display: block !important`);
        $('.normal').css(`cssText`, `display: none !important`);
        $('.overflow span').html('your available character finished');
    }
});

$('a[href^="#"]').on('click', function(e) {
    $('body,html').animate({scrollTop: $(e.target.getAttribute('href')).offset().top}, 2000);
    // console.log(e.target.getAttribute('href'))
});
