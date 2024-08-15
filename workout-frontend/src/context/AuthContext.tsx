import { createContext, ReactNode, useEffect, useReducer } from "react";

const initialState = {
  user: null,
};

interface IParams {
  children: ReactNode;
}
interface IPayload {
  json: Object;
}
interface IAction {
  payload: IPayload;
  type: String;
}
interface IState {
  token: String;
  username: String;
}
interface IContext {
  user: IState;
  dispatch: Function;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const authReducer = (state: any | null, action: IAction) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: IParams) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  console.log("AuthContext state:", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
