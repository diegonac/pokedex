import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import { usePokeApi } from '../hooks/usePokeApi';
import PokemonList from "../components/PokemonList";
import MyButton from "../components/MyButton";


export default function PokedexScreen({ navigation }) { 
    const { pokemons, getPokemons, nextUrl } = usePokeApi();
    
    return(
        <SafeAreaView>
            { pokemons.length > 0 && 
                <MyButton 
                    title="Buscar" 
                    onPress={() => navigation.push("SearchPokemonScreen")} 
                    icon={<Icon name="search1" color="#fff" size={35} style={{textAlign: "center"}} />} 
                    style={styles.button} 
                /> 
            }
            <PokemonList 
                pokemons={pokemons} 
                navigation={navigation} 
                getPokemons={getPokemons}
                nextUrl={nextUrl}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        right: -10,
        bottom: 70,
        zIndex: 100,
        borderRadius: 100,
        height: 60,
        width: 60,
    }});