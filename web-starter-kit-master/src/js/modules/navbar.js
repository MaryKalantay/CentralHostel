// NavBar
const navBar = () => {
  const mobileMenu = () => {
    $('#toggle-btn').click(() => {
      $('#header-nav').toggleClass('open');
      $('#toggle-btn').toggleClass('open');
    });
  };
  return {
    mobileMenu,
  };
};

export default navBar();
