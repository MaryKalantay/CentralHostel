// Air Datepicker
const rangeDatepicker = () => {
  const picker = () => {
    $('input[name="data_to"]').daterangepicker();
  };
  return {
    picker,
  };
};

export default rangeDatepicker();
