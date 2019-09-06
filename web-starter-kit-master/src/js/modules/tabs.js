// Tabs

const Tabs = () => {
  const fadeTabs = () => {
    $('#tab-menu a').bind( 'click', function(e) {
      e.preventDefault();
      const thref = $(this).attr('href').replace(/#/, '');
      $('#tab-menu a').removeClass('active');
      $(this).addClass('active');
      $('#tab-content div.item-content[id!=' + thref + ']').fadeOut('100', function() {
        $('#' + thref).fadeIn('100');
      });
    });
  };
  return {
    fadeTabs,
  };
};

export default Tabs();
