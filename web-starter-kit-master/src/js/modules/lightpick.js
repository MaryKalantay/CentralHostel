// Range Datepicker
import moment from "moment";
import 'moment/locale/ru';

const rangeDatepicker = () => {
  const picker = new Lightpick({ field: document.getElementById('datepicker') });
  return {
    picker,
  };
};

export default rangeDatepicker();
