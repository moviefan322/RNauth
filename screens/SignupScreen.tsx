import React, { useState, useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext)

  const signUpHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token)
    } catch (error: any) {
      Alert.alert("Authentication failed", error.message);
      setIsAuthenticating(false);
    }

  };

  if (isAuthenticating) return <LoadingOverlay message="Creating User.." />;
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
