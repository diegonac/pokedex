import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import getColorTypePokemon from '../../utils/getColorTypePokemon';


export default function PokemonHeader({ pokemon }) {

    const colors = pokemon.types.map(item => getColorTypePokemon(item.type.name));

    colors.length < 2 && colors.push(colors[0]);

    return (
        <LinearGradient style={styles.bgView} colors={colors}>
            <SafeAreaView style={styles.containImage}>
                <View>
                    <Text style={styles.order}>
                        # {pokemon.id.toString().padStart(3, 0)}
                    </Text>
                    <Image
                        source={{ uri: pokemon.image }}
                        style={styles.image}
                    />

                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    bgView: {
        width: "100%",
        height: 430,
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        transform: [{ scaleX: 2 }]
    },
    containImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 40,
        left: 3
    },
    image: {
        height: 275,
        width: 275,
        transform: [{ scaleX: 0.5 }]
    },
    order: {
        position: "absolute",
        bottom: 15,
        right: 35,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        transform: [{ scaleX: 0.5 }]
    },
});