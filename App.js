import { useCallback, useEffect, useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Appearance, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { PokeContextProvider } from "./src/context/PokeContext";
import ThemeContext from "./src/context/ThemeContext";
import Main from "./src/Main";
import getTheme from "./src/assets/theme";
import {
  getStorageDarkMode,
  setStorageDarkMode,
} from "./src/api/darkModeStorage";
import { getStorageSetup } from "./src/api/setupStorage";
import SetupScreen from "./src/screens/SetupScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function loadTheme() {
      const response = await getStorageDarkMode();
      if (response === null) {
        const appearanceUser = Appearance.getColorScheme();
        appearanceUser === "dark" ? setDarkMode(true) : setDarkMode(false);
      } else setDarkMode(response);
    }

    async function prepare() {
      try {
        loadTheme();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const changeTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
    setStorageDarkMode(!darkMode);
  }, [darkMode]);

  const theme = getTheme(darkMode);

  const appContext = useMemo(() => {
    return {
      darkMode,
      changeTheme,
    };
  }, [darkMode]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <ThemeContext.Provider value={appContext}>
        <PokeContextProvider>
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Main />
          </View>
        </PokeContextProvider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}
