import { View, Text, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import { getTypeInSpanish } from '../../utils/typesInSpanish';
import getColorTypePokemon from '../../utils/getColorTypePokemon';

export default function PokemonTypes({ pokemon }) {
    return (
        <View style={styles.content}>
            {pokemon.types.map(item => {
                return (
                    <View key={uuid.v4()} style={{
                        backgroundColor: getColorTypePokemon(item.type.name),
                        ...styles.textContent
                    }}>
                        <Text style={styles.text}>{getTypeInSpanish(item.type.name)}</Text>
                    </View>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContent: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    text: {
        color: "#fff"
    }
});