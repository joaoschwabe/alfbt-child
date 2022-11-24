import React, { useState, useEffect, useRef, useCallback } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import BottomSheet, {
    BottomSheetScrollView,
    TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import uuid from "react-native-uuid";

import estilos from "../globas/styles/index";
import Menu from "../components/Menu";
import CardG from "../components/CardG";
import CardP from "../components/CardP";
import { getRealm } from "../databases/realm";
import Titulo from "../components/Titulo";

function Home() {
    const navigation = useNavigation();
    const [atvs, setAtvs] = useState(null);
    const sheetRef = useRef(null);

    async function fetchData() {
        try {
            const realm = await getRealm();
            const atv = realm.objects("concluidos");

            console.log(atv);
            setAtvs(atv);
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [])
    );

    useEffect(() => {
        fetchData();
    }, []);

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
            <BottomSheet
                ref={sheetRef}
                snapPoints={["3%", "35%"]}
                backgroundStyle={styles.background}
                handleIndicatorStyle={{ backgroundColor: estilos.colors.text }}
            >
                <BottomSheetScrollView style={styles.contentContainer}>
                    <Text
                        style={{
                            fontFamily: estilos.fonts.title,
                            fontSize: 17,
                            textAlign: "center",
                        }}
                    >
                        Atividades Concluidas
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            fontFamily: estilos.fonts.text,
                            bottom: 0,
                            fontSize: 12
                        }}
                    >
                        Clique nas atividades para ser redirecionado diretamente
                    </Text>
                    <ScrollView>
                        {atvs?.map((atv) => (
                            <TouchableOpacity
                                key={atv._id}
                                onPress={() => navigation.navigate(atv.nome)}
                            >
                                <Text style={styles.atvs}>{atv.descricao}</Text>
                            </TouchableOpacity>
                        ))}
                        {atvs?.length === 0 ? (
                            <Text style={styles.text}>
                                Nenhuma atividade concluída
                            </Text>
                        ) : null}
                    </ScrollView>
                </BottomSheetScrollView>
            </BottomSheet>
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
    contentContainer: {
        backgroundColor: "#fff",
        padding: 15,
        margin: 10,
        borderRadius: 10,
    },
    background: {
        backgroundColor: "#c4c4c4",
        borderColor: estilos.colors.text,
    },
    atvs: {
        fontFamily: estilos.fonts.text,
        fontSize: 17,
        marginVertical: 5,
    },
});

export default gestureHandlerRootHOC(Home);
