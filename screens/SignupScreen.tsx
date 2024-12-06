import React, { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signUpHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error: any) {
      Alert.alert("Authentication failed", error.message);
    }

    setIsAuthenticating(false);
  };

  if (isAuthenticating) return <LoadingOverlay message="Creating User.." />;
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
