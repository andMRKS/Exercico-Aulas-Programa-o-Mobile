import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {estilos} from "./estilo";

function CxTx({ 
  placeholder, 
  keyboardType, 
  maxLength, 
  autoCapitalize, 
  editable, 
  secureTextEntry, 
  multiline,
  isObs
}) {
  return (
    <View style={isObs ? estilos.conteudoObs : estilos.conteudo}>
      <TextInput
        style={isObs ? estilos.observacoes : estilos.entradaTexto}
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        editable={editable !== undefined ? editable : true} 
        secureTextEntry={secureTextEntry}
        multiline={multiline}
      />
    </View>
  );
}

function App(){
  

  return(
    <View style={estilos.fundo}>
      
      <View style={estilos.cabecalho}>
        <Text style={estilos.cabSubTitulo}> Aula 06 - Desafio 02 </Text>
        <Text style={estilos.cabTexto}> Componente TextInput </Text>
      </View>
      
      <View style={estilos.conteudo}>
        <Text style={estilos.paragrafo}> Verifique o Formulário Abaixo: </Text>
      </View>

      <CxTx /* Nome */
        placeholder='Digite seu Nome'
        maxLength={30}
        autoCapitalize="characters"
      />

      <CxTx /* Idade */
        placeholder='Qual sua Idade?'
        keyboardType='number-pad'
        maxLength={2}
      />

      <CxTx /* CPF */
        placeholder='CPF: 999.999.999-00'
        keyboardType='number-pad'
        maxLength={14}
        editable={false}
      />

      <CxTx /* E-mail */
        placeholder='Digite seu e-mail'
        keyboardType='email-address'
      />

      <CxTx /* Celular */
        placeholder='Digite seu número de celular'
        keyboardType='number-pad'
      />

      <CxTx /* Obs */
        placeholder='Observações: '
        multiline={true} 
        maxLength={200}
        isObs={true} 
      />

      <CxTx /* Pass */
        placeholder='Digite sua senha:'
        maxLength={5}
        secureTextEntry={true} 
      />
    </View>
  );
}
  export default App;

