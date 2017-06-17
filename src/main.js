$('.nav-link-top').on('click', () => $(window.opera ? 'html' : 'html, body').animate({scrollTop: 0}, 'slow'));
$('.link-start').on('click', () => $(window.opera ? 'html' : 'html, body').animate({scrollTop: $('.about').offset().top - 50},'slow'));
$('.nav-link-skills').on('click', () => $(window.opera ? 'html' : 'html, body').animate({scrollTop: $('.skills').offset().top - 50},'slow'));
$('.nav-link-portfolio').on('click', () => $(window.opera ? 'html' : 'html, body').animate({scrollTop: $('.portfolio').offset().top - 50},'slow'));
$('.nav-link-contact').on('click', () => $(window.opera ? 'html' : 'html, body').animate({scrollTop: $('.contact').offset().top - 50},'slow'));

$(window).scroll(function () {
    if ($(this).scrollTop() > $('.nav').offset().top + $('.nav').height() + 50 && $('.nav-fixed').css('display') == 'none') {
        $('.nav-fixed').css('display', 'flex')
          .hide()
          .slideDown();
    }
    if ($(this).scrollTop() < $('.nav').offset().top + $('.nav').height() + 50) {
        $('.nav-fixed').slideUp();
    }
});
