const addClickToNav = (element) => {
  $(window.opera ? 'html' : 'html, body').animate({scrollTop: $(element).offset().top - 50}, 1000);
}

$('.nav-link-top').on('click', () => $(window.opera ? 'html' : 'html, body').animate({scrollTop: 0}, 1000));
$('.link-start').on('click', () => addClickToNav('.about'));
$('.nav-link-skills').on('click', () => addClickToNav('.skills'));
$('.nav-link-portfolio').on('click', () => addClickToNav('.portfolio'));
$('.nav-link-contact').on('click', () => addClickToNav('.contact'));

$(window).scroll(function() {
    if ($(this).scrollTop() > $('.nav').offset().top + $('.nav').height() + 50 && $('.nav-fixed').css('display') == 'none') {
      $('.nav-fixed')
        .css('display', 'flex')
        .hide()
        .slideDown();
    }
    else if ($(this).scrollTop() < $('.nav').offset().top + $('.nav').height() + 50) {
        console.log("Should hide the nav2222");
        $('.nav-fixed').slideUp();
    }
});
