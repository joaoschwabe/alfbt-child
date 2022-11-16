import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import global from "../globas/styles/index";

function cardP(props) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={props.tela ? () => navigation.navigate(props.tela) : null}
            style={estilo.view}
        >
            <Text style={estilo.texto}>{props.children}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    view: {
        marginTop: 20,
        backgroundColor: global.colors.secondary,
        width: "42.5%",
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginLeft: "5%",
        overflow: "hidden",
    },
    texto: {
        color: global.colors.text,
        fontFamily: global.fonts.title,
        fontSize: 22,
        textAlign: "center",
    },
});

export default cardP;
