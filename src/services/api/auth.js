import { jwtDecode } from "jwt-decode";

export function Authenticated() {
  return localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token"))
    : null;
}
