$(".about, .education, .experience, .skills, .footer").click(function() {
    var sectionTo = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(sectionTo).offset().top
    }, 1500);
});

$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})

AOS.init();

