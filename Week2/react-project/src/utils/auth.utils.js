import { storeUser } from "../storage/localstorage.handler";

export const checkUser = (email, password) => {
  if (email === "hsonegra@codal.com" && password === "codal@123") {
    storeUser(email);
    return true;
  } else {
    return false;
  }
};
