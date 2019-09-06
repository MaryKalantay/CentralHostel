// slick Slider
const slickSlider = () => {
  const slider = () => {
    var sliders = {
      1: {sslider : '#slider_1',},
      2: {sslider : '#slider_2'},
      3: {sslider : '#slider_3'},
      4: {sslider : '#slider_4'},
    };
    
    $.each(sliders, function(e) {
      $(this.sslider).slick({
        dots: true,
        // arrows: true,
        // nextArrow: '<svg><use xlink:href="#arr-r" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
        // prevArrow: '<svg><use xlink:href="#arr-l" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
      });
    });

    // $('.slick-slider').slick({
    //   arrows: true,
    //   slidesToShow: 1,
    //   // nextArrow: '<svg><use xlink:href="#arr-r" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
    //   // prevArrow: '<svg><use xlink:href="#arr-l" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
    //   responsive: [{
    //     breakpoint: 1024,
    //     settings: {
    //       infinite: true,
    //     },
    //   }, {
    //     breakpoint: 600,
    //     settings: {
    //       dots: true,
    //       arrows: false,
    //     },
    //   }],
    // });
  };
  return {
    slider,
  };
};

export default slickSlider();
