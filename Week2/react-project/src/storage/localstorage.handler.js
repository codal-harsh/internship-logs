export const updateStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const readNotesFromStorage = () => {
  if (localStorage.getItem("notes") == null) {
    localStorage.setItem("notes", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("notes"));
};

export const storeUser = (email) => {
  localStorage.setItem("user", JSON.stringify({ email: email }));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const clearUser = () => {
  return localStorage.setItem("user", JSON.stringify({}));
};

export const checkLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user"));  
  if (user?.email==="hsonegra@codal.com") {
    return true;
  }
  return false;
};
