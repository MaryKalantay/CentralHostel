// Tabs
const Forms = () => {
  const styleNumber = (i18next) => {
    $('#coverimageforplayer').click(function () {
      //gtag_report_conversion(parseFloat(totalSum) / 25.0);
      //gtag_report_video_play('event', 'PlayShort', {'event_category': 'Video', 'send_to': 'UA-23710006-2'});
      gtag('event', 'PlayShort', {'event_category': 'Video', 'send_to': 'UA-23710006-2'});
      $('#coverimageforplayer').replaceWith($('#youtubeplayer').show());
      $('#youtubeplayer').attr('src', 'https://www.youtube.com/embed/oj6sFMrrQm0?autoplay=1');
    });
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('#bookingForm').submit(function (e) {
      e.preventDefault();
      $('.close-modal').trigger('click');
      //create message
      const guestName = $('#guestName').val();
      const guestsNumber = $('#guestsNumber').val();
      const checkInDate = $('#modalCheckIn').val();
      const checkOutDate = $('#modalCheckOut').val();
      const earlyCheck = $('#earlyCheck').is(":checked");
      const lateCheck = $('#lateCheck').is(":checked");
      const breakfast = $('#breakfast').is(":checked");
      const totalSum = $('#totalSum').text();
      const guestEmail = $('#guestEmail').val();
      const phoneNumber = $('#phoneNumber').val();
      const bookingComments = $('#bookingComments').val();

      const currentSlide = $('#slider_book_rooms_modal').slick('slickCurrentSlide');
      const selector = 'div[id="slider_book_rooms_modal"]>div>div>div:nth-child(' + (currentSlide + 1).toString() + ') h3';
      const numberColor = $(selector).text();

      var referrer = document.referrer;
      var fullPath = document.referrer + document.location.pathname + document.location.search;

      if (fullPath.match("/gclid/i"))
      {
        referrer = "AdWords";
      }

      let utmQuery = decodeURIComponent(window.location.search.substring(1)),
        utmVariables = utmQuery.split('&'),
        ParameterName,
        i;      

      const getUTMValue = (inputParameter) => {
        for (i = 0; i < utmVariables.length; i++) {
          ParameterName = utmVariables[i].split('=');
          if (ParameterName[0] === inputParameter) {
            return ParameterName[1] === null ? null : ParameterName[1];
          }
        }
      }

      const valueExists = (value) => {
        return (value != null && value != '' && value != undefined)
      }

      const utmParams = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'source_campaign',
        'utm_term'
      ];

      var search = '';

      utmParams.forEach(param => {
        var pValue = getUTMValue(param);

        if (valueExists(pValue)) 
        {
          search = search + "; " + param + ": " + pValue;
        };
      });

      var message =
        "Имя заказчика: " + guestName + ',%0A' +
        "Кол-во гостей: " + guestsNumber + ',%0A' +
        "Цвет: " + numberColor + ',%0A' +
        "Дата заезда: " + checkInDate + ',%0A' +
        "Дата выезда: " + checkOutDate + ',%0A' +
        "Ранний заезд: " + earlyCheck + ',%0A' +
        "Поздний выезд: " + lateCheck + ',%0A' +
        "Завтрак: " + breakfast + ',%0A' +
        "Общая сумма: " + totalSum + ',%0A' +
        "E-mail: " + guestEmail + ',%0A' +
        "Телефон: " + phoneNumber + ',%0A' +
        "Комментарии: " + bookingComments + ',%0A' +
        "Источник: " + referrer;

      if (search != '')
      {
        message = message + ',%0A' + "Фраза: " + search;
      }

      gtag_report_conversion(parseFloat(totalSum) / 25.0);
      gtag('event', 'CreateBooking', {'event_category': 'Booking', 'event_label': guestName, 'value': totalSum, 'send_to': 'UA-23710006-2'});
      $.get("https://api.telegram.org/bot692519606:AAEVJr9u5ca5Gnmokr6DKc-uuthMHZMrjO8" +
         "/sendMessage?chat_id=-399280631&text=" + message, function (data) {
      Swal.fire({
        title: i18next.t('confirmBookingText'),
        showConfirmButton: false,
        icon: 'success',
        timer: 3000
      });
      });

    });
  };

  return {
    styleNumber,
  };
};

export default Forms();
