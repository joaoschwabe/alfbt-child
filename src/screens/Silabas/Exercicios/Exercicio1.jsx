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
import imagem from "../../../components/assets/silabas/images/exerc1.png"

import { printAsync, printToFileAsync } from "expo-print";

const SilabasExercicio1 = () => {
    const img = require("../../../components/assets/silabas/images/exerc1.png");
    const imprimir = async () => {

        const { uri } = printToFileAsync({
            imagem,
        })

        console.warn("imprimir");
        await printAsync({ uri });
    };

    return (
        <ScrollView style={styles.container}>
            <Menu>Silabas: Exercicio 1</Menu>
            <View style={styles.view}>
                <Image
                    style={styles.img}
                    source={require("../../../components/assets/silabas/images/exerc1.png")}
                />
                <TouchableOpacity style={styles.btn} onPress={imprimir}>
                    <Text style={styles.txt}>Imprimir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SilabasExercicio1;

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
        padding: 0,
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
