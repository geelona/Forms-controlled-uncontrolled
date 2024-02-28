export default function validate(values: any) {
  const errors: any = {};
  const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

  if (!values.usernameField) {
    errors.usernameField = "Username is required";
  }
  if (!values.emailField) {
    errors.emailField = "Email is required";
  } else if (!regex.test(values.emailField)) {
    errors.emailField = "Invalid email address";
  }
  if (!values.passwordField) {
    errors.passwordField = "Password is required";
  }
  if (!values.confirmPasswordField) {
    errors.confirmPasswordField = "Confirm Password is required";
  } else if (values.passwordField !== values.confirmPasswordField) {
    errors.confirmPasswordField = "Password does not match";
  }
  if (!values.termsCheckbox) {
    errors.termsCheckbox = "You must agree to the terms and conditions";
  }
  return errors;
}
