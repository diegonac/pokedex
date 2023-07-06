import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountNavigation from "./AccountNavigation";
import FavoritesNavigation from "./FavoritesNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#a4161a',
                tabBarStyle: { position: "absolute", height: 75}
            }}
            initialRouteName="Pokedex"
        >
            <Tab.Screen name="Account" component={AccountNavigation} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (<Icon name="user" color={color} size={size} />)
            }} />
            <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
                tabBarIcon: () => IconPokeball(),
            }} />
            <Tab.Screen name="Favorites" component={FavoritesNavigation} options={{
                tabBarIcon: ({ color, size }) => (<Icon name="heart" color={color} size={size} />)
            }} />
        </Tab.Navigator>
    )
}

function IconPokeball() {
    return (
        <Image
            source={require("../assets/pokeball.png")}
            style={{
                width: 75,
                height: 75,
                top: -15
            }}
        />
    )
}
