import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Menu from "../../components/Menu";
import CardG from "../../components/CardG";
import CardP from "../../components/CardP";
import estilos from "../../globas/styles/index";

export default Alfabeto = () => {
    return (
        <SafeAreaView style={styles.view}>
            <ScrollView>
                <Menu>Alfabeto</Menu>
                <CardG tela={"As 26 letras"}>As 26 letras</CardG>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: estilos.colors.background,
        flex: 1,
    },
});
