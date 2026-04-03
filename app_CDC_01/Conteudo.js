import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {estilos} from './assets/estilo';
import Item from './Item';

function Conteudo(){
  let itemConteudo = null;
  let ArrayPaises = ['Brasil', 'Portugal', 'Angola', 'EUA', 'China', 'India',
    'Alemanha', 'Mexico', 'Japão', 'Australia']
  
  let ArrayCoresFundo = ['green', 'red', 'brown', 'blue', 'purple', 'orange', 'yellow', 'pink', 'cyan', 'magenta']

  let ArrayCoresFonte = ['white', 'black', 'gray', 'white', 'black', 'gray', 'white', 'black', 'gray', 'white']

  for (let i=0; i<ArrayPaises.length; i++){
    itemConteudo = (
      <>
      {itemConteudo}
      <Item nomePais={ArrayPaises[i]}
            corFundo={ArrayCoresFundo[i]}
            corFonte={ArrayCoresFonte[i]} />
  </>
    )
  }
    return(
        <ScrollView style={estilos.corpo}>
          {itemConteudo}
        </ScrollView>
    );
}

export default Conteudo;
