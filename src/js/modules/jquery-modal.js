// jqueryModal

const jqueryModal = () => {
  const modal = () => {

    $('a.open-modal').click(function (event) {
      $(this).modal({
        fadeDuration: 550,
      });
      return false;
    });

    $('#slider_book_rooms_modal').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      fade: true,
      centerMode: true,
      cssEase: 'linear',
      useTransform: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: '<svg class="arr-r-b"><use xlink:href="#arr-r-b" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
      prevArrow: '<svg class="arr-l-b"><use xlink:href="#arr-l-b" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>',
    });

    $('a[href="#modal-book-room"]').click(function (event) {
      const $this = this;
      if (this.getAttribute("name") !== 'initial-modal') {
        setTimeout(function () {
          $('#slider_book_rooms_modal').slick('slickGoTo', parseInt($this.getAttribute('index')));
        }, 700);
      }
    });
  };

  return {
    modal,
  };
};

export default jqueryModal();
