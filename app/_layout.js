import React, { useEffect } from "react";
import { Slot, useSegments, useRouter } from "expo-router";
import { AuthContextProvider, useAuth } from "../context/authcontext";

// Import your global CSS file
import "../global.css";
const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // check if the user is authenticated
    if(typeof isAuthenticated == "undefined") return;
    const inApp = segments[0] == '(app)';
    if(isAuthenticated && !inApp){
      // redirect user to home
      router.replace('home');
    }else if(isAuthenticated== false){
        // redirect user to signIn
        router.replace('signIn');

    }
  }, [isAuthenticated]);  

  return <Slot />;
};

export default RootLayout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};
