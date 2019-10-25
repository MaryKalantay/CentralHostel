// jqueryModal

const jqueryModal = () => {
  const modal = () => {

    const lateCheckFee = 115;
    const earlyCheckFee = 115;
    const breakfastFee = 50;

    $('a.open-modal').click(function (event) {
      $(this).modal({
        fadeDuration: 550,
      });
      return false;
    });

    $('#slider_book_rooms_modal').slick({
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
      if (this.getAttribute("class").indexOf("initial-modal") === -1) {
        $('#slider_book_rooms_modal').slick('slickGoTo', parseInt(this.getAttribute('index')));
      }
    });

    const totalSumSpan = $('#totalSum');
    $('#earlyCheck').click(function () {
      let totalSum = parseInt(totalSumSpan.text());
      if (this.checked) {
        totalSum = totalSum + earlyCheckFee;
      } else {
        totalSum = totalSum - earlyCheckFee;
      }
      totalSumSpan.empty().append(totalSum);
    });

    $('#breakfast').click(function () {
      let totalSum = parseInt(totalSumSpan.text());
      if (this.checked) {
        totalSum = totalSum + breakfastFee;
      } else {
        totalSum = totalSum - breakfastFee;
      }
      totalSumSpan.empty().append(totalSum);
    });

    $('#lateCheck').click(function () {
      let totalSum = parseInt(totalSumSpan.text());
      if (this.checked) {
        totalSum = totalSum + lateCheckFee;
      } else {
        totalSum = totalSum - lateCheckFee;
      }
      totalSumSpan.empty().append(totalSum);
    });
  };

  return {
    modal,
  };
};

export default jqueryModal();
