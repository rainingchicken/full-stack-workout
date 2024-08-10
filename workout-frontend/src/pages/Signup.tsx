import { FormEvent, useState } from "react";

const Signup = () => {
  const [signup, setSignup] = useState({
    username: "",
    password: "",
  });

  const handleUsernameChange = (e: FormEvent) => {
    setSignup((state) => ({
      ...state,
      username: (e.target as HTMLInputElement).value,
    }));
  };

  const handlePasswordChange = (e: FormEvent) => {
    setSignup((state) => ({
      ...state,
      password: (e.target as HTMLInputElement).value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("signup");
    console.log(signup.username, signup.password);
  };
  return (
    <form id="signupForm" onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <label htmlFor="usernameSignupInput">Create Username</label>
      <input
        type="text"
        onChange={handleUsernameChange}
        value={signup.username}
        placeholder="username"
        id="usernameSignupInput"
      />
      <label htmlFor="passwordSignupInput">Create password</label>
      <input
        type="password"
        onChange={handlePasswordChange}
        value={signup.password}
        placeholder="password"
        id="passwordSignupInput"
      />
      <button type="button">SIGNUP</button>
    </form>
  );
};

export default Signup;
