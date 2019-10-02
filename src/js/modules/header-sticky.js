// Header Sticky

const stickyHeader = () => {
  const sticky = () => {
    $(window).scroll( function (){ 
      let winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-header");
      }
      else {
        $("body").removeClass("sticky-header");
      }
    });
  };
  return {
    sticky,
  };
};

export default stickyHeader();
