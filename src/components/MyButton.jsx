import { StyleSheet, Pressable, Text } from "react-native";

export default function MyButton({ title, onPress, style, icon }) {
    return (
        <Pressable title={title} onPress={onPress} style={[styles.button, style]}>
            { icon ? icon : <Text style={styles.buttonText}>{title.toUpperCase()}</Text> }
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        marginVertical: 15,
        marginHorizontal: 35,
        border: 'none',
        borderRadius: 20,
        height: 44,
        backgroundColor: '#a4161a',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 6,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
});