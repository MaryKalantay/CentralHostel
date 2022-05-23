// Range Datepicker
import moment from "moment";
import 'moment/locale/ru';

function isMobile() {
  return navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i);
}

const rangeDatepicker = () => {
  const picker = () => {
    const totalSumSpan = $('#totalSum');
    let days = 1;
    let guestsNumber = 1;
    let earlyCheck = false;
    let lateCheck = false;
    let breakfast = false;

    const dateFormat = 'dd. D MMM YYYY';

    let initialCheckInDate = moment();
    let initialCheckOutDate = moment().add(1, 'day');
    if (moment().hour() > 19) {
      initialCheckInDate = moment().add(1, 'day');
      initialCheckOutDate = moment().add(2, 'day');
    }
    const checkInDateInput = $('#checkIn');
    const checkOutDateInput = $('#checkOut');

    const checkInModalDateInput = $('#modalCheckIn');
    const checkOutModalDateInput = $('#modalCheckOut');

    function momentFormatted(date) {
      return moment(date).locale('ru').format(dateFormat);
    }

    if (isMobile()) {
      console.log('mobile mode');

      $('.rooms-box .item-content').addClass('active');

      //++++++++modal pickers mobile++++++++
      let startDate = initialCheckInDate;
      const checkInModalPicker = new Lightpick({
        field: document.getElementById('modalCheckIn'),
        startDate: initialCheckInDate,
        format: dateFormat,
        singleDate: true,
        minDate: moment(),
        onSelect: function (start, end) {
          startDate = moment(start);
          checkInModalDateInput.val(momentFormatted(start));
          if (!start.isBefore(initialCheckOutDate)) {
            checkOutModalDateInput.val('');
          }
        }
      });

      checkInModalDateInput.click(function () {
        $('[class="lightpick lightpick--1-columns"]').css('zIndex', 5001);
      });

      const checkOutModalPicker = new Lightpick({
        field: document.getElementById('modalCheckOut'),
        startDate: initialCheckInDate,
        format: dateFormat,
        singleDate: true,
        minDate: moment(),
        onSelect: function (start, end) {
          checkOutModalDateInput.val(momentFormatted(start));
          days = moment(start).diff(startDate, 'days');
          totalPriceCalculate(days, guestsNumber, earlyCheck, breakfast, lateCheck);
        },
        onOpen: function () {
          checkOutModalDateInput.val('');
        }
      });

      checkOutModalDateInput.click(function () {
        $('[class="lightpick lightpick--1-columns"]').css('zIndex', 5001);
      });

      checkOutModalDateInput.val(momentFormatted(initialCheckOutDate));
    } else {
      const checkInPicker = new Lightpick({
        field: document.getElementById('checkIn'),
        startDate: initialCheckInDate,
        format: dateFormat,
        singleDate: true,
        minDate: moment(),
        onSelect: function (start, end) {
          checkInDateInput.val(momentFormatted(start));
          checkInModalDateInput.val(momentFormatted(start));
          if (!start.isBefore(initialCheckOutDate)) {
            checkOutDateInput.val('');
            checkOutModalDateInput.val('');
          }
          checkOutPicker.setStartDate(moment(start));
          checkOutPicker.setEndDate(null);
          checkOutModalPicker.setStartDate(moment(start));
          checkOutModalPicker.setEndDate(null);
          checkOutDateInput.focus();
        }
      });

      const checkOutPicker = new Lightpick({
        field: document.getElementById('checkOut'),
        startDate: initialCheckInDate,
        format: ' ',
        separator: ' ',
        singleDate: false,
        minDate: moment(),
        selectForward: true,
        numberOfMonths: 2,
        onSelect: function (start, end) {
          checkInDateInput.val(momentFormatted(start));
          checkOutDateInput.val(momentFormatted(end));
          checkInModalDateInput.val(momentFormatted(start));
          checkOutModalDateInput.val(momentFormatted(end));
          if (end) {
            days = moment(end).diff(moment(start), 'days');
            totalPriceCalculate(days, guestsNumber, earlyCheck, breakfast, lateCheck);
          }
        },
        onOpen: function () {
          checkOutDateInput.val('');
        }
      });

      checkOutDateInput.val(momentFormatted(initialCheckOutDate));

      //++++++++modal pickers++++++++
      const checkInModalPicker = new Lightpick({
        field: document.getElementById('modalCheckIn'),
        startDate: initialCheckInDate,
        format: dateFormat,
        singleDate: true,
        minDate: moment(),
        onSelect: function (start, end) {
          checkInDateInput.val(momentFormatted(start));
          checkInModalDateInput.val(momentFormatted(start));
          if (!start.isBefore(initialCheckOutDate)) {
            checkOutDateInput.val('');
            checkOutModalDateInput.val('');
          }
          checkOutPicker.setStartDate(moment(start));
          checkOutPicker.setEndDate(null);
          checkOutModalPicker.setStartDate(moment(start));
          checkOutModalPicker.setEndDate(null);
          checkOutModalDateInput.focus();
        }
      });

      checkInModalDateInput.click(function () {
        $('[class="lightpick lightpick--1-columns"]').css('zIndex', 5001);
      });

      const checkOutModalPicker = new Lightpick({
        field: document.getElementById('modalCheckOut'),
        startDate: initialCheckInDate,
        format: ' ',
        separator: ' ',
        singleDate: false,
        minDate: moment(),
        selectForward: true,
        numberOfMonths: 2,
        onSelect: function (start, end) {
          checkInDateInput.val(momentFormatted(start));
          checkOutDateInput.val(momentFormatted(end));
          checkInModalDateInput.val(momentFormatted(start));
          checkOutModalDateInput.val(momentFormatted(end));
          if (end) {
            days = moment(end).diff(moment(start), 'days');
            totalPriceCalculate(days, guestsNumber, earlyCheck, breakfast, lateCheck);
          }
        },
        onOpen: function () {
          checkOutModalDateInput.val('');
        }
      });

      checkOutModalDateInput.focus(function () {
        $('[class="lightpick lightpick--2-columns"]').css('zIndex', 5001);
      });

      checkOutModalDateInput.val(momentFormatted(initialCheckOutDate));
    }

    $('#earlyCheck').click(function () {
      earlyCheck = this.checked;
      totalPriceCalculate(days, guestsNumber, earlyCheck, breakfast, lateCheck);
    });

    $('#breakfast').click(function () {
      breakfast = this.checked;
      totalPriceCalculate(days, guestsNumber, earlyCheck, breakfast, lateCheck);
    });

    $('#lateCheck').click(function () {
      lateCheck = this.checked;
      totalPriceCalculate(days, guestsNumber, earlyCheck, breakfast, lateCheck);
    });

    $('#guestsNumber').change(function () {
      guestsNumber = parseInt($('#guestsNumber').val());
      totalPriceCalculate(days, guestsNumber, earlyCheck, breakfast, lateCheck);
    });

    function totalPriceCalculate(days, guestsNumber, earlyCheck, breakfast, lateCheck) {
      const breakfastFee = breakfast_price;

      const regularPrice = regular_price;
      const weekendsPrice = weekends_price;
      const femaleRegularPrice = female_regular_price;
      const femaleWeekendsPrice = female_weekends_price;
      
      const lateCheckFee = regularPrice / 2;
      const earlyCheckFee = regularPrice / 2;

      let totalPrice = 0;

      totalPrice = days * guestsNumber * regularPrice;
      if (lateCheck) {
        totalPrice = totalPrice + lateCheckFee;
      }
      if (earlyCheck) {
        totalPrice = totalPrice + earlyCheckFee;
      }
      if (breakfast) {
        totalPrice = totalPrice + breakfastFee;
      }

      totalSumSpan.empty().append(totalPrice);
    }
  };

  return {
    picker,
  };
};

export default rangeDatepicker();
