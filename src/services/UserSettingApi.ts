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

type ReminderSetting = {
  active: boolean;
  morningTime: string;
  afternoonTime: string;
};

const updateUsername = async (username: string, userId: string) => {
  const token = getToken();
  const res = httpRequest<UserInfo>({
    method: "PUT",
    url: `/user/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      username,
    },
  });
  return res;
};

const updateReminderSetting = async (
  userId: string,
  reminderSetting: ReminderSetting
) => {
  const token = getToken();
  const res = httpRequest<ReminderSetting>({
    method: "PUT",
    url: `/user/reminder/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      active: reminderSetting.active,
      morningTime: reminderSetting.morningTime,
      afternoonTime: reminderSetting.afternoonTime,
    },
  });
  return res;
};

export { updateReminderSetting, updateUsername };
