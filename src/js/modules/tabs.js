// Tabs

const Tabs = () => {
  const fadeTabs = () => {
    const multiTabs = {
      1: {
        mtabs: '#tabs_1',
      },
      2: {
        mtabs: '#tabs_2',
      },
    };
    $.each(multiTabs, function (tabIndex, tabValue) {
      const tabItem = $(tabValue.mtabs).find('.tab-menu a');
      $(tabItem).click(function (e) {
        e.preventDefault(e);
        const currentTabId = $(this).attr('href');
        const currentTabsBlockId = currentTabId.replace(new RegExp('(\\#tabs_\\d+)_\\d+'), '$1');
        const activeTabContent = $(currentTabsBlockId + ' div .item-content.active');

        //remove active class from active tab
        $(currentTabsBlockId + ' a.active').removeClass('active');

        //add active class to current tab
        $(this).addClass('active');

        //remove active class from active tabContent
        activeTabContent.fadeOut(500, function () {
          activeTabContent.removeClass('active');
          //add active class to current tabContent
          $(currentTabId).addClass('active');
        });
      });

      const tabItemAccordion = $(tabValue.mtabs).find('.tab-content a');
      $(tabItemAccordion).click(function (e) {
        e.preventDefault();

        const currentTabId = $(this).attr('href');
        const currentTabsBlockId = currentTabId.replace(new RegExp('(\\#tabs_\\d+)_\\d+'), '$1');
        const activeTabContent = $(currentTabsBlockId + ' div .item-content.active');

        //remove active class from active tab
        $(currentTabsBlockId + ' a.active').removeClass('active');

        //add active class to current tabContent
        if ($(currentTabId)[0].getAttribute('class').indexOf('active') === -1) {
          $(currentTabId).addClass('active');
          $(this).addClass('active');
          $(currentTabId).slideDown();
        } else {
          $(currentTabId).slideUp();
          $(this).removeClass('active');
          $(currentTabId).removeClass('active');
        }
      });
    });
  };

  return {
    fadeTabs: fadeTabs,
  };
};

export default Tabs();
