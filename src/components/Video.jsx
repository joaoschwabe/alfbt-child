import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    StyleSheet,
    Linking,
} from "react-native";

import estilos from "../globas/styles/index";

const Video = ({ url, title, imgUrl }) => {
    let largura = Dimensions.get("window").width;
    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => Linking.openURL(url)}
            >
                <Image
                    style={{
                        width: Dimensions.get("window").width * 0.9,
                        height: Dimensions.get("window").height * 0.2,
                        borderRadius: 10,
                        paddingHorizontal: 10,
                    }}
                    source={{ uri: imgUrl }}
                />
            </TouchableOpacity>
            <Text style={styles.texto}>{title}</Text>
        </View>
    );
};

export default Video;

const styles = StyleSheet.create({
    view: {
        backgroundColor: estilos.colors.background,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width * 0.9,
        borderRadius: 10,
    },
    texto: {
        fontFamily: estilos.fonts.medium,
        textAlign: "center",
        fontSize: 16,
        marginTop: 10,
    },
});
