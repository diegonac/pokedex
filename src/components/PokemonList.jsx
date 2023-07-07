import { FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import PokemonCard from './PokemonCard';

export default function PokemonList({ navigation, pokemons, getPokemons, nextUrl }) {

    function loadPokemons() {
        getPokemons();
    }

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={() => uuid.v4() }
            renderItem={({ item }) => <PokemonCard pokemon={item} navigation={navigation} />}
            onEndReached={nextUrl && loadPokemons}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                nextUrl && (<ActivityIndicator size="large" color={"#a4161a"} style={styles.spinner} />)
            }
        />
    )
}

const styles = StyleSheet.create({
    spinner: {
        marginTop: 10,
        marginBottom: 90,
    }
});