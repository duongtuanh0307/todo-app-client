import React, { FC, useEffect, useState } from "react";
import { ChangeUsernameField } from "./ChangeUsernameField";
import { ReminderSetting } from "./ReminderSetting";
import { PageTitle } from "../../components/compound";
import { settingPageWrapper } from "./styles.css";
import { getUserInfo } from "../../../services/AuthenticationApi";
import {
  updateUsername,
  updateReminderSetting,
} from "../../../services/UserSettingApi";

type ReminderSettingType = {
  active: boolean;
  morningTime: string;
  afternoonTime: string;
};

type UserInfo = {
  id: string;
  email: string;
  username: string;
  reminderSetting: ReminderSettingType;
};

const defaultUser: UserInfo = {
  id: "",
  email: "",
  username: "",
  reminderSetting: {
    morningTime: "",
    afternoonTime: "",
    active: false,
  },
};

export const Setting: FC<{ userId: string }> = ({ userId }) => {
  const [currentUser, setCurrentUser] = useState<UserInfo>(defaultUser);

  useEffect(() => {
    getCurrentUser(userId);
  }, [userId]);

  const getCurrentUser = async (userId: string) => {
    const res = await getUserInfo(userId);
    setCurrentUser({
      id: res.data.id,
      email: res.data.email,
      username: res.data.username,
      reminderSetting: {
        morningTime: res.data.reminderSetting.morningTime,
        afternoonTime: res.data.reminderSetting.afternoonTime,
        active: res.data.reminderSetting.active,
      },
    });
  };

  const handleChangeUsername = async (newUsername: string) => {
    await updateUsername(newUsername, userId);
    window.location.reload();
  };

  const handleUpdateReminder = async (newSetting: ReminderSettingType) => {
    await updateReminderSetting(userId, newSetting);
    window.location.reload();
  };

  return (
    <div className={settingPageWrapper}>
      <PageTitle>Settings</PageTitle>
      <ChangeUsernameField
        currentUsername={currentUser.username}
        handleChangeUsername={handleChangeUsername}
      />
      <ReminderSetting
        active={currentUser.reminderSetting.active}
        morningTime={currentUser.reminderSetting.morningTime}
        afternoonTime={currentUser.reminderSetting.afternoonTime}
        handleUpdateReminder={handleUpdateReminder}
      />
    </div>
  );
};
