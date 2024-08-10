import { FormEvent, useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleUsernameChange = (e: FormEvent) => {
    setLogin((state) => ({
      ...state,
      username: (e.target as HTMLInputElement).value,
    }));
  };

  const handlePasswordChange = (e: FormEvent) => {
    setLogin((state) => ({
      ...state,
      password: (e.target as HTMLInputElement).value,
    }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("login");
    console.log(login.username, login.password);
  };
  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="usernameLoginInput">Username</label>
      <input
        type="text"
        onChange={handleUsernameChange}
        value={login.username}
        placeholder="username"
        id="usernameLoginInput"
      />
      <label htmlFor="passwordLoginInput">Password</label>
      <input
        type="password"
        onChange={handlePasswordChange}
        value={login.password}
        placeholder="password"
        id="passwordLoginInput"
      />
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default Login;
