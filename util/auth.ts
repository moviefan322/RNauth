import axios from "axios";
// import { FIREBASE_API_KEY } from "@env";

const APIKEY = "AIzaSyCVvJMnaWpD0XCyqw92fUPmkr_v0geyTfs";

const authenticate = async (
  mode: string,
  email: string,
  password: string
) => {
  console.log("authenticating " + mode + " user..");
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${APIKEY}`;

  const res = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = res.data.idToken
  return token
};

export const createUser =  (email: string, password: string) => {
  return authenticate("signUp", email, password);
};

export const loginUser = (email: string, password: string) => {
  return authenticate("signInWithPassword", email, password);
}