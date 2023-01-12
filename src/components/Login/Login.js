import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";

const Login = ({ onLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPass, setEnteredPass] = useState("");
  const [passIsValid, setPassIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking validity");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPass.trim().length > 6
      );
    }, 1000);
    return () => {
      console.log("clean-up");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPass]);

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(enteredEmail, enteredPass);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
  };
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePassHandler = () => {
    setPassIsValid(enteredPass.trim().length > 6);
  };

  return (
    <React.Fragment>
      <Card className={classes.login}>
        <form onSubmit={submitHandler} className="">
          <div
            className={`${classes.control} 
          ${emailIsValid === false ? classes.invalid : ""}`}
          >
            <label className={`{classes.}`}>
              Email:
              <input
                type="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </label>
          </div>
          <div
            className={`${classes.control} 
          ${passIsValid === false ? classes.invalid : " "}`}
          >
            <label className="">
              Password:
              <input
                type="password"
                value={enteredPass}
                onChange={passChangeHandler}
                onBlur={validatePassHandler}
              />
            </label>
          </div>
          <div className={classes.action}>
            <Button
              type="submit"
              className={classes.buttom}
              disabled={!formIsValid}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default Login;
