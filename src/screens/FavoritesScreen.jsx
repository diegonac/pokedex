import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { usePokeContext } from "../context/PokeContext";
import PokemonList from "../components/PokemonList";

export default function FavoritesScreen({ navigation }) {
    const { favorites } = usePokeContext();
    const { colors } = useTheme();
    return (
        <View style={styles.content}>
            {favorites.length > 0
                ? <PokemonList pokemons={favorites} navigation={navigation} />
                : <Text style={[styles.text, { color: colors.text }]}>No tiene pokemones favoritos.</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginBottom: 75
    },
    text: {
        marginTop: 50,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500'
    },
});