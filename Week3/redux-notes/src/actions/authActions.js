export const SET_USER = "SET_USER";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const RESET_USER = "RESET_USER";

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = () => ({
  type: SET_ERROR,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const resetUser = () => ({
  type: RESET_USER,
})