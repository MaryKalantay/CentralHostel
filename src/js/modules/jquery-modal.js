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
      $('#slider_book_rooms_modal').slick('slickGoTo', parseInt(this.getAttribute('index')));
    });

    let totalSum = parseInt($('#totalSum').text());

    $('#earlyCheck').click(function () {
      if (this.checked) {
        totalSum = totalSum + earlyCheckFee;
      } else {
        totalSum = totalSum - earlyCheckFee;
      }
      $('#totalSum').empty().append(totalSum);
    });

    $('#breackfast').click(function () {
      if (this.checked) {
        totalSum = totalSum + breakfastFee;
      } else {
        totalSum = totalSum - breakfastFee;
      }
      $('#totalSum').empty().append(totalSum);
    });

    $('#lateCheck').click(function () {
      if (this.checked) {
        totalSum = totalSum + lateCheckFee;
      } else {
        totalSum = totalSum - lateCheckFee;
      }
      $('#totalSum').empty().append(totalSum);
    });

    $('#video-modal').on($.modal.OPEN, function (event, modal) {
      var video = this.querySelector('iframe[src*="www.youtube.com"], iframe[src*="player.vimeo.com"], video');
      console.log(video);
      if (!video) return; // If an HTML5 video, play it
      if (video.tagName.toLowerCase() === 'video') {
        video.play();
        return;
      }
      video.src = video.src + (video.src.indexOf('?') < 0 ? '?' : '&') + 'autoplay=1';
    });
    $('#video-modal').on($.modal.BEFORE_CLOSE, function (event, modal) {
      var video = this.querySelector('iframe[src*="www.youtube.com"], iframe[src*="player.vimeo.com"], video');
      if (!video) return;
      if (video.tagName.toLowerCase() === 'video') {
        video.pause();
        return;
      } // Remove autoplay from video src
      video.src = video.src.replace('&autoplay=1', '').replace('?autoplay=1', '');
    });
  };

  return {
    modal,
  };
};

export default jqueryModal();
