import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { capitalizeString } from "../utils/dataUtils";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";
import SearchPokemonScreen from "../screens/SearchPokemonScreen";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
    return(
        <Stack.Navigator initialRouteName="PokedexScreen" screenOptions={{navigationBarHidden: false}}>
            <Stack.Screen 
                name="PokedexScreen" 
                component={PokedexScreen} 
                options={{ headerTitle: "", headerTransparent: true }} 
            />
            <Stack.Screen
                name="PokemonScreen"
                component={PokemonScreen}
                options={({ route }) => ({ 
                    title: capitalizeString(route.params.pokemon.name), 
                    headerTransparent: true,
                    headerTintColor: "#fff",
                    headerTitleAlign: "center"
                })
                }
            />
            <Stack.Screen 
                name="SearchPokemonScreen"
                component={SearchPokemonScreen}
                options={{
                    title: "Buscar un Pokemon"
                }}
            />
        </Stack.Navigator>
    );
}