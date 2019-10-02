// Tabs

const Tabs = () => {
  const fadeTabs = () => {
    const multiTabs = {
      1: {
        mtabs: '#tabs_1'
      },
      2: {
        mtabs: '#tabs_2'
      }
    };
    $.each(multiTabs, function (tabIndex, tabValue) {
      let tabItem = $(tabValue.mtabs).find('.tab-menu a');
      $(tabItem).click(function () {
        let currentTabId = $(this).attr('href');
        let currentTabsBlockId = currentTabId.replace(new RegExp('(\\#tabs_\\d+)_\\d+'), '$1');
        let currentTabContent = $(currentTabsBlockId + ' div .item-content.active'); //remove active class from active tab

        $(currentTabsBlockId + ' a.active').removeClass('active'); //add active class to current tab

        $(this).addClass('active'); //remove active class from active tabContent

        currentTabContent.removeClass('active');
        currentTabContent.fadeOut(''); //add active class to current tabContent

        $(currentTabId).addClass('active');
        $(currentTabId).fadeIn();
        return false;
      });
      let tabItemAccardion = $(tabValue.mtabs).find('#tab-content a');
      $(tabItemAccardion).click(function () {
        let currentTabId = $(this).attr('href');
        let currentTabsBlockId = currentTabId.replace(new RegExp('(\\#tabs_\\d+)_\\d+'), '$1');
        let currentTabContent = $(currentTabsBlockId + ' div .item-content.active'); // this.classList.toggle("active");

        let panel = this.nextElementSibling;
        console.log(active);
        $(panel).addClass('active');
        let active = $(this).hasClass('active');

        if (active) {
          $(this).removeClass('active');
          $(panel).removeClass('active');
          console.log(panel);
        } else {
          $(this).addClass('active');
          $(panel).addClass('active');
        } // //add active class to current tabContent
        // $(currentTabId).addClass('active');
        // $(currentTabId).fadeIn();


        return false;
      });
    });
  };

  return {
    fadeTabs: fadeTabs
  };
};

export default Tabs();
