// slick Slider
const slickSlider = () => {
  const slider = () => {
    let sliders = {
      1: {item_slider : '#slider_1',},
      2: {item_slider : '#slider_2'},
      3: {item_slider : '#slider_3'},
      4: {item_slider : '#slider_4'},
      5: {item_slider : '#slider_5'},
      6: {item_slider : '#slider_6'},
    };

    $.each(sliders, function(e) {
      $(this.item_slider).slick({
        lazyLoad: 'ondemand',
        infinite:false,
        dots: true,
        arrows: true,
        nextArrow: '<svg width="12px" height="25" class="arr-r"><use xlink:href="#arr-r" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
        prevArrow: '<svg width="12px" height="25" class="arr-l"><use xlink:href="#arr-l" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
        setPosition : 0,
      });
    });
  };

  const slider_zones = () => {
    let sliders_zones = {
      1: {item_slider_zone : '#slider_1_1'},
      2: {item_slider_zone : '#slider_1_2'},
    };

    $.each(sliders_zones, function(e) {
      $(this.item_slider_zone).slick({
        lazyLoad: 'ondemand',
        infinite:false,
        dots: false,
        arrows: true,
        nextArrow: '<svg class="arr-r-b"><use xlink:href="#arr-r-b" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
        prevArrow: '<svg class="arr-l-b"><use xlink:href="#arr-l-b" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
        setPosition : 0,
        responsive: [{
          breakpoint: 992,
          settings: {
          nextArrow: '<svg width="12px" height="25" class="arr-r-b"><use xlink:href="#arr-r" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
        prevArrow: '<svg width="12px" height="25" class="arr-l-b"><use xlink:href="#arr-l" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
          }
        }]
      });
    });
  };

  return {
    slider,
    slider_zones,
  };
};

export default slickSlider();
