$(function() {
    $('.blogs__slider').slick({
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
                infinite: true
              }
            }
          ]
    });
})