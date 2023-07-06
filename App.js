import { useCallback, useEffect, useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Appearance } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PokeContextProvider } from "./src/context/PokeContext";
import ThemeContext from "./src/context/ThemeContext";
import Main from "./src/Main";
import getTheme from "./src/assets/theme";
import { getStorageDarkMode, setStorageDarkMode } from "./src/api/darkModeStorage";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    (async () => {
      const response = await getStorageDarkMode();
      if(response === null) {
        const appearanceUser = Appearance.getColorScheme();
        appearanceUser === "dark" ? setDarkMode(true) : setDarkMode(false);
      } else setDarkMode(response);
    })()
  }, [])

  const changeTheme = useCallback(() => {
    setDarkMode(prev => !prev);
    setStorageDarkMode(!darkMode);
  }, [darkMode])

  const theme = getTheme(darkMode);

  const appContext = useMemo(() => {
    return {
      darkMode,
      changeTheme,
    };
  }, [darkMode]);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <ThemeContext.Provider value={appContext}>
        <PokeContextProvider>
          <Main />
        </PokeContextProvider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}