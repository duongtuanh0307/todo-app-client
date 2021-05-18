import React, { FC, useState, FormEvent, useRef, useEffect } from "react";
//common style
import { settingFieldWrapper } from "../styles.css";
import { Typography, InputText, Button } from "../../../components/primitive";
import {
  settingReminderForm,
  inputTime,
  actionButtons,
  inputTimesArea,
} from "./styles.css";

type ReminderSettingType = {
  active: boolean;
  morningTime: string;
  afternoonTime: string;
};

type Props = {
  active: boolean;
  morningTime: string;
  afternoonTime: string;
  handleUpdateReminder: (reminderSetting: ReminderSettingType) => void;
};

export const ReminderSetting: FC<Props> = ({
  handleUpdateReminder,
  active,
  morningTime,
  afternoonTime,
}) => {
  const [isActiveReminder, setActiveReminder] = useState(false);
  const [morningTimeSetting, setMorningTime] = useState("");
  const [afternoonTimeSetting, setAfternoonTime] = useState("");

  useEffect(() => {
    setActiveReminder(active);
    setMorningTime(morningTime);
    setAfternoonTime(afternoonTime);
  }, [afternoonTime, morningTime, active]);

  const isActiveReminderChange = isActiveReminder !== active;
  const isTimesChange =
    morningTimeSetting !== morningTime ||
    afternoonTimeSetting !== afternoonTime;
  const hasUnsavedChange = isActiveReminderChange || isTimesChange;

  const toggleActiveReminder = () => {
    setActiveReminder(!isActiveReminder);
  };

  const handleChangeMorningTime = (event: FormEvent<HTMLInputElement>) => {
    setMorningTime(event.currentTarget.value);
  };

  const handleChangeAfternoonTime = (event: FormEvent<HTMLInputElement>) => {
    setAfternoonTime(event.currentTarget.value);
  };

  const toggleActive = useRef(null);

  return (
    <div className={settingFieldWrapper}>
      <Typography variant='h3' component='h4' align='center'>
        Reminder Setting
      </Typography>
      <div className={settingReminderForm}>
        <input
          type='checkbox'
          id='toggleReminder'
          ref={toggleActive}
          onChange={toggleActiveReminder}
          checked={isActiveReminder}
        />
        &nbsp;
        <label htmlFor='toggleReminder'>Active Reminder</label>
        <div className={inputTimesArea}>
          <div className={inputTime}>
            <Typography variant='h4' component='p'>
              Morning Time: &nbsp;
            </Typography>
            <InputText
              value={morningTimeSetting}
              onChange={handleChangeMorningTime}
            />
          </div>
          <div className={inputTime}>
            <Typography variant='h4' component='p'>
              Afternoon Time: &nbsp;
            </Typography>
            <InputText
              value={afternoonTimeSetting}
              onChange={handleChangeAfternoonTime}
            />
          </div>
        </div>
        <div className={actionButtons}>
          <Button
            onClick={() =>
              handleUpdateReminder({
                active: isActiveReminder,
                morningTime: morningTimeSetting,
                afternoonTime: afternoonTimeSetting,
              })
            }
            size='md'
            variant={hasUnsavedChange ? "primary" : "disabled"}
          >
            Save Change
          </Button>
        </div>
      </div>
    </div>
  );
};
