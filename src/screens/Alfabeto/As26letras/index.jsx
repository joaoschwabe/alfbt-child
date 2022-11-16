import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Botao from "../../../components/Botao";
import Menu from "../../../components/Menu";
import Titulo from "../../../components/Titulo";
import estilos from "../../../globas/styles";

const As26Letras = () => {
    return (
        <SafeAreaView style={styles.view}>
            <ScrollView>
                <Menu>As 26 Letras</Menu>
                <Text style={styles.txt}>
                    A alfabetização requer a apresentação das 26 letras do
                    alfabeto, assim, é preciso achar formas que prendam a
                    atenção dos alunos pelo maior tempo possível. Levando em
                    consideração que os alunos estão em uma faixa etária de 6 a
                    7 anos, recomenda-se que o professor mostre vídeos do
                    assunto e também atividades que exijam o uso das 4
                    habilidades principais: Auditivo, cinestésica, leitura e
                    escrita.
                </Text>
                <Titulo>Vídeos e Atividades para serem usados:</Titulo>
                <Botao color={"#FFC3CE"} tela={"Video 26 Letras"}>
                    Videos
                </Botao>
                <Botao color={"#FFE1B1"} tela={"Atividades 26 Letras"}>
                    Atividades
                </Botao>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF",
        flex: 1,
    },
    txt: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: estilos.fonts.text,
        paddingVertical: 20,
        lineHeight: 24,
        paddingHorizontal: 32,
    },
});
export default As26Letras;
