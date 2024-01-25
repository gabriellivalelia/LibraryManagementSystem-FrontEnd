export const authenticated =
  localStorage.getItem("tokenAcess") !== null &&
  localStorage.getItem("tokenAcess") !== "undefined" &&
  localStorage.getItem("tokenAcess") !== ""
    ? true
    : false;
