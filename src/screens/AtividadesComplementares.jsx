import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Menu from "../components/Menu";
import CardG from "../components/CardG";
import CardP from "../components/CardP";

import estilos from "../globas/styles/index";

export default AtvidadesComplementares = () => {
    return (
        <View style={styles.view}>
            <ScrollView>
                <Menu>Atividades Complementares</Menu>
                <CardG>Atividade 1</CardG>
                <CardG>Atividade 2</CardG>
                <CardG>Atividade 3</CardG>
                <CardG>Atividade 4</CardG>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    view: {
        backgroundColor: estilos.colors.background,
        flex: 1,
    },
});
