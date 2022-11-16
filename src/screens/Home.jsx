import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Menu from "../components/Menu";
import CardG from "../components/CardG";
import CardP from "../components/CardP";

function Home() {
    return (
        <SafeAreaView style={styles.view}>
            <ScrollView>
                <Menu isHome>Home</Menu>
                <CardG
                    tela={"Atividades Complementares"}
                    img={require("../components/assets/cojura.png")}
                >
                    {"Atividades\nComplementares"}
                </CardG>
                <View style={styles.carP}>
                    <CardP tela={"Alfabeto"}>Alfabeto</CardP>
                    <CardP tela={"Silabas"}>Sílabas</CardP>
                    <CardG tela={"Lendo textinhos"}>Lendo textinhos</CardG>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF",
        flex: 1,
    },
    carP: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});

export default Home;
