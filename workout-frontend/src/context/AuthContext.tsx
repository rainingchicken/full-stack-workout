import { createContext, ReactNode, useEffect, useReducer } from "react";

const initialState = {
  user: null,
};

interface IParams {
  children: ReactNode;
}
export interface IUserState {
  user: IState | null;
}

export interface IPayload {
  json: Object;
}
export interface IAction {
  payload: IPayload;
  type: String;
}
export interface IState {
  token: String;
  username: String;
}

export interface IContext {
  user: IUserState;
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
    const user = JSON.parse(localStorage.getItem("user") || "{}");

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
