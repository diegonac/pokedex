import AsyncStorage from "@react-native-async-storage/async-storage";

const SETUP_STORAGE = 'setup';

export async function getStorageSetup(setAuth = () => {}) {
    try {
        const response = await AsyncStorage.getItem(SETUP_STORAGE);
        setAuth(JSON.parse(response ?? 'false'));
        return JSON.parse(response ?? 'false');
    } catch (error) {
        throw error;
    }
}

export async function setStorageSetup(body) {
    try {
        await AsyncStorage.setItem(SETUP_STORAGE, JSON.stringify(body));
    } catch (error) {
        throw error;
    }
}

export async function removeStorageSetup() {
    try {
        await AsyncStorage.removeItem(SETUP_STORAGE);
    } catch (error) {
        throw error;
    }
}