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

  console.log(res.data);
};

export const createUser = async (email: string, password: string) => {
  await authenticate("signUp", email, password);
};

export const loginUser = async (email: string, password: string) => {
  await authenticate("signInWithPassword", email, password);
}