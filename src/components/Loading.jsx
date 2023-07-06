import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


export default function Loading() {
    return (
        <SafeAreaView style={styles.content}>
            <StatusBar style='light' />
            <Image source={require("../assets/pokeball.png")} style={styles.image} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#070707"
    },
    image: {
        height: 200,
        width: 200,
    },
});