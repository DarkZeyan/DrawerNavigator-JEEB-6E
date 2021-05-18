import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styleNavigation from '../styles/styleNav';

function homeScreen() {
    return (
        <View style={styleNavigation.homeContainer}>
            <View style={styleNavigation.headerContainer}>
                <Text style={styleNavigation.headerText}>Pantalla de Inicio</Text>
            </View>
            <View style={{ flex: 9 }}>
                <View style={{ justifyContent: 'center', alignContent: 'space-around' }}>
                    <Image style={styleNavigation.homeImageContainer} source={require('../assets/nekopara.jpg')} />
                    <Text style={styleNavigation.homeText}>Arrastra hacia la izquierda para ver las demas nekos owo</Text>
                </View>
            </View>
        </View>
    );
}

function chocovaniScreen() {
    return (
        <View style={styleNavigation.chocovaniContainer}>
            <View style={styleNavigation.headerContainer}>
                <Text style={styleNavigation.headerText}>Chocola y Vanilla</Text>
            </View>
            <View style={{ flex: 9, justifyContent: 'center', alignContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', margin: 15, }}>
                    <Image style={styleNavigation.nekoImg} source={require('../assets/chocola.png')} />
                    <View style={styleNavigation.textContainer}>
                        <Text style={styleNavigation.textProperties}>
                            Chocola es una gata alegre y sencilla con una personalidad de perro que siente mucho cariño por su amo.
                            Ella es la hermana gemela de Vanilla y la más joven entre las gatas Minaduki.
                            No es buena para lidiar con cosas complicadas, pero siempre es amigable y enérgica.
                            Tiende a entrar en acción antes de pensar completamente en las cosas. A pesar de sus torpes momentos,
                            su actitud ambiciosa se gana el amor de todos los que la rodean.
            </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 15 }}>
                    <Image style={styleNavigation.nekoImg} source={require('../assets/vanilla.png')} />
                    <View style={styleNavigation.textContainer}>
                        <Text style={styleNavigation.textProperties}>
                            Vanilla es una gata inteligente y tranquila a la que le encanta Chocola.
                            Ella es la hermana gemela de Chocola y la más joven entre las gatas Minaduki.
                            Vanilla es propensa a ser malinterpretada porque rara vez expresa sus emociones.
                            De hecho, es bastante inteligente y, a menudo, hace algunas percepciones notables.
                            Su agudo ingenio y su actitud de "haré las cosas a mi manera" hacen de su Chocola todo lo contrario.
                            Sin embargo, sigue siendo bondadosa y, bueno, felina.
            </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

function cocoazuScreen() {
    return (
        <View style={styleNavigation.cocoazuContainer}>
            <View style={styleNavigation.headerContainer}>
                <Text style={styleNavigation.headerText}>Coconut y Azuki</Text>
            </View>
            <View style={{ flex: 9, justifyContent: 'center', alignContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', margin: 15 }}>
                    <Image style={styleNavigation.nekoImg} source={require('../assets/coconut.png')} />
                    <View style={styleNavigation.textContainer}>
                        <Text style={styleNavigation.textProperties}>
                            Coconut es una gata alta, fría y glamorosa.
                            A pesar de su estatura, en realidad es la tercera más joven de las gatas Minaduki.
                            Ella tiene un complejo leve por tener una apariencia no muy femenina.
                            Sin embargo, su lealtad a su amo Shigure es mayor que la de cualquier perro y tiene extraordinarias capacidades físicas.
                            Aunque le encanta ayudar a las personas, casi siempre termina fallando debido a sus deficientes habilidades de coordinación.
            </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 15 }}>
                    <Image style={styleNavigation.nekoImg} source={require('../assets/azuki.png')} />
                    <View style={styleNavigation.textContainer}>
                        <Text style={styleNavigation.textProperties}>
                            Azuki es la mayor de las gatas Minaduki.
                            Ella es valiente y tolerante. Azuki nunca oculta su naturaleza.
                            No tiene miedo de expresar lo que piensa, a menudo con algunas palabras groseras.
                            La mayoría de las tareas son una molestia para ella en el mejor de los casos, dejándola con poca motivación para hacer cualquier cosa.
                            Sin embargo, en realidad es bastante capaz y puede hacer casi cualquier cosa si se la pone a trabajar (aparte del trabajo físico).
                            Sin embargo, tiene un complejo sobre el tamaño de su cuerpo. Nunca, nunca menciones "piernas cortas" a su alrededor.
            </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

function cinnamapScreen() {
    return (
        <View style={styleNavigation.cinnamapContainer}>
            <View style={styleNavigation.headerContainer}>
                <Text style={styleNavigation.headerText}>Cinnamon y Maple</Text>
            </View>
            <View style={{ flex: 9, justifyContent: 'center', alignContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', margin: 15 }}>
                    <Image style={styleNavigation.nekoImg} source={require('../assets/cinnamon.png')} />
                    <View style={styleNavigation.textContainer}>
                        <Text style={styleNavigation.textProperties}>
                            Cinnamon es una chica gata relajada, que sonríe constantemente.
                            De hecho, es una niña gata considerada y astuta que a menudo actúa como la madre de otras niñas gato.
                            Es sensible a las cosas eróticas, y no se necesita mucho para excitarla jadeando.
                            Su compañía exige la paciencia de los demás frente a sus ocasionales fantasías masoquistas.
                            También es la más segura de sí misma en términos de tamaño de busto entre las chicas gato.
            </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 15 }}>
                    <Image style={styleNavigation.nekoImg} source={require('../assets/maple.png')} />
                    <View style={styleNavigation.textContainer}>
                        <Text style={styleNavigation.textProperties}>
                            Maple es una gata orgullosa, de pensamiento rápido y, a menudo, arrogante.
                            Le encantan los productos de marcas más recientes y ronronea solo cuando quiere algo de Shigure.
                            Por lo general, habla con franqueza, pero permanece atenta a quienes la rodean.
                            Ella es, como dice el refrán, un gato asustado, siempre encendiendo todas las luces en el camino al baño por la noche.
                            De todas las chicas gato, su lengua es la más sensible a las cosas calientes.
            </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

function devData() {
    return (
        <View style={[styleNavigation.homeContainer, { backgroundColor: '#00BFFF' }]}>
            <View style={styleNavigation.headerContainer}>
                <Text style={styleNavigation.headerText}>Datos</Text>
            </View>
            <View style={{ flex: 9 }}>
                <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Image style={{ width: '60%', height: '60%', alignSelf: 'center' }} source={require('../assets/sticker.png')} />
                </View>
            </View>
        </View>
    );
}

export { homeScreen, chocovaniScreen, cocoazuScreen, cinnamapScreen, devData };