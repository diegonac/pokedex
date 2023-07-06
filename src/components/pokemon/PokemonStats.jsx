import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import uuid from "react-native-uuid";
import { getStatsInSpanish } from '../../utils/statsInSpanish';

export default function PokemonStats({ pokemon: { stats } }) {
    const { colors } = useTheme();

    const barStyle = (num) => {
        let color;
        if (num < 100 && num >= 90) {
            color = "#008000";
        } else if (num < 90 && num >= 75) {
            color = "#6EEB83";
        } else if (num < 75 && num >= 50) {
            color = "#EFCA08";
        } else if (num < 50 && num >= 25) {
            color = "#F08700";
        } else if (num < 25 && num >= 0) {
            color = "#ff3e3e";
        } else if(num >= 100) {
            color = "#8A2BE2";
        };
        return {
            backgroundColor: color,
            width: `${num}%`,
        };
    };

    return (
        <View style={styles.content}>
            <Text style={[styles.title, {color: colors.text}]}>Estadísticas básicas</Text>
            {stats.map(item => (
                <View key={uuid.v4()} style={styles.block}>
                    <Text style={styles.statName}>{getStatsInSpanish(item.stat.name)}</Text>
                    <View style={styles.blockInfo}>
                        <Text style={[styles.number, {color: colors.text}]}>{item.base_stat}</Text>
                        <View style={styles.bgBar}>
                            <View style={[styles.bar, barStyle(item.base_stat)]} />
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80,
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
    },
    statName: {
        width: "30%",
        fontSize: 12,
        color: "#666666"
    },
    blockInfo: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
    },
    number: {
        width: "12%",
        fontSize: 12,
    },
    bgBar: {
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden",
    },
    bar: {
        height: 5,
        borderRadius: 20,
    },
});