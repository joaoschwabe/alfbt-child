import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Modal,
    Image,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CamScreen({ route }) {
    const { albumName, nome } = route.params;
    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturatedPhoto, setCapturatedPhoto] = useState(null);
    const [open, setOpen] = useState(false);
    const navigation = useNavigation();

    function toggleCameraType() {
        setType((current) =>
            current === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>Acesso negado!</Text>;
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            camRef.current.pausePreview();
            setCapturatedPhoto(data.uri);
            setOpen(true);
            const assert = await MediaLibrary.createAssetAsync(data.uri);
            await MediaLibrary.createAlbumAsync(albumName, assert);
            await MediaLibrary.getAlbumAsync(albumName);
            camRef.current.resumePreview();
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} type={type} ratio="16:9" ref={camRef}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={{ position: "absolute", bottom: 20, left: 20 }}
                        onPress={toggleCameraType}
                    >
                        <MaterialCommunityIcons
                            name="camera-flip"
                            size={50}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </Camera>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
                <FontAwesome name="camera" size={24} color="white" />
            </TouchableOpacity>
            {capturatedPhoto && (
                <Modal animationType="slide" transparent={false} visible={open}>
                    <View style={styles.modal}>
                        <Image
                            style={styles.image}
                            source={{ uri: capturatedPhoto }}
                        />
                        <TouchableOpacity
                            style={{ margin: 10 }}
                            onPress={() => {
                                setOpen(false);
                                navigation.goBack();
                            }}
                        >
                            <FontAwesome
                                name="window-close"
                                size={50}
                                color="#ff0000"
                            />
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    camera: {
        flex: 1,
        alignSelf: "stretch",
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        borderRadius: 10,
        margin: 20,
        height: 50,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: "white",
    },
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    image: {
        width: "100%",
        height: 600,
        borderRadius: 20,
    },
});
