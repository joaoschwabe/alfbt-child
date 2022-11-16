import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import estilos from "../globas/styles/index";

const Menu = (props) => {
    const navigation = useNavigation();
    if (!props.isHome) {
        style = estilo.img;
        return (
            <SafeAreaView style={estilo.menu}>
                <View style={style}>
                    <Ionicons
                        name={"arrow-back"}
                        size={28}
                        color="white"
                        style={estilo.icon1}
                        onPress={() => navigation.goBack()}
                    />
                    <Image
                        source={require("./assets/alfbt.png")}
                        style={estilo.imagem}
                    />
                    <Entypo
                        name={"home"}
                        size={28}
                        color="white"
                        style={estilo.icon2}
                        onPress={() => navigation.navigate("Home")}
                    />
                </View>

                <Text style={estilo.texto}>{props.children}</Text>
            </SafeAreaView>
        );
    } else {
        style = estilo.imgC;
        return (
            <SafeAreaView style={estilo.menu}>
                <View style={style}>
                    <Image
                        source={require("./assets/alfbt.png")}
                        style={estilo.imagem}
                    />
                </View>

                <Text style={estilo.texto}>{props.children}</Text>
            </SafeAreaView>
        );
    }
};
const estilo = StyleSheet.create({
    menu: {
        paddingTop: 10,
        backgroundColor: estilos.colors.primary,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    texto: {
        color: estilos.colors.secondary,
        fontSize: 22,
        paddingLeft: 15,
        paddingBottom: 10,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        fontFamily: estilos.fonts.title,
    },
    img: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imgC: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    imagem: {
        width: 100,
        height: 60,
        resizeMode: "contain",
    },
    icon1: {
        marginVertical: 20,
        marginLeft: 15,
    },
    icon2: {
        marginVertical: 20,
        marginRight: 15,
    },
});

export default Menu;
