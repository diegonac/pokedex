import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetupScreen from "../screens/SetupScreen";

const Stack = createNativeStackNavigator();

export default function SetupNavigation() {
    return (
        <Stack.Navigator screenOptions={{ navigationBarHidden: false }}>
            <Stack.Screen 
                name="SetupScreen" 
                component={SetupScreen} 
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}