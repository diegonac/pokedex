import { Text, StyleSheet, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import getColorTypePokemon from '../utils/getColorTypePokemon';
import { useTheme } from '@react-navigation/native';

export default function PokemonCard({ navigation, pokemon }) {
    const { colors } = useTheme();

    const colorsBk = pokemon.types.map(item => getColorTypePokemon(item.type.name));

    colorsBk.length < 2 && colorsBk.push(colorsBk[0]);

    function handleCard() {
        navigation.navigate("PokemonScreen", { pokemon });
    }

    return (
        <LinearGradient style={[styles.cardContainer, { shadowColor: colors.text }]} colors={colorsBk} >
            <Pressable onPress={handleCard}>
                <Text style={styles.name}>{pokemon.name}</Text>
                <Text style={styles.order}># {pokemon.id.toString().padStart(3, 0)}</Text>
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
        margin: 8,
        height: 130,
        borderRadius: 7,
        elevation: 7
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