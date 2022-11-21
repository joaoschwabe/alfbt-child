import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useEffect, useState } from "react";
import { getRealm } from "../../../../databases/realm";
import { printAsync } from "expo-print";
import uuid from "react-native-uuid";

import Menu from "../../../../components/Menu";
import estilos from "../../../../globas/styles/index";
import imagem from "../../../../components/assets/alfabeto/images/exerc1.png";

// import html from "../../../components/assets/alfabeto/html/exerc1";

const Atividade1_26letras = () => {
    const [concluido, setConcluido] = useState(true);

    const atvNome = "Atividade 1 26 Letras",
        atvDesc = "Atividade 1 de sílabas";

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
        fetchData();
    }, []);

    const imprimir = async () => {
        await printAsync({ html: "<center><h1>nao disponivel</h1></center>" });
    };

    return (
        <ScrollView style={styles.container}>
            <Menu>As 26 Letras: Atividade 1</Menu>
            <View style={styles.view}>
                <Image style={styles.img} source={imagem} />
                <TouchableOpacity style={styles.btn} onPress={imprimir}>
                    <Text style={styles.txt}>Imprimir</Text>
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
            </View>
        </ScrollView>
    );
};

export default Atividade1_26letras;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
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
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: estilos.colors.primary,
        borderRadius: 20,
        width: 180,
        height: 50,
    },
    txt: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 24,
        fontFamily: estilos.fonts.title,
    },
    txtConcl: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 18,
        fontFamily: estilos.fonts.title,
    },
});
