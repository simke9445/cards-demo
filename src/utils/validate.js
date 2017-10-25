export const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  return errors;
};
