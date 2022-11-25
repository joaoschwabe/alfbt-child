import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Menu from "../components/Menu";
import CardG from "../components/CardG";
import CardP from "../components/CardP";
import Video from "../components/Video";

import estilos from "../globas/styles/index";

export default AtvidadesComplementares = () => {
    return (
        <View style={styles.view}>
            <ScrollView>
                <Menu>Atividades Complementares</Menu>
                <Video
                    url={"https://www.youtube.com/watch?v=LA9dW8xXg60"}
                    title={"Jogo Puxa Sílaba - alfabetização lúdica"}
                    imgUrl={
                        "https://i.ytimg.com/vi/LA9dW8xXg60/maxresdefault.jpg"
                    }
                />
                <Video
                    url={"https://youtu.be/lWBIVrz7wx0"}
                    title={
                        "Aprendendo a ler com parlendas (Corre Cutia) - alfabetização 🤓"
                    }
                    imgUrl={"https://i.ytimg.com/vi/lWBIVrz7wx0/mqdefault.jpg"}
                />
                <Video
                    url={"https://youtu.be/eQ_mptGOHW8"}
                    title={
                        "O MELHOR VÍDEO PARA APRENDER A LER | 40 MIN VÍDEO PARA AJUDAR NA ALFABETIZAÇÃO | APRENDER BRINCANDO"
                    }
                    imgUrl={
                        "https://i.ytimg.com/vi/eQ_mptGOHW8/maxresdefault.jpg"
                    }
                />
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
