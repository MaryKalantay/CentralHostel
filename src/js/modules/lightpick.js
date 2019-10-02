// Range Datepicker
import moment from "moment";
import 'moment/locale/ru';

const rangeDatepicker = () => {
  const picker = () => {
    const dateFormat = 'dd. D MMM YYYY';

    let selectedCheckInDate = null;
    let selectedCheckOutDate = null;
    const checkInDateInput = $('#checkIn');
    const checkOutDateInput = $('#checkOut');

    let checkOutPicker = null;

    const checkInPicker = new Lightpick({
      numberOfColumns: 2,
      numberOfMonths: 2,
      singleDate: true,
      field: document.getElementById('checkIn'),
      onSelect: function (start, end) {
        console.log("selected: " + moment(start));
        selectedCheckInDate = moment(start);
        checkInDateInput.val(moment(start).locale('ru').format(dateFormat));
        checkOutPicker = new Lightpick({
          numberOfColumns: 2,
          numberOfMonths: 2,
          singleDate: false,
          startDate: selectedCheckInDate,
          field: document.getElementById('checkOut'),
          onSelect: function (start, end) {
            selectedCheckInDate = moment(start);
            checkInDateInput.val(moment(start).locale('ru').format(dateFormat));
            selectedCheckOutDate = moment(end);
            checkOutDateInput.val(moment(end).locale('ru').format(dateFormat));
          },

          onOpen: function (start, end) {
            checkOutDateInput.val('');
          },
        });
        checkOutDateInput.focus();
      },
    });

    checkOutDateInput.on('click', function () {
      if (!checkOutPicker) {
        checkOutPicker = checkOutPicker = new Lightpick({
          numberOfColumns: 2,
          numberOfMonths: 2,
          singleDate: false,
          format: ' ',
          separator: ' ',
          repick: true,
          field: document.getElementById('checkOut'),
          onSelect: function (start, end) {
            selectedCheckInDate = moment(start);
            checkInDateInput.val(moment(start).locale('ru').format(dateFormat));
            checkInPicker.setDate(start);
            if (end) {
              selectedCheckOutDate = moment(end);
              checkOutDateInput.val(moment(end).locale('ru').format(dateFormat));
            } else {
              setTimeout(function () {
                checkOutDateInput.val('');
              }, 0);
            }
          },

          onOpen: function (start, end) {
            checkOutDateInput.val('');
          },
        });
      }
      checkOutPicker.show();
    })
  };

  return {
    picker,
  };
};

export default rangeDatepicker();
