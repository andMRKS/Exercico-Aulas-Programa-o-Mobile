import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { estilos } from '../styleSheet/estilos';

function Tela03({ navigation }) {

    let img = require('../imagens/marte.png');

    function voltarTela() {
        navigation.goBack();
    }

    function voltarInicio() {
        navigation.navigate('Principal');
    }

    return (

        <View style={estilos.Planeta_fundo}>

            <Text style={estilos.Planeta_titulo}>
                Marte
            </Text>

            <Image
                source={img}
                style={estilos.Planeta_img}
            />

            <Text style={estilos.Planeta_texto}>
                Marte é conhecido como o planeta vermelho.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • Possui grandes montanhas e vulcões gigantes.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • O Monte Olimpo é o maior vulcão do Sistema Solar.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • Marte possui temperaturas extremamente frias.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • Cientistas estudam a possibilidade de vida no planeta.
            </Text>

            <View style={estilos.Planeta_botoes}>

                <Button
                    title="VOLTAR"
                    onPress={voltarTela}
                />

                <Button
                    title="INICIO"
                    onPress={voltarInicio}
                />

            </View>

        </View>
    );
}

export default Tela03;