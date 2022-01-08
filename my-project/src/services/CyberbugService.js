import Axios from "axios";
const { DOMAIN_CYBERBUG } = require("../util/constants/settingSystem");

export const cyberbugsService = {
  signInCyberBugs: (userLogin) => {
    return Axios({
      url: `${DOMAIN_CYBERBUG}/users/signin`,
      method: "POST",
      data: userLogin,
    });
  },
};
