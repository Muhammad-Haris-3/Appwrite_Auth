import React, { useContext, useEffect, useState } from 'react';

//imports
import { NavigationContainer } from '@react-navigation/native';
import { AppwriteContext } from '../appwrite/AppwriteContext';
import Loading from '../components/loading';

//Routes
import Appstack from './AppStack';
import AuthStack from './AuthStack';

export default function Router() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);
  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(response => {
        setIsLoading(false);
        if (response) {
          setIsLoggedIn(true);
        }
      })
      .catch(_ => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [appwrite, setIsLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <Appstack /> : <AuthStack />}
    </NavigationContainer>
  );
}
