// slick Slider
const slickSlider = () => {
  const slider = () => {
    const sliders = [
      {sslider : '#slider_1'},
      {sslider : '#slider_2'},
      {sslider : '#slider_3'},
      {sslider : '#slider_4'},
    ];
    $.each(sliders, function() {
      $(this.sslider).slick({
        
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
