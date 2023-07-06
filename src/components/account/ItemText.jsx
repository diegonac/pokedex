import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import styles from "./styles";

export default function ItemText({ title, text }) {
    const { colors } = useTheme();
    return (
        <View style={styles.itemTextContent}>
            <Text style={[styles.itemTextTitle, { color: colors.text }]}>{title}:</Text>
            <Text style={{ color: colors.text }}>{text}</Text>
        </View>
    );
}
