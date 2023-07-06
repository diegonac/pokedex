import { Text, StyleSheet, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import getColorTypePokemon from '../utils/getColorTypePokemon';

export default function PokemonCard({ navigation, pokemon }) {

    const colors = pokemon.types.map(item => getColorTypePokemon(item.type.name));

    colors.length < 2 && colors.push(colors[0]);

    function handleCard() {
        navigation.navigate("PokemonScreen", { pokemon });
    }

    return (
        <LinearGradient style={styles.cardContainer} colors={colors} >
            <Pressable onPress={handleCard}>
                <Text style={styles.name}>{pokemon.name}</Text>
                <Text style={styles.order}># {pokemon.id.toString().padStart(3, "0")}</Text>
                <Image 
                    source={{ uri: pokemon.image }} 
                    style={styles.image} 
                />
            </Pressable>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        height: 130,
        margin: 8,
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
    order: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 90,
        paddingLeft: 5
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingLeft: 10,
        textTransform: "capitalize"
    }
});