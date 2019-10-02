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
      e.target
      e.relatedTarget
 
      $(this.sslider).slick({
        
        dots: true,
        arrows: true,
        nextArrow: '<svg class="arr-r"><use xlink:href="#arr-r" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
        prevArrow: '<svg class="arr-l"><use xlink:href="#arr-l" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
        setPosition : 0
      });
    });
  };
  return {
    slider,
  };
};

export default slickSlider();
