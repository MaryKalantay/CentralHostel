// Tabs

const Tabs = () => {
  const fadeTabs = () => {
    const multiTabs = {
      1: { mtabs : '#tabs_1' },
      2: { mtabs : '#tabs_2' },
    };
    $.each(multiTabs, function() {
      let tabitem = $(this.mtabs).find('.tab-menu a');
      let tabcontent = $(this.mtabs).find('.item-content');
      console.log(this);
      console.log(tabitem);
      $(tabitem).click( function() {
        $('.tab-menu a').removeClass('active');
        $(this).addClass('active');
        $(tabcontent).removeClass('active');
        $(tabcontent).fadeOut('');
        let activeTab = $(this).attr('href');
        console.log(activeTab[1]);
        $('.item-content[id=' + activeTab[1] + ']').addClass('active');
        // console.log($(this).find('.item-content[id=' + activeTab[1] + ']'));
        $(activeTab).fadeIn();
        return false;
      });
    });
  };
  return {
    fadeTabs,
  };
};

export default Tabs();
