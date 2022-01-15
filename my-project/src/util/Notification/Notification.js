import { notification } from "antd";
export const notificationCyberbugs = (type, message, description = "") => {
  notification[type]({
    //action.typeNotification = success | warning | info | error,
    message: message,
    description: description,
  });
};
