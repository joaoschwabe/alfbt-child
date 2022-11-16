import { ScrollView, StyleSheet } from "react-native";
import Menu from "../../../../components/Menu";
import Video from "../../../../components/Video";

const Videos26letras = () => {
    return (
        <ScrollView style={styles.view}>
            <Menu>As 26 Letras: Videos</Menu>
            <Video
                url={"https://youtu.be/we3Tq2ciMnE"}
                imgUrl={"https://i.ytimg.com/vi/we3Tq2ciMnE/mqdefault.jpg"}
                title={
                    "Apresentando o alfabeto (Educação Infantil e 1° ano - remoto/ híbrido)"
                }
            />
            <Video
                url={"https://youtu.be/YTAnjjaeVzU"}
                imgUrl={"https://i.ytimg.com/vi/YTAnjjaeVzU/maxresdefault.jpg"}
                title={"Mundo Bita - Alfabita"}
            />
            <Video
                url={"https://youtu.be/gEaERQlOiAY"}
                imgUrl={"https://i.ytimg.com/vi/gEaERQlOiAY/maxresdefault.jpg"}
                title={
                    "Aprenda o Alfabeto Cantando A🐝B⚽️C🏠 a Musica do Alfabeto"
                }
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF",
        flex: 1,
    },
});

export default Videos26letras;
