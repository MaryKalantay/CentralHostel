// Tabs

const Tabs = () => {
  const fadeTabs = () => {
    $('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
   });
  };
  return {
    fadeTabs,
  };
};

export default Tabs();
