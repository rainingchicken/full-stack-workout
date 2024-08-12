import { FormEvent, useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: "",
  });
  const { signup, isLoading, error } = useSignup();

  const handleUsernameChange = (e: FormEvent) => {
    setSignUpInfo((state) => ({
      ...state,
      username: (e.target as HTMLInputElement).value,
    }));
  };

  const handlePasswordChange = (e: FormEvent) => {
    setSignUpInfo((state) => ({
      ...state,
      password: (e.target as HTMLInputElement).value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signup(signUpInfo.username, signUpInfo.password);
    console.log("signup");
    // console.log(signUpInfo.username, signUpInfo.password);
  };
  return (
    <form id="signupForm" onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <label htmlFor="usernameSignupInput">Create Username</label>
      <input
        type="text"
        onChange={handleUsernameChange}
        value={signUpInfo.username}
        placeholder="username"
        id="usernameSignupInput"
      />
      <label htmlFor="passwordSignupInput">Create password</label>
      <input
        type="password"
        onChange={handlePasswordChange}
        value={signUpInfo.password}
        placeholder="password"
        id="passwordSignupInput"
      />
      <button disabled={isLoading}>SIGNUP</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Signup;
