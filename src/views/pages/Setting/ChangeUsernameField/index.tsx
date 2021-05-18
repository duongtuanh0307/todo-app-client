import React, { FC, useState, FormEvent, useEffect } from "react";
import { settingFieldWrapper } from "../styles.css";
import { inputUsernameField, actionButtons } from "./styles.css";
import { InputText, Typography, Button } from "../../../components/primitive";

type Props = {
  currentUsername: string;
  handleChangeUsername: (username: string) => void;
};

export const ChangeUsernameField: FC<Props> = ({
  currentUsername,
  handleChangeUsername,
}) => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(currentUsername);
  }, [currentUsername]);
  const disableButton = currentUsername === username;
  const handleChangeInputValue = (event: FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  return (
    <div className={settingFieldWrapper}>
      <Typography variant='h3' component='h4' align='center'>
        Change Username
      </Typography>
      <div className={inputUsernameField}>
        <Typography variant='h4' component='p'>
          Username: &nbsp;
        </Typography>
        <InputText value={username} onChange={handleChangeInputValue} />
        <div className={actionButtons}>
          <Button
            onClick={() => {
              handleChangeUsername(username);
            }}
            size='md'
            variant={disableButton ? "disabled" : "primary"}
          >
            Save Change
          </Button>
        </div>
      </div>
    </div>
  );
};
