import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CardG from "../../components/CardG";
import Menu from "../../components/Menu";

export default Silabas = () => {
    return (
        <SafeAreaView style={styles.view}>
            <ScrollView>
                <Menu>Sílabas</Menu>
                <CardG tela={"silabas exerc 1"}>Exercicio 1</CardG>
                <CardG tela={"silabas exerc 2"}>Exercicio 2</CardG>
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
