import { View, Text, StyleSheet } from "react-native";
import estilos from "../globas/styles/index";

export default function Titulo(props) {
    return (
        <View>
            <Text style={styles.txt}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        color: estilos.colors.title,
        fontFamily: estilos.fonts.bold,
        fontSize: 24,
        lineHeight: 29,
        textAlign: "center",
        paddingHorizontal: 90,
    },
});
