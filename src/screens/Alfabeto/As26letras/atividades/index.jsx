import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Menu from "../../../../components/Menu";
import CardG from "../../../../components/CardG";
import CardP from "../../../../components/CardP";
import estilos from "../../../../globas/styles/index";

export default Atividades26letras = () => {
    return (
        <SafeAreaView style={styles.view}>
            <ScrollView>
                <Menu>As 26 letras: Atividades</Menu>
                <CardG tela={"Atividade 1 26 Letras"}>Atividade 1</CardG>
                <CardG tela={"Atividade 2 26 Letras"}>Atividade 2</CardG>
                <CardG tela={"Atividade 3 26 Letras"}>Atividade 3</CardG>
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
