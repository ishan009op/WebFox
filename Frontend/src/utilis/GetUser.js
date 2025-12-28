export const getUserFromToken = () => {
  const token = localStorage.getItem("WEBtoken");
  if (!token) return null;

  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload;
};
