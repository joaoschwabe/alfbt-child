import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import estilos from "../globas/styles/index";

const CardG = (props) => {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity
                style={estilo.view}
                onPress={props.tela? () => navigation.navigate(props.tela): null}
            >
                <View style={estilo.row}>
                    <Image source={props.img} style={estilo.img} />
                    <Text style={estilo.texto}>{props.children}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};
const estilo = StyleSheet.create({
    view: {
        marginHorizontal: "5%",
        width: "90%",
        borderRadius: 15,
        marginTop: 20,
        backgroundColor: estilos.colors.secondary,
        alignItems: "center",
        justifyContent: "center",
        height: 140,
    },
    texto: {
        color: estilos.colors.text,
        fontSize: 25,
        textAlign: "center",
        fontFamily: estilos.fonts.title,
    },
    img: {
        opacity: 0.2,
    },
    row: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: "row",
    },
});

export default CardG;
