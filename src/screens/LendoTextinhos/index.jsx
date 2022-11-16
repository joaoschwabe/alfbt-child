import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Menu from "../../components/Menu";
import CardG from "../../components/CardG";
import CardP from "../../components/CardP";

export default LendoTextinhos = () => {
    return (
        <SafeAreaView style={styles.view}>
            <ScrollView>
                <Menu>Lendo Textinhos</Menu>
                <CardG>A árvore da montanha</CardG>
                <CardG>No campo do Joaquim</CardG>
                <CardG>A galinha melada</CardG>
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
