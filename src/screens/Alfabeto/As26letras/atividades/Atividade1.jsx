import { useEffect, useState } from "react";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import uuid from "react-native-uuid";
import * as share from "expo-sharing";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";

import Menu from "../../../../components/Menu";
import estilos from "../../../../globas/styles/index";
import imagem from "../../../../components/assets/alfabeto/images/exerc1.png";
import { getRealm } from "../../../../databases/realm";

// import html from "../../../components/assets/alfabeto/html/exerc1";

const Atividade1_26letras = () => {
    const [permissionResponse, requestPermission] =
        MediaLibrary.usePermissions();
    const [concluido, setConcluido] = useState(false);
    const navigation = useNavigation();

    const atvNome = "Atividade 1 26 Letras",
        atvDesc = "Atividade 1 das 26 Letras";
    albumName = "ALFBT Child 26 Letras Atividade 1";

    async function fetchData() {
        try {
            const realm = await getRealm();
            const atv = realm
                .objects("concluidos")
                .filtered(`nome = "${atvNome}"`);
            if (atv.length > 0) {
                setConcluido(true);
            } else {
                setConcluido(false);
            }
        } catch (error) {
            console.log("janta" + error);
        }
    }

    async function concluir() {
        try {
            const realm = await getRealm();
            await realm.write(async () => {
                await realm.create(
                    "concluidos",
                    {
                        _id: uuid.v4(),
                        nome: atvNome,
                        descricao: atvDesc,
                        data: new Date(),
                        concluido: true,
                    },
                    "modified"
                );
            });
            setConcluido(true);
        } catch (error) {
            console.log(error);
        }
    }

    async function desmarcar() {
        try {
            const realm = await getRealm();
            const atv = realm
                .objects("concluidos")
                .filtered(`nome = "${atvNome}"`);
            realm.write(() => {
                realm.delete(atv);
            });
        } catch (error) {
            console.log(error);
        }
        setConcluido(false);
    }

    useEffect(() => {
        requestPermission();
        fetchData();
    }, []);

    const compartilhar = async () => {
        const [pdf] = await Asset.loadAsync(require("./pdfs/exerc1.pdf"));
        console.log(pdf.localUri);
        console.log(pdf.name);
        FileSystem.downloadAsync(
            pdf.uri,
            FileSystem.documentDirectory + atvDesc + ".pdf"
        ).then(({ uri }) => {
            console.log("Finished downloading to ", uri);
            share.shareAsync(uri);
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Menu>As 26 Letras: Atividade 1</Menu>
            <View style={styles.view}>
                <Image style={styles.img} source={imagem} />
                <TouchableOpacity style={styles.btn} onPress={compartilhar}>
                    <Text style={styles.txt}>Compartilhar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={concluido ? () => desmarcar() : () => concluir()}
                >
                    <Text style={styles.txtConcl}>
                        {concluido
                            ? "Desmarcar como concluido"
                            : "Marcar como concluido"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                        navigation.navigate("camera", {
                            albumName,
                            nome: atvDesc,
                        })
                    }
                >
                    <Text style={styles.txtConcl}>
                        Tirar foto das atividades dos alunos
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontFamily: estilos.fonts.text }}>
                    *As fotos só podem ser visualizadas na galeria
                </Text>
            </View>
        </ScrollView>
    );
};

export default Atividade1_26letras;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    view: {
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.6,
        resizeMode: "contain",
        marginVertical: 20,
        margin: 0,
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: estilos.colors.primary,
        borderRadius: 20,
        width: 250,
        height: 60,
        margin: 10,
    },
    txt: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 22,
        margin: 10,
        fontFamily: estilos.fonts.title,
    },
    txtConcl: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 18,
        fontFamily: estilos.fonts.title,
    },
});
