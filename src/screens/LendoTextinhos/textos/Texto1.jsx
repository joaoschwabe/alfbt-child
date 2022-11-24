import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Menu from "../../../components/Menu";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";

import texto1 from "../images/texto1.png";
import { getRealm } from "../../../databases/realm";
import * as share from "expo-sharing";

export default function Texto1() {
    const [concluido, setConcluido] = useState(false);
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    const navigation = useNavigation();
    const atvNome = "lendo textinhos texto 1",
        atvDesc = "A arvore da montanha";

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
        Audio.setIsEnabledAsync(true);
        fetchData();
        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, []);

    const compartilhar = async () => {
        const [pdf] = await Asset.loadAsync(require("../pdfs/texto1.pdf"));
        FileSystem.downloadAsync(
            pdf.uri,
            FileSystem.documentDirectory + atvDesc + ".pdf"
        ).then(({ uri }) => {
            console.log("Finished downloading to ", uri);
            share.shareAsync(uri);
        });
    };

    async function playSound() {
        console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(
            require("../audio/texto1.mp3")
        );
        setSound(sound);

        console.log("Playing Sound");
        await sound.playAsync();
        setIsPlaying(true);
        // await sound.unloadAsync();
    }

    async function stopSound() {
        console.log("Stopping Sound");
        await sound.stopAsync();
        setIsPlaying(false);
    }

    async function pauseSound() {
        console.log("Pausing Sound");
        await sound.pauseAsync();
        setIsPlaying(false);
    }

    return (
        <View style={styles.container}>
            <Menu>A árvore da Montanha</Menu>
            <View style={styles.view}>
                <Image source={texto1} style={styles.img} />

                {
                    isPlaying ? (
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={pauseSound}
                        >
                            <Text style={styles.txt}>Parar</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={playSound}
                        >
                            <Text style={styles.txt}>Ouvir</Text>
                        </TouchableOpacity>
                    )
                    // <Button title="Ouvir" onPress={playSound} />
                }
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
            </View>
        </View>
    );
}

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
