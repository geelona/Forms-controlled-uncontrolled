import { useEffect, useRef, useState } from "react";

export default function controlledForm() {
  const initialValues = {
    usernameField: "",
    emailField: "",
    passwordField: "",
    confirmPasswordField: "",
    termsCheckbox: false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({} as any);
  const [isSubmit, setIsSubmit] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [usernameField, setUsernameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [confirmPasswordField, setConfirmPasswordField] = useState("");
  const [termsCheckbox, setTermsCheckbox] = useState(false);

  function togglePasswordVisibility() {
    if (passwordRef.current) {
      passwordRef.current.type === "password"
        ? (passwordRef.current.type = "text")
        : (passwordRef.current.type = "password");
    }
  }

  function toggleConfirmPasswordVisibility() {
    if (confirmPasswordRef.current) {
      confirmPasswordRef.current.type === "password"
        ? (confirmPasswordRef.current.type = "text")
        : (confirmPasswordRef.current.type = "password");
    }
  }

  function HandleSubmit(e: any) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    setFormValues({
      usernameField: usernameField,
      emailField: emailField,
      passwordField: passwordField,
      confirmPasswordField: confirmPasswordField,
      termsCheckbox: termsCheckbox,
    });
  }, [
    usernameField,
    emailField,
    passwordField,
    confirmPasswordField,
    termsCheckbox,
  ]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  function validate(values: any) {
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

  return (
    <>
      <div className="uncontroll-wrapper form">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <p className="title-message">
            Controlled Form submitted successfully
          </p>
        ) : (
          <p className="title-message">Controlled Form</p>
        )}
        <form onSubmit={HandleSubmit}>
          <div className="username text-input">
            <label htmlFor="usernameField">Username*</label>
            <input
              type="text"
              name="usernameField"
              placeholder="Enter your username"
              value={usernameField}
              onChange={(e) => setUsernameField(e.target.value)}
            />
            <p className="formError">{formErrors.usernameField}</p>
          </div>
          <div className="email text-input">
            <label htmlFor="emailField">Email*</label>
            <input
              type="text"
              name="emailField"
              placeholder="Enter your email"
              value={emailField}
              onChange={(e) => setEmailField(e.target.value)}
            />
            <p className="formError">{formErrors.emailField}</p>
          </div>

          <div className="password text-input">
            <label htmlFor="passwordField">Password*</label>
            <div className="input-box">
              <input
                type="password"
                name="passwordField"
                placeholder="Enter your password"
                ref={passwordRef}
                value={passwordField}
                onChange={(e) => setPasswordField(e.target.value)}
              />

              <div className="viewModSwitcher">
                <input type="checkbox" onClick={togglePasswordVisibility} />
              </div>
            </div>
            <p className="formError">{formErrors.passwordField}</p>
          </div>
          <div className="confirm-password text-input">
            <label htmlFor="confirmPasswordField">Confirm Password*</label>
            <div className="input-box">
              <input
                type="password"
                name="confirmPasswordField"
                placeholder="Enter your password"
                ref={confirmPasswordRef}
                value={confirmPasswordField}
                onChange={(e) => setConfirmPasswordField(e.target.value)}
              />

              <div className="viewModSwitcher">
                <input
                  type="checkbox"
                  onClick={toggleConfirmPasswordVisibility}
                />
              </div>
            </div>
            <p className="formError">{formErrors.confirmPasswordField}</p>
          </div>

          <div className="terms-checkbox">
            <div className="data">
              <div className="input-box">
                <input
                  id="termsCheckboxControlled"
                  type="checkbox"
                  name="termsCheckbox"
                  checked={termsCheckbox}
                  onChange={() => setTermsCheckbox(!termsCheckbox)}
                />

                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="white"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <label htmlFor="termsCheckboxControlled">
                I agree to the terms and conditions.
              </label>
            </div>
            <p className="formError"> {formErrors.termsCheckbox} </p>
          </div>
          <input className="submit-button" type="submit" value="Register" />
          <p>*Required field</p>
        </form>
      </div>
    </>
  );
}
