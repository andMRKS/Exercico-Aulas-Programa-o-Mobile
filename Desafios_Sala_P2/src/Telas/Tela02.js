import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { estilos } from '../styleSheet/estilos';

function Tela02({ navigation }) {

    let img = require('../imagens/venus.png');

    function proximaTela() {
        navigation.navigate('Tela03');
    }

    function voltarTela() {
        navigation.goBack();
    }

    return (

        <View style={estilos.Planeta_fundo}>

            <Text style={estilos.Planeta_titulo}>
                Vênus
            </Text>

            <Image
                source={img}
                style={estilos.Planeta_img}
            />

            <Text style={estilos.Planeta_texto}>
                Vênus é o segundo planeta do Sistema Solar.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • É conhecido como o planeta mais quente.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • Sua atmosfera é composta principalmente por dióxido de carbono.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • A temperatura média ultrapassa 460°C.
            </Text>

            <Text style={estilos.Planeta_texto}>
                • Um dia em Vênus é maior que um ano em Vênus.
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

export default Tela02;