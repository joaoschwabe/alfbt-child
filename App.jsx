import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import Routes from "./src/routes";

export default App = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_800ExtraBold,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <NavigationContainer styles={styles.view}>
            <Routes />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#fff",
    },
});
