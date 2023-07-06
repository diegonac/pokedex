import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { capitalizeString } from "../utils/dataUtils";
import FavoritesScreen from "../screens/FavoritesScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Stack = createNativeStackNavigator();

export default function FavoritesNavigation() {
    return (
        <Stack.Navigator initialRouteName="FavoritesScreen" screenOptions={{navigationBarHidden: false}}>
            <Stack.Screen
                name="FavoritesScreen"
                component={FavoritesScreen}
                options={{ title: "Favoritos" }}
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
        </Stack.Navigator>
    );
}