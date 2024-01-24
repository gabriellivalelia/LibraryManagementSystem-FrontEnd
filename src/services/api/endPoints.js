import instance from "./instance";

export const createUser = (user) => instance.post("/createUser", user);
export const updateUser = (user) => instance.put("/updateUser", user);
export const getUserById = (id) => instance.get(`/getUserById/${id}`);
export const logIn = (data) => instance.post("/logIn", data);
export const deleteUser = (id) => instance.delete(`/deleteUser/${id}`);
