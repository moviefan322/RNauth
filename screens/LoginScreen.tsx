import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";

import { loginUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsAuthenticating(true);
    try {
      await loginUser(email, password);
    } catch (error: any) {
      Alert.alert("Authentication failed", error.message);
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) return <LoadingOverlay message="Logging you in.." />;
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
