import { useState } from 'react';
import {
    TextInput,
    StyleSheet,
    ScrollView, 
    ActivityIndicator, 
    Text, 
    View, 
    Pressable, 
    Keyboard
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { usePokeApi } from '../../hooks/usePokeApi';
import PokemonCard from '../PokemonCard';
import MyButton from '../MyButton';

export default function Search({ navigation }) {
    const [inputText, setInputText] = useState(undefined);
    const [pokemon, setPokemon] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const { getPokemonByName } = usePokeApi();
    const { colors } = useTheme();

    async function search() {
        const response = await getPokemonByName(inputText);
        setPokemon(response);
        setLoading(false);
    }
    function handleSearch() {
        if (!inputText) return null;
        setLoading(true);
        setTimeout(search, 500)
    }
    return (
        <Pressable onPress={() => Keyboard.dismiss()}>
            <View style={styles.content}>
                <TextInput
                    style={[styles.input, { color: colors.text, borderColor: colors.border }]}
                    placeholder='Escribe el nombre o número de un pokemon'
                    placeholderTextColor={colors.placeholder}
                    onChangeText={text => setInputText(text.toString().toLowerCase().trim())}
                />
                <MyButton title='Buscar' onPress={handleSearch} />
                {loading
                    ? <ActivityIndicator size="large" color={"#a4161a"} style={styles.spinner} />
                    : pokemon &&
                    <ScrollView style={styles.contentCard}>
                        {
                            pokemon === 404
                                ? <Text style={[styles.text, { color: colors.text }]}>
                                    No hubo resultados para su búsqueda.
                                </Text>
                                : <PokemonCard pokemon={pokemon} navigation={navigation} />
                        }
                    </ScrollView>
                }
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    content: {
        height: "100%",
    },
    input: {
        padding: 10,
        margin: 12,
        marginHorizontal: 35,
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        backgroundColor: "rgba(128, 128, 128, 0.5)"
    },
    contentCard: {
        marginHorizontal: 30,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 75,
    },
    text: {
        marginTop: 50,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500'
    },
});