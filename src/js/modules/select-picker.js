// Select Picker

const selectPicker = () => {
  const dropdown = () => {
    $('.js-example-basic-single').select2();
  };

  return {
    dropdown,
  };
};

export default selectPicker();
