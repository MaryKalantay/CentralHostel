// NavBar
const navBar = () => {
  const mobileMenu = () => {
    $('#toggle-btn').click(() => {
      $("body").toggleClass('header-open');
      // $(".dropdown").removeClass('drop');
    });

    $('.drop > .nav-link').click((e) => {
      e.preventDefault(); 
      // $(".dropdown").toggleClass('drop');
    });
  };

  const anchorScroll = () => {
    $(".nav-link").bind('click', function(e) {
      e.preventDefault(); 

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });
      return false;
  });
}
  return {
    mobileMenu,
    anchorScroll
  };
};

export default navBar();
