// Select Picker

const selectPicker = () => {
  const select = () => {
    $('.js-example-basic-single').select2();
  };

  return {
    select,
  };
};

export default selectPicker();
