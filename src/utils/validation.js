export function validateForm(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!form.age) {
    errors.age = 'Age is required.';
  } else if (!Number.isFinite(Number(form.age)) || Number(form.age) <= 0) {
    errors.age = 'Age must be a positive number.';
  }

  if (!form.gender) {
    errors.gender = 'Choose a gender.';
  }

  if (!form.height) {
    errors.height = 'Height is required.';
  } else if (!Number.isFinite(Number(form.height)) || Number(form.height) <= 0) {
    errors.height = 'Height must be a valid positive number.';
  }

  if (!form.weight) {
    errors.weight = 'Weight is required.';
  } else if (!Number.isFinite(Number(form.weight)) || Number(form.weight) <= 0) {
    errors.weight = 'Weight must be a valid positive number.';
  }

  return errors;
}
