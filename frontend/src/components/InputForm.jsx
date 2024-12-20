import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function InputForm({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let endpoint = isSignedUp ? "signup" : "login";
    await axios
      .post(`https://yumkeeper-backend.onrender.com/${endpoint}`, { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setIsOpen();
      })
      .catch((data) => setError(data.response?.data?.error));
  };
  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            className="input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            className="input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          ></input>
        </div>
        <button type="sumbit">{isSignedUp ? "Sign Up" : "Login"}</button>
        <br></br>
        {error != "" && <h6 className="error">{error}</h6>}
        <p onClick={() => setIsSignedUp(true)}>
          {" "}
          {isSignedUp ? "Already have an account?" : "Create new account"}{" "}
        </p>
      </form>
    </>
  );
}

export default InputForm;
