import React, { createContext, useState, useEffect } from "react";
import { login, verifyEmail, getUserInfo } from "../services/AuthenticationApi";
import {
  setToken,
  setCurrentUser,
  deleteTokenCookie,
  getToken,
  getUserFromCookie,
  deleteUserCookie,
} from "../utility/cookies";

type AuthState = {
  status: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
  token: string;
  err?: string;
};

type AuthContextType = {
  authState: AuthState;
  getVerifyCode: (email: string) => void;
  verifyEmailToken: (email: string, emailToken: string) => Promise<void>;
  logout: () => void;
  resetErr: () => void;
};

const defaultUser = {
  id: "",
  email: "",
  username: "",
};

export const AuthContext = createContext<AuthContextType>(undefined!);

const AuthProvider = (props: any) => {
  const [authState, setAuthState] = useState<AuthState>({
    status: "loading",
    user: defaultUser,
    err: undefined,
    token: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      const currentUserId = getUserFromCookie();
      if (token === "" || currentUserId === "") {
        setAuthState({
          status: "out",
          user: defaultUser,
          err: undefined,
          token: "",
        });
      } else {
        const { data } = await getUserInfo(currentUserId);
        setAuthState({
          status: "in",
          user: {
            id: data.id,
            email: data.email,
            username: data.username,
          },
          token,
          err: undefined,
        });
      }
      return;
    };
    fetchData();
  }, []);

  const getVerifyCode = (email: string) => {
    try {
      login(email);
    } catch (error) {
      setAuthState({
        ...authState,
        err: error,
      });
    }
  };

  const verifyEmailToken = async (email: string, emailToken: string) => {
    try {
      const res = await verifyEmail(email, emailToken);
      setToken(res.headers.authorization || "");
      setCurrentUser(res.data.user.id || "");
      setAuthState({
        status: "in",
        user: {
          id: res.data.user.id,
          email: res.data.user.email,
          username: res.data.user.username,
        },
        token: res.headers.authorization,
        err: undefined,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        err: error,
      });
    }
  };

  const logout = () => {
    deleteUserCookie();
    deleteTokenCookie();
    setAuthState({
      ...authState,
      status: "out",
      user: defaultUser,
    });
  };

  const resetErr = () => {
    setAuthState({
      ...authState,
      err: undefined,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        getVerifyCode,
        verifyEmailToken,
        logout,
        resetErr,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
