import { useContext } from "react";
import { Switch, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import ThemeContext from "../../context/ThemeContext";
import styles from "./styles";

export default function SwitchTheme() {
    const { colors } = useTheme();
    const { darkMode, changeTheme } = useContext(ThemeContext);
    function toggleSwitch() {
        changeTheme()
    }
    return (
        <View style={styles.itemTextContent}>
            <Text style={[styles.itemTextTitle, { color: colors.text }]}>Modo oscuro: </Text>
            <Switch style={{ height: 20 }} value={darkMode} onValueChange={toggleSwitch} trackColor={{
                false: "rgba(128, 128, 128, 0.5)",
                true: "#a4161a6a"
            }} thumbColor="#a4161a" />
        </View>
    );
}