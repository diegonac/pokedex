import AsyncStorage from "@react-native-async-storage/async-storage";

const DARKMODE_STORAGE = "darkmode";

export async function getStorageDarkMode() {
    try {
        const response = await AsyncStorage.getItem(DARKMODE_STORAGE);
        return JSON.parse(response ?? 'null');
    } catch (error) {
        throw error;
    }
}

export async function setStorageDarkMode(isTrue) {
    try {
        await AsyncStorage.setItem(DARKMODE_STORAGE, JSON.stringify(isTrue));
    } catch (error) {
        throw error;
    }
}

export async function removeStorageDarkMode() {
    try {
        await AsyncStorage.remove(DARKMODE_STORAGE);
    } catch (error) {
        throw error;
    }
}
