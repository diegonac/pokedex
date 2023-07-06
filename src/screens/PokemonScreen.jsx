import { useEffect } from "react";
import { ScrollView } from "react-native";
import { usePokeContext } from "../context/PokeContext";
import PokemonHeader from "../components/pokemon/PokemonHeader";
import PokemonTypes from "../components/pokemon/PokemonTypes";
import PokemonStats from "../components/pokemon/PokemonStats";
import Favorites from "../components/pokemon/Favorites";


export default function PokemonScreen({ route: { params: { pokemon } }, navigation }) {

    const { setup } = usePokeContext();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                setup && <Favorites pokemon={pokemon} />
            ),
        })
    }, [setup])

    return (
        <ScrollView>
            <PokemonHeader pokemon={pokemon} />
            <PokemonTypes pokemon={pokemon} />
            <PokemonStats pokemon={pokemon} />
        </ScrollView>
    );
}