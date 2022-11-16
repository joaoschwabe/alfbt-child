import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import Menu from "../components/Menu";
import CardG from "../components/CardG";
import CardP from "../components/CardP";

export default FormandoPalavras = () => {
    return (
        <SafeAreaView style={styles.view}>
            <ScrollView>
                <Menu>Formando Palavras</Menu>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF",
        flex: 1,
    },
});
