import { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { usePokeContext } from "../../context/PokeContext";

export default function Favorites({ pokemon }) {
    const { favorites, addFavorites, removeFavorites } = usePokeContext();

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const isTrue = favorites.some(item => item.id === pokemon.id);
        setIsFavorite(isTrue);
    }, [])

    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    function handleFavorite() {        
        isFavorite ? removeFavorites(pokemon) : addFavorites(pokemon);
        setIsFavorite(prevState => !prevState);
    }

    return  <Icon 
                name="heart" 
                size={20} 
                color='#fff' 
                style={{marginRight: 2}} 
                onPress={() => handleFavorite()} 
            />
}