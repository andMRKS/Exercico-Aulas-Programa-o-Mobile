import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { estilos } from '../styleSheet/estilos';

function Principal({ navigation }) {

    let img = require('../imagens/sistSolar.jpg');

    function proximaTela() {
        navigation.navigate('Tela01');
    }

    return (
        <View style={estilos.Principal_fundo}>

            <Text style={estilos.Principal_SubTit}>
                Stack Navigation - parte 2
            </Text>
            <Image source={img} style={estilos.Principal_img} />

            <Text style={estilos.Principal_Tit}>
                SISTEMA SOLAR
            </Text>

            <Button
                title="Iniciar Viagem"
                onPress={proximaTela}
            />

            <Text style={estilos.Principal_SubTit2}>
                DSV MOBILE
            </Text>

        </View>
    );
}

export default Principal;