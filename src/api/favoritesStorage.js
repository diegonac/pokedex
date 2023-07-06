import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITE_STORAGE = "favorites";

export async function getStorageFavorites() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response ?? '[]');
    } catch (error) {
        throw error;
    }
}

export async function setStorageFavorites(id) {
    try {
        const favorites = await getStorageFavorites();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw error;
    }
}

export async function removeStorageFavorites(id) {
    try {
        const favorites = await getStorageFavorites();
        const newFavorites = favorites.filter(item => {
            return item !== id
        });
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch (error) {
        throw error;
    }
}
