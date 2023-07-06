import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    title: {
        marginBottom: 30,
        fontSize: 22,
        fontWeight: 'bold',
    },
    dataContent: {
        marginBottom: 30,
    },
    itemTextContent: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#CFCFCF',
    },
    itemTextTitle: {
        paddingRight: 10,
        width: 120,
        fontWeight: 'bold',
    }
});

export default styles;