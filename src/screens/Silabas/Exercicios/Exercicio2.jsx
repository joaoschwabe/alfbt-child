import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import Menu from "../../../components/Menu";
import estilos from "../../../globas/styles/index";
import imagem from "../../../components/assets/silabas/images/exerc2.png";

import { printAsync } from "expo-print";

import html from "../../../components/assets/silabas/html/exerc2";

export default function SilabaExercicio2() {
    const imprimir = async () => {
        await printAsync({ html: html });
    };
    return (
        <ScrollView style={styles.container}>
            <Menu>Silabas: Exercicio 2</Menu>
            <View style={styles.view}>
                <Image style={styles.img} source={imagem} />
                <TouchableOpacity style={styles.btn} onPress={imprimir}>
                    <Text style={styles.txt}>Imprimir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    view: {
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.6,
        resizeMode: "contain",
        paddingTop: 20,
        margin: 0,
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: estilos.colors.primary,
        borderRadius: 20,
        width: 180,
        height: 50,
    },
    txt: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 24,
        fontFamily: estilos.fonts.title,
    },
});
