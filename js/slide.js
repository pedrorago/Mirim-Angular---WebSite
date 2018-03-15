$(function(){


  $(".slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false

  });
  $(".pre-slide").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll:1,
    prevArrow:"<i class='material-icons arrowsPre arrowLEFT'>arrow_back</i>",
    nextArrow:"<i class='material-icons arrowsPre arrowRIGHT'>arrow_forward</i>",


  });

  $('.slide-box2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: false,
    prevArrow:"<i class='material-icons arrowsPre arrowLEFT'>arrow_back</i>",
    nextArrow:"<i class='material-icons arrowsPre arrowRIGHT'>arrow_forward</i>",
    asNavFor: '.slide-box2-thumbnail'
  });

  $('.slide-box2-thumbnail').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slide-box2',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    adaptiveHeight: false,
    variableWidth: true
  });


  var titleMain  = $("#animatedHeading");
  var titleSubs  = titleMain.find("slick-active");

  if (titleMain.length) {

    titleMain.slick({
      autoplay: false,
      arrows: false,
      dots: false,
      slidesToShow: 3,
      centerPadding: "10px",
      draggable: false,
      infinite: true,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true,
      speed: 1000,
      autoplaySpeed: 2000,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      adaptiveHeight: true,
    });

  // On init
  $(".slick-dupe").each(function(index, el) {
    $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};



$('.artesConcainer').slick({
  slidesToShow: 6,
  prevArrow:"<i class='ion-android-arrow-back arrows1 arrowBack'></i>",
  nextArrow:"<i class='ion-android-arrow-forward arrows1 arrowNext'></i>",

  responsive: [
  {
    breakpoint: 2000,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1
    }
  }
  ]
});



$('.SlideMirim').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:"<i class='ion-android-arrow-back arrows1 arrowLEFT'></i>",
  nextArrow:"<i class='ion-android-arrow-forward arrows1 arrowRIGHT'></i>",
});
});
