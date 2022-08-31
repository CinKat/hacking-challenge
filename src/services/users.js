import apiFetch from "./api-fetch";

export async function getUser() {
  const { ...user } = await apiFetch("/users");
  let users = Object.values(user);
  return users;
}
