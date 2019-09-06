// Range Datepicker
import moment from "moment";
import 'moment/locale/ru';

const rangeDatepicker = () => {
  const checkInDateInput = $('#checkIn');
  const checkOutDateInput = $('#checkOut');
  const dateFormat = 'dd. D MMM YYYY';

  let selectedCheckInDate = null;
  let selectedCheckOutDate = null;

  const picker = () => {
    checkOutDateInput.daterangepicker({
      autoApply: true,
    }, function (checkIn, checkOut, label) {
      selectedCheckInDate = moment(checkIn).locale('ru');
      selectedCheckOutDate = moment(checkOut).locale('ru');

      checkInDateInput.val(selectedCheckInDate.format(dateFormat));
      checkOutDateInput.val(selectedCheckOutDate.format(dateFormat));

      const checkInDatePicker = checkInDateInput.data('daterangepicker');
      checkInDatePicker.setStartDate(selectedCheckInDate.format('MM/DD/YYYY'));
      checkInDatePicker.setEndDate(selectedCheckOutDate.format('MM/DD/YYYY'));

      const checkOutDatePicker = checkOutDateInput.data('daterangepicker');
      checkOutDatePicker.setStartDate(selectedCheckInDate.format('MM/DD/YYYY'));
    });

    checkInDateInput.daterangepicker({
      singleDatePicker: true,
      autoApply: true,
      startDate: moment().format('MM/DD/YYYY'),
      minDate: moment().format('MM/DD/YYYY'),
    }, function (checkIn, checkOut, label) {
      selectedCheckInDate = moment(checkIn).locale('ru');

      checkInDateInput.val(selectedCheckInDate.format(dateFormat));

      const checkInDatePicker = checkInDateInput.data('daterangepicker');
      checkInDatePicker.setStartDate(selectedCheckInDate.format('MM/DD/YYYY'));

      const checkOutDatePicker = checkOutDateInput.data('daterangepicker');
      checkOutDatePicker.setStartDate(selectedCheckInDate.format('MM/DD/YYYY'));
      checkOutDatePicker.setEndDate(null);
    });

    checkInDateInput.val('');
    checkOutDateInput.val('');

    checkInDateInput.on('apply.daterangepicker', function (event, picker) {
      checkInDateInput.val(selectedCheckInDate.format(dateFormat));
      checkOutDateInput.focus();
    });

    checkOutDateInput.on('showCalendar.daterangepicker', function (event, picker) {
      $('.active.start-date.available')[0].click();
    });

    checkInDateInput.on('hide.daterangepicker', function (event, picker) {
      if (selectedCheckInDate !== null) {
        checkInDateInput.val(selectedCheckInDate.format(dateFormat));
      } else {
        checkInDateInput.val('');
      }
      if (selectedCheckOutDate !== null) {
        checkOutDateInput.val(selectedCheckOutDate.format(dateFormat));
      } else {
        checkOutDateInput.val('');
      }
    });

    checkOutDateInput.on('apply.daterangepicker', function (event, picker) {
      checkInDateInput.val(selectedCheckInDate.format(dateFormat));
      checkOutDateInput.val(selectedCheckOutDate.format(dateFormat));
    });

    checkOutDateInput.on('hide.daterangepicker', function (event, picker) {
      if (selectedCheckInDate !== null) {
        checkInDateInput.val(selectedCheckInDate.format(dateFormat));
      } else {
        checkInDateInput.val('');
      }
      if (selectedCheckOutDate !== null) {
        checkOutDateInput.val(selectedCheckOutDate.format(dateFormat));
      } else {
        checkOutDateInput.val('');
      }
    });
  };
  return {
    picker,
  };
};

export default rangeDatepicker();
