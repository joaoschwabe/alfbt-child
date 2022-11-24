import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";

export default function CameraComponent() {
    const [type, setType] = useState(CameraType.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    function toggleCameraType() {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    }

    useEffect(() => {
        requestPermission();

        if (permission?.granted) {
            setHasPermission(true);
        } else {
            setHasPermission(false);
        }
    }, []);

    return (
        <View>
            <Camera
                style={styles.camera}
                type={type}
                ratio="1:1"
                flash={Camera.Constants.FlashMode.on}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={toggleCameraType}
                    >
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        height: 300,
        width: "100%",
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: "white",
    },
});
