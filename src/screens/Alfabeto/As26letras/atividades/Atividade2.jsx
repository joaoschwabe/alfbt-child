import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import Menu from "../../../../components/Menu";
import estilos from "../../../../globas/styles/index";
import imagem from "../../../../components/assets/alfabeto/images/exerc2.png";

import { printAsync } from "expo-print";

// import html from "../../../components/assets/alfabeto/html/exerc1";

const Atividade2_26letras = () => {
    const imprimir = async () => {
        await printAsync({ html: "<center><h1>nao disponivel</h1></center>" });
    };

    return (
        <ScrollView style={styles.container}>
            <Menu>As 26 Letras: Atividade 2</Menu>
            <View style={styles.view}>
                <Image style={styles.img} source={imagem} />
                <TouchableOpacity style={styles.btn} onPress={imprimir}>
                    <Text style={styles.txt}>Imprimir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Atividade2_26letras;

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
        marginVertical: 20,
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
