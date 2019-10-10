// Range Datepicker
import moment from "moment";
import 'moment/locale/ru';

const rangeDatepicker = () => {
  const picker = () => {
    const dateFormat = 'dd. D MMM YYYY';

    let selectedCheckInDate = moment();
    let selectedCheckOutDate = moment().add(1, 'day');
    if (moment().hour() > 19) {
      selectedCheckInDate = moment().add(1, 'day');
      selectedCheckOutDate = moment().add(2, 'day');
    }
    const checkInDateInput = $('#checkIn');
    const checkOutDateInput = $('#checkOut');

    function momentFormatted(date) {
      return moment(date).locale('ru').format(dateFormat);
    }

    const checkInPicker = new Lightpick({
      field: document.getElementById('checkIn'),
      startDate: selectedCheckInDate,
      format: dateFormat,
      singleDate: true,
      minDate: moment(),
      onSelect: function (start, end) {
        selectedCheckInDate = moment(start);
        checkInDateInput.val(momentFormatted(start));
        if (!start.isBefore(selectedCheckOutDate)) {
          checkOutDateInput.val('');
        }
        checkOutPicker.setStartDate(moment(start));
        checkOutPicker.setEndDate(null);
        checkOutDateInput.focus();
      }
    });

    const checkOutPicker = new Lightpick({
      field: document.getElementById('checkOut'),
      startDate: selectedCheckInDate,
      format: dateFormat,
      singleDate: false,
      minDate: moment(),
      selectForward: true,
      numberOfMonths: 2,
      onSelect: function (start, end) {
        selectedCheckInDate = moment(start);
        selectedCheckOutDate = moment(end);
        checkInDateInput.val(momentFormatted(start));
        checkOutDateInput.val(momentFormatted(end));
      },
      onOpen: function () {
        checkOutDateInput.val('');
      }
    });

    checkOutDateInput.val(momentFormatted(selectedCheckOutDate));

    const checkInModalDateInput = $('#modalCheckIn');
    const checkOutModalDateInput = $('#modalCheckOut');
  };

  return {
    picker,
  };
};

export default rangeDatepicker();
