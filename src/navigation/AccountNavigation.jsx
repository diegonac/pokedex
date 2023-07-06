import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
    return (
        <Stack.Navigator screenOptions={{navigationBarHidden: false}}>
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: "Mi cuenta" }} />
        </Stack.Navigator>
    );
}