import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './estilos';

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.textoRodape}>André Roberto          09/04/2026</Text>
    </View>
  );
}