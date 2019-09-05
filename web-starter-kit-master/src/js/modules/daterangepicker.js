// Range Datepicker
// import moment from "moment";

const rangeDatepicker = () => {
  // const checkInDateInput = $('#checkIn');
  // const checkOutDateInput = $('#checkOut');

  // let selectedcheckInDate = moment();
  // let selectedcheckOutDate = moment().add(1, 'days');

  const picker = () => {
    // $('#checkIn, #checkOut').daterangepicker({
    //   autoApply: true,
    //   startDate: moment().format('MM/DD/YYYY'),
    //   endDate: moment().add(1, 'days').format('MM/DD/YYYY'),
    //   minDate: moment().format('MM/DD/YYYY'),
    // }, function (checkIn, checkOut, label) {
    //   selectedcheckInDate = checkIn;
    //   selectedcheckOutDate = checkOut;

    //   checkInDateInput.val(selectedcheckInDate.format('YYYY-MM-DD'));
    //   checkOutDateInput.val(selectedcheckOutDate.format('YYYY-MM-DD'));

    //   const checkInDatePicker = checkInDateInput.data('daterangepicker');
    //   checkInDatePicker.setStartDate(selectedcheckInDate.format('MM/DD/YYYY'));
    //   checkInDatePicker.setEndDate(selectedcheckOutDate.format('MM/DD/YYYY'));

    //   const checkOutDatePicker = checkOutDateInput.data('daterangepicker');
    //   checkOutDatePicker.setStartDate(selectedcheckInDate.format('MM/DD/YYYY'));
    //   checkOutDatePicker.setEndDate(selectedcheckOutDate.format('MM/DD/YYYY'));
    // });

    // checkInDateInput.val(moment().format('YYYY-MM-DD'));
    // checkOutDateInput.val(moment().add(1, 'days').format('YYYY-MM-DD'));

    // checkInDateInput.on('apply.daterangepicker', function (event, picker) {
    //   checkInDateInput.val(selectedcheckInDate.format('YYYY-MM-DD'));
    //   checkOutDateInput.val(selectedcheckOutDate.format('YYYY-MM-DD'));
    // });

    // checkInDateInput.on('hide.daterangepicker', function (event, picker) {
    //   checkInDateInput.val(selectedcheckInDate.format('YYYY-MM-DD'));
    //   checkOutDateInput.val(selectedcheckOutDate.format('YYYY-MM-DD'));
    // });

    // checkOutDateInput.on('apply.daterangepicker', function (event, picker) {
    //   checkInDateInput.val(selectedcheckInDate.format('YYYY-MM-DD'));
    //   checkOutDateInput.val(selectedcheckOutDate.format('YYYY-MM-DD'));
    // });

    // checkOutDateInput.on('hide.daterangepicker', function (event, picker) {
    //   checkInDateInput.val(selectedcheckInDate.format('YYYY-MM-DD'));
    //   checkOutDateInput.val(selectedcheckOutDate.format('YYYY-MM-DD'));
    // });
  };
  return {
    picker,
  };
};

export default rangeDatepicker();
