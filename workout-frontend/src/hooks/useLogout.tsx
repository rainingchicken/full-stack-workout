import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    location.reload();
    //remove user from local storage
    localStorage.removeItem("user");
    //dispatch logout fn
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useLogout;
