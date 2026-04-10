import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {estilos} from "./estilo";

function Conteudo(){
  const [enunciado, setEnunciado] = useState("Clique no botão para trocar a cor do fundo da tela!");
  const [descricao, setDescricao] = useState("");
  const [corFundo, setCorFundo] = useState("white");


function alteraState(){
  if (corFundo == 'white'){
    setEnunciado("A cor do fundo do Componente Conteúdo foi trocada para cinza. Clique novamente para voltar ao estado inicial");
    setDescricao("Texto inserido em tempo real");
    setCorFundo('gray');
  } else{
    setEnunciado("Clique no botão para trocar a cor do fundo da tela!");
    setDescricao("");
    setCorFundo('white');
  }
};

  return(
    <View style={[estilos.conteudo, {backgroundColor: corFundo}]}>
        <Text style={estilos.titulo}> UseState </Text>
        <Text> Enunciado </Text>
        <TouchableHighlight
          onPress={alteraState}
          style={{backgroundColor: 'darkred', padding: 20, borderRadius: 25}}
        >
          <Text style={{color:'white', fontWeight: 'bold'}}> Clique Aqui! </Text>
        </TouchableHighlight>
        <Text>{descricao}</Text>
    </View>
  );
}
  export default Conteudo;

