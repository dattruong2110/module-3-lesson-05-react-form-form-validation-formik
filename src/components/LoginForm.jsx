import React, { useState } from "react";

const LoginForm = () => {
  const MESSAGE_ERROR = {
    email: "Email error",
    password: "Password error",
  };

  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@$!%*?&]{8,}$/,
  };

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(REGEX[e.target.name].test(e.target.value));
    console.log(MESSAGE_ERROR[e.target.name]);
    let error = REGEX[e.target.name].test(e.target.value) // e.target.value -> lấy ra giá trị của thuộc tính name trong ô input
      ? // REGEX[e.target.name] lấy giá trị của email trong REGEX
        ""
      : MESSAGE_ERROR[e.target.name];
    console.log(error);
    setUser({
      ...user, // duyệt qua từng thuộc tính, giá trị của user
      [e.target.name]: { value: e.target.value, error: error }, // cập nhật & gán từng thuộc tính, giá trị vào ...user
    });
  };

  const handleSubmit = () => {
    const isFilled =
      user.email && user.email.value && user.password && user.password.value;
    const isError = isFilled && (user.email.error || user.password.error);
    alert(
      isFilled && !isError
        ? "Login in successfully!"
        : "Please fill in valid values for all of fields!"
    );
  };

  return (
    <>
      <h2>Login Form</h2>
      <form>
        <div
          className={`custom-input ${
            user.email && user.email.error && "custom-input-error"
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={(user.email && user.email.value) || ""}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {user.email && user.email.error && (
            <p className="error">Invalid email</p>
          )}
        </div>
        <div
          className={`custom-input ${
            user.password && user.password.error && "custom-input-error"
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={(user.password && user.password.value) || ""}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {user.password && user.password.error && (
            <p className="error">Invalid password</p>
          )}
        </div>
        <button type="button" onClick={handleSubmit} value={"Login"}>
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
