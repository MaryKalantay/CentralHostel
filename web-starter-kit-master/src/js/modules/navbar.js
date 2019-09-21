// NavBar
const navBar = () => {
  const mobileMenu = () => {
    $('#toggle-btn').click(() => {
      $("body").toggleClass('header-open');
    });
  };
  return {
    mobileMenu,
  };
};

export default navBar();
