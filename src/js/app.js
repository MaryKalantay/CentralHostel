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

$(window).on('load', function() {
  let language;
  if (window.location.href.indexOf('lang') !== -1) {
    language = window.location.href.replace(new RegExp('[^/]+//[^?]+[?]lang=(\\w\\w).*'), '$1')
  } else {
    language = navigator.language.substr(0, 2);
  }

  if (language === 'ru') {
    $('#langRU').addClass('active');
  } else if (language === 'en'){
    $('#langEN').addClass('active');
  } else if (language === 'uk'){
    $('#langUA').addClass('active');
  } else if (language === 'de'){
    $('#langDE').addClass('active');
  } else if (language === 'fr'){
    $('#langFR').addClass('active');
  } else if (language === 'es'){
    $('#langES').addClass('active');
  } else if (language === 'tr'){
    $('#langTR').addClass('active');
  }   

  function sequentialLocalization() {
    $('head').localize();
    $('.header').localize();
    $('.starter-box').localize();
    $('.modal').localize();
    $('.advantages-box').localize();
    $('.rooms-box').localize();
    $('.zones-box').localize();
    $('.action-box').localize();
    $('.price-box').localize();
    $('.hostel-box').localize();
    $('.transport-box').localize();
    $('.food-shop-box').localize();
    $('.places-box').localize();
    $('.footer').localize();
  }

  i18next
    .use(Backend).init({
    fallbackLng: 'en',
    lng: language,
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    useCookie: false,
    useLocalStorage: false
  }, function () {
  })
    .then(function (err, t) {
      $(() => {
        jqueryI18next.init(i18next, $);
        $("html").attr("lang", language);
        //StartOnLoadLocalization
        sequentialLocalization();
        //EndOnLoadLocalization
        navBar.mobileMenu();
        navBar.anchorScroll();
        rangeDatepicker.picker();
        jqueryModal.modal();
        slickSlider.slider();
        slickSlider.slider_zones();
        Tabs.fadeTabs();
        stickyHeader.sticky();
        Forms.styleNumber(i18next);
        lazyload();
      });
    });

  $('#langEN').click(function () {
    $('.lang .item.active').removeClass('active');
    $(this).addClass('active');
    if (i18next.language !== 'en') {
      i18next.changeLanguage('en', function () {
      }).then(function () {
        Forms.styleNumber(i18next);
        $("html").attr("lang", 'en');
        sequentialLocalization();
      })
    }
  });

  $('#langRU').click(function () {
    $('.lang .item.active').removeClass('active');
    $(this).addClass('active');
    if (i18next.language !== 'ru') {
      i18next.changeLanguage('ru', function () {
      }).then(function () {
        Forms.styleNumber(i18next);
        $("html").attr("lang", 'ru');
        sequentialLocalization();
      })
    }
  });

  $('#langUA').click(function () {
    $('.lang .item.active').removeClass('active');
    $(this).addClass('active');
    if (i18next.language !== 'uk') {
      i18next.changeLanguage('uk', function () {
      }).then(function () {
        Forms.styleNumber(i18next);
        $("html").attr("lang", 'uk');
        sequentialLocalization();
      })
    }
  });
  $('#langDE').click(function () {
    $('.lang .item.active').removeClass('active');
    $(this).addClass('active');
    if (i18next.language !== 'de') {
      i18next.changeLanguage('de', function () {
      }).then(function () {
        Forms.styleNumber(i18next);
        $("html").attr("lang", 'de');
        sequentialLocalization();
      })
    }
  });  
  $('#langFR').click(function () {
    $('.lang .item.active').removeClass('active');
    $(this).addClass('active');
    if (i18next.language !== 'fr') {
      i18next.changeLanguage('fr', function () {
      }).then(function () {
        Forms.styleNumber(i18next);
        $("html").attr("lang", 'fr');
        sequentialLocalization();
      })
    }
  });   
  $('#langES').click(function () {
    $('.lang .item.active').removeClass('active');
    $(this).addClass('active');
    if (i18next.language !== 'es') {
      i18next.changeLanguage('es', function () {
      }).then(function () {
        Forms.styleNumber(i18next);
        $("html").attr("lang", 'es');
        sequentialLocalization();
      })
    }
  });   
  $('#langTR').click(function () {
    $('.lang .item.active').removeClass('active');
    $(this).addClass('active');
    if (i18next.language !== 'tr') {
      i18next.changeLanguage('tr', function () {
      }).then(function () {
        Forms.styleNumber(i18next);
        $("html").attr("lang", 'tr');
        sequentialLocalization();
      })
    }
  });    
});
