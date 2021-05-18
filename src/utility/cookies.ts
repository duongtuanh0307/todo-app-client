import Cookies from "js-cookie";

const TOKEN = "token";
const USERID = "userId";

const setToken = (token: string) => {
  Cookies.set(TOKEN, token, { path: "/", expires: 3 });
};

const setCurrentUser = (userId: string) => {
  Cookies.set(USERID, userId, { paths: "/", expires: 3 });
};

const deleteTokenCookie = () => {
  Cookies.remove(TOKEN, { path: "/" });
};

const getToken = () => {
  return Cookies.get(TOKEN) || "";
};

const getUserFromCookie = () => {
  return Cookies.get(USERID) || "";
};

const deleteUserCookie = () => {
  Cookies.remove(USERID, { path: "/" });
};

export {
  setToken,
  setCurrentUser,
  deleteTokenCookie,
  getToken,
  getUserFromCookie,
  deleteUserCookie,
};
