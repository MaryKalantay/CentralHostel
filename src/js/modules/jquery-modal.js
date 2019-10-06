// jqueryModal

const jqueryModal = () => {
  const modal = () => {
    $('a.open-modal').click(function (event) {
      $(this).modal({
        fadeDuration: 550,
      });
      return false;
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
