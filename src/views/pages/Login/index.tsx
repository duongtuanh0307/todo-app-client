import React, { useState, FormEvent, useContext } from "react";
import {
  loginWrapper,
  submitButton,
  loginForm,
  disabledForm,
  actionsWrapper,
} from "./styles.css";
import { Typography, InputText, Button } from "../../components/primitive";
import { validateEmail } from "../../../utility/helpers";
import { AuthContext } from "../../../contexts/authContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState<string>("");
  const [verifyCode, setVerifyCode] = useState<string>("");
  const [error, setError] = useState<{ type: string; message: string }>();

  const { getVerifyCode, verifyEmailToken } = useContext(AuthContext);
  const history = useHistory();

  const disabledSubmitEmail = email === "";

  const changeStep = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setStep(1);
    }
  };

  const handleChangeEmail = (event: FormEvent<HTMLInputElement>) => {
    setError(undefined);
    setEmail(event.currentTarget.value);
  };

  const handleChangeVerifyCode = (event: FormEvent<HTMLInputElement>) => {
    setVerifyCode(event.currentTarget.value);
  };

  const handleSubmitEmail = () => {
    const isValidEmail = validateEmail(email);
    if (isValidEmail) {
      getVerifyCode(email);
      changeStep();
    } else {
      const invalidEmail = { type: "email", message: "Email is not valid" };
      setError(invalidEmail);
    }
  };

  const handleResetEmail = () => {
    setEmail("");
    changeStep();
  };

  return (
    <div className={loginWrapper}>
      <Typography align='center' component='h2' variant='h1'>
        TO DO LIST
      </Typography>
      {/* Input email */}
      <div className={`${loginForm} ${step !== 1 && disabledForm}`}>
        <Typography variant='h4'>Start by ....</Typography>
        <InputText
          placeHolder='Tell me your email'
          disabled={step !== 1}
          value={email}
          onChange={handleChangeEmail}
        />
        {!!error && error.type === "email" && (
          <Typography variant='body2' color='error'>
            Please Input A Valid Email Address
          </Typography>
        )}
        <div className={actionsWrapper}>
          <Typography align='right' variant='h4'>
            .... and receive verify code by
            <Button
              customeClass={submitButton}
              variant={
                step !== 1 || disabledSubmitEmail ? "disabled" : "primary"
              }
              size='md'
              onClick={handleSubmitEmail}
            >
              SUBMIT IT
            </Button>
          </Typography>
        </div>
      </div>
      {/* Input verify code */}
      {step === 2 && (
        <div className={loginForm}>
          <Typography variant='h4'>Then, open your email and ... </Typography>
          <InputText
            placeHolder='Input verify code here'
            value={verifyCode}
            onChange={handleChangeVerifyCode}
          />
          <div className={actionsWrapper}>
            <Button
              variant='primary'
              customeClass={submitButton}
              size='md'
              onClick={async () => {
                await verifyEmailToken(email, verifyCode);
                history.push("/");
              }}
            >
              CONFIRM LOGIN
            </Button>
            <Button
              variant='default'
              customeClass={submitButton}
              size='md'
              onClick={handleResetEmail}
            >
              USE OTHER EMAIL
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
