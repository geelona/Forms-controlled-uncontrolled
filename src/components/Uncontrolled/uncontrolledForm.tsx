export default function UncontrolledForm() {
  function togglePasswordVisibility(e: React.MouseEvent<HTMLInputElement>) {
    const passwordField =
      e.currentTarget.parentElement?.parentElement?.querySelector("input"); // password input field
    if (passwordField) {
      passwordField.type =
        passwordField.type === "password" ? "text" : "password";
    }
  }

  return (
    <>
      <div className="uncontroll-wrapper form">
        <form action="">
          <div className="username text-input">
            <label htmlFor="usernameField">Username*</label>
            <input
              type="text"
              name="usernameField"
              placeholder="Enter your username"
            />
          </div>
          <div className="email text-input">
            <label htmlFor="emailField">Email*</label>
            <input
              type="email"
              name="emailField"
              placeholder="Enter your email"
            />
          </div>

          <div className="password text-input">
            <label htmlFor="passwordField">Password*</label>
            <div className="input-box">
              <input
                type="password"
                name="passwordField"
                placeholder="Enter your password"
              />
              <div className="viewModSwitcher">
                <input type="checkbox" onClick={togglePasswordVisibility} />
              </div>
            </div>
          </div>
          <div className="confirm-password text-input">
            <label htmlFor="confirmPasswordField">Confirm Password*</label>
            <div className="input-box">
              <input
                type="password"
                name="confirmPasswordField"
                placeholder="Enter your password"
              />
              <div className="viewModSwitcher">
                <input type="checkbox" onClick={togglePasswordVisibility} />
              </div>
            </div>
          </div>

          <div className="terms-checkbox">
            <div className="input-box">
              <input type="checkbox" name="termsCheckbox" />
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </div>
            <label htmlFor="termsCheckbox">
              I agree to the terms and conditions.
            </label>
          </div>
          <input className="submit-button" type="submit" value="Register" />
          <p>*Required field</p>
        </form>
      </div>
    </>
  );
}
