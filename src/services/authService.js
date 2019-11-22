import axios from "axios";

const tokenKey = "token";


export const login = async (email, password) => {
  const { data } = await axios.get("https://swapi.co/api/people");

  const user = email.toLowerCase();
  const pass = password.toLowerCase();

  const recordData = data.results.filter((data) => data.name.toLowerCase() === user && data.birth_year.toLowerCase() === pass)
  console.log("Record data ::: :: ", recordData)

  if (recordData.length == 0) {
    return false;

  } else {
    const jwt = "1234567890";
    localStorage.setItem(tokenKey, jwt);
  }
}



export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getJwt
};
