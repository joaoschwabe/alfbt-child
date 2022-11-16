import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import estilos from "../globas/styles";

const Botao = (props) => {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
        },
        btn: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: props.color,
            borderRadius: 27,
            width: 240,
            height: 60,
        },
        txt: {
            color: "#FFF",
            textAlign: "center",
            fontSize: 24,
            fontFamily: estilos.fonts.title,
        },
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={
                    props.tela ? () => navigation.navigate(props.tela) : null
                }
            >
                <Text style={styles.txt}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Botao;
