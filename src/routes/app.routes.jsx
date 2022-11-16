import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Alfabeto from "../screens/Alfabeto";
import Home from "../screens/Home";
import Silabas from "../screens/Silabas";
import LendoTextinhos from "../screens/LendoTextinhos";
import AtividadesComplementares from "../screens/AtividadesComplementares";
import Videos26letras from "../screens/Alfabeto/As26letras/Video";
import As26Letras from "../screens/Alfabeto/As26letras";
import Atividades26letras from "../screens/Alfabeto/As26letras/atividades";
import SilabasExercicio1 from "../screens/Silabas/Exercicios/Exercicio1";
import SilabaExercicio2 from "../screens/Silabas/Exercicios/Exercicio2";
import Atividade1_26letras from "../screens/Alfabeto/As26letras/atividades/Atividade1";
import Atividade2_26letras from "../screens/Alfabeto/As26letras/atividades/Atividade2";
import Atividade3_26letras from "../screens/Alfabeto/As26letras/atividades/Atividade3";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
    <>
        <StatusBar backgroundColor="#90b1db" translucent={true} />
        <AppStack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: "slide_from_right",
            }}
        >
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Alfabeto" component={Alfabeto} />
            <AppStack.Screen
                name="Lendo textinhos"
                component={LendoTextinhos}
            />
            <AppStack.Screen
                name="Atividades Complementares"
                component={AtividadesComplementares}
            />
            <AppStack.Screen name="As 26 letras" component={As26Letras} />
            <AppStack.Screen
                name="Video 26 Letras"
                component={Videos26letras}
            />
            <AppStack.Screen
                name="Atividades 26 Letras"
                component={Atividades26letras}
            />
            <AppStack.Screen
                name="Atividade 1 26 Letras"
                component={Atividade1_26letras}
            />
            <AppStack.Screen
                name="Atividade 2 26 Letras"
                component={Atividade2_26letras}
            />
            <AppStack.Screen
                name="Atividade 3 26 Letras"
                component={Atividade3_26letras}
            />

            <AppStack.Screen name="Silabas" component={Silabas} />
            <AppStack.Screen
                name="silabas exerc 1"
                component={SilabasExercicio1}
            />
            <AppStack.Screen
                name="silabas exerc 2"
                component={SilabaExercicio2}
            />
        </AppStack.Navigator>
    </>
);

export default AppRoutes;
