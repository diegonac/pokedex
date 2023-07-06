import { createContext, useContext, useEffect, useState, } from 'react';
import { setStorageFavorites, removeStorageFavorites } from '../api/favoritesStorage';
import { getStorageSetup, setStorageSetup } from '../api/setupStorage';
import { usePokeApi } from '../hooks/usePokeApi';

const PokeContext = createContext();

export function PokeContextProvider({ children }) {
    const { getFavorites } = usePokeApi();

    const [setup, setSetup] = useState(null);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getFavorites(setFavorites);
        getStorageSetup(setSetup);
    }, [])

    function addFavorites(pokemon) {
        setStorageFavorites(pokemon.id);
        setFavorites(prevState => [...prevState, pokemon])
    }

    function removeFavorites(pokemon) {
        removeStorageFavorites(pokemon.id);
        const newFavorites = favorites.filter(item => item.id !== pokemon.id);
        setFavorites([...newFavorites]);
    }

    function sendSetup(userInfo) {
        setStorageSetup(userInfo);
        setSetup(userInfo);
    }

    return (
        <PokeContext.Provider value={{
            setup,
            favorites,
            sendSetup,
            addFavorites,
            removeFavorites
        }}>
            {children}
        </PokeContext.Provider>
    );
}

export function usePokeContext() {
    const context = useContext(PokeContext);
    return context;
}