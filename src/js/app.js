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
import jqueryI18next from 'jquery-i18next';

(($) => {
  // When DOM is ready
  let language = navigator.language.substr(0, 2);
  i18next
    .use(Backend).init({
    fallbackLng: 'ru',
    lng: language,
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    useCookie: false,
    useLocalStorage: false
  }, function () {}).then(function (err, t) {
    console.log('language loaded');
    $(() => {
      jqueryI18next.init(i18next, $);
      $('body').localize();
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
