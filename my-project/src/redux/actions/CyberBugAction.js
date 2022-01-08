import { USER_SIGNIN_API } from "../constants/Cyberbugs/Cyberbugs";

export const signInCyberBugAction = (email, password) => {
  return {
    type: USER_SIGNIN_API,
    userLogin: {
      email: email,
      password: password,
    },
  };
};
