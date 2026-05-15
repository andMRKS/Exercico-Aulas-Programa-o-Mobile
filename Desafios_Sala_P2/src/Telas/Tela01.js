import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { estilos } from '../styleSheet/estilos';

function Tela01({ navigation }) {

    let img = require('../imagens/mercurio.png');

    function proximaTela() {
        navigation.navigate('Tela02');
    }

    function voltarTela() {
        navigation.goBack();
    }

    return (

        <View style={estilos.Planeta_fundo}>

            <Text style={estilos.Planeta_titulo}>
                Mercúrio
            </Text>

            <Image
                source={img}
                style={estilos.Planeta_img}
            />

            <Text style={estilos.Planeta_texto}>
                Mercúrio é o planeta mais próximo do Sol.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • É o menor planeta do Sistema Solar.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • Um ano em Mercúrio dura apenas 88 dias terrestres.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • Durante o dia, a temperatura pode ultrapassar 400°C.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • À noite, a temperatura pode chegar a -180°C.
            </Text>

            <View style={estilos.Planeta_botoes}>

                <Button
                    title="VOLTAR"
                    onPress={voltarTela}
                />

                <Button
                    title="PROXIMO PLANETA"
                    onPress={proximaTela}
                />

            </View>

        </View>
    );
}

export default Tela01;