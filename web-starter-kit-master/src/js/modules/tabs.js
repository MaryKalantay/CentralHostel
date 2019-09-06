// Tabs

const Tabs = () => {
  const fadeTabs = () => {
    $('#tab-menu a').bind('click',function(e) {
      e.preventDefault();
      var thref = $(this).attr("href").replace(/#/, '');
      $('#tab-menu a').removeClass('active');
      $(this).addClass('active');
      $('#tab-content div.item-content[id!='+thref+']').fadeOut('slow', function(){
        $('#'+thref).fadeIn('slow');
        $('#'+thref).addClass('active');
      });
    });
  };
  return {
    fadeTabs,
  };
};

export default Tabs();
