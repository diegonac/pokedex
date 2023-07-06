import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';


export default function Loading() {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={[styles.content, {backgroundColor: colors.background}]}>
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