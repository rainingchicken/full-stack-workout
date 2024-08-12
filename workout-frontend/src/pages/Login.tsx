import { FormEvent, useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const { login, error, isLoading } = useLogin();
  const handleUsernameChange = (e: FormEvent) => {
    setLoginInfo((state) => ({
      ...state,
      username: (e.target as HTMLInputElement).value,
    }));
  };

  const handlePasswordChange = (e: FormEvent) => {
    setLoginInfo((state) => ({
      ...state,
      password: (e.target as HTMLInputElement).value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(loginInfo.username, loginInfo.password);
    console.log("login");
    // console.log(loginInfo.username, loginInfo.password);
  };
  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="usernameLoginInput">Username</label>
      <input
        type="text"
        onChange={handleUsernameChange}
        value={loginInfo.username}
        placeholder="username"
        id="usernameLoginInput"
      />
      <label htmlFor="passwordLoginInput">Password</label>
      <input
        type="password"
        onChange={handlePasswordChange}
        value={loginInfo.password}
        placeholder="password"
        id="passwordLoginInput"
      />
      <button disabled={isLoading} type="submit">
        LOGIN
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Login;
