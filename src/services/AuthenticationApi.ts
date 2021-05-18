import httpRequest from "./adapter";
import { getToken } from "../utility/cookies";

type UserInfo = {
  id: string;
  email: string;
  username: string;
  reminderSetting: {
    active: boolean;
    morningTime: string;
    afternoonTime: string;
  };
};

const login = async (email: string) => {
  const res = await httpRequest<{}>({
    method: "POST",
    url: "/auth/login",
    data: {
      email,
    },
  });
  return res;
};

const verifyEmail = async (email: string, emailToken: string) => {
  const res = await httpRequest<{
    user: { id: string; username: string; email: string; loginCount: number };
    displayIntruction: boolean;
  }>({
    method: "POST",
    url: "/authenticate",
    data: {
      email,
      emailToken,
    },
  });
  return res;
};

const getUserInfo = async (userId: string) => {
  const token = getToken();
  const res = await httpRequest<UserInfo>({
    method: "GET",
    url: `/user/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export { login, verifyEmail, getUserInfo };
