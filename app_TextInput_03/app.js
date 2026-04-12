import React from 'react';
import { View } from 'react-native';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Rodape from './Rodape';
import { estilos } from './estilos';

export default function App() {
  return (
    <View style={estilos.container}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}