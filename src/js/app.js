// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import navBar from './modules/navbar';
import rangeDatepicker from './modules/lightpick';
import stickyHeader from './modules/header-sticky';
import Tabs from './modules/tabs';
import jqueryModal from './modules/jquery-modal';
import slickSlider from './modules/slick-slider';
import selectPicker from './modules/select-picker';
import Forms from './modules/forms';
import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';

(($) => {
  // When DOM is ready
  i18next
    .use(Backend)
    .init({
      backend: {
        // for all available options read the backend's repository readme file
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }
    }).then(function () {
    $(() => {
      navBar.mobileMenu();
      navBar.anchorScroll();
      jqueryModal.modal();
      slickSlider.slider();
      slickSlider.slider_zones();
      Tabs.fadeTabs();
      rangeDatepicker.picker();
      stickyHeader.sticky();
      selectPicker.select();
      Forms.styleNumber();
    });
  });
})(jQuery);
