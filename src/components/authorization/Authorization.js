import React, { useState } from "react";
import Tabs from "./Tabs";
import { func, string } from "prop-types";
import Login from "./Login";
import SignIn from "./SignIn";

const authorizationArr = [
  { id: "0", value: "Log In" },
  { id: "1", value: "Sign In" },
];

const Authorization = ({ setOpen }) => {
  const [authorizationState, setAuthorizationState] = useState("Log In");
  return (
    <>
      <div className="modal-background" />
      <div className="modal">
        <button
          className="close-modal"
          onClick={() => {
            setOpen(false);
          }}
        >
          x
        </button>
        <Tabs
          options={authorizationArr}
          selectedItem={authorizationState}
          onChange={setAuthorizationState}
        />
        {authorizationState === "Log In" && <Login />}
        {authorizationState === "Sign In" && <SignIn />}
      </div>
    </>
  );
};
Authorization.propTypes = {
  selectAuthorization: string,
  setSelectAuthorization: func,
  setOpen: func,
};

export default Authorization;
