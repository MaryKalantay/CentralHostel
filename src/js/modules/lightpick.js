// Range Datepicker
import moment from "moment";
import 'moment/locale/ru';

const rangeDatepicker = () => {
  const picker = () => {
    const dayPrice = 230;
    let totalSum = dayPrice;

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
          totalSum = dayPrice * moment(end).diff(moment(start), 'days');
          $('#totalSum').empty().append(totalSum);
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
          totalSum = dayPrice * moment(end).diff(moment(start), 'days');
          $('#totalSum').empty().append(totalSum);
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
  };

  return {
    picker,
  };
};

export default rangeDatepicker();
