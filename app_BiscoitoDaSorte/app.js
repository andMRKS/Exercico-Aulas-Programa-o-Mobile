import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {estilos} from './estilos';

function App() {
  let ArrayFrases = [
    'A persistência é o caminho do êxito.',
'O sucesso não é a chave para a felicidade, a felicidade é a chave para o sucesso.',
'Grandes oportunidades surgem para quem está preparado.',
'A sorte favorece a mente bem treinada.',
'Seu talento será reconhecido e recompensado em breve.',
'Acredite em si próprio e todo o resto virá naturalmente.',
'O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor é agora.',
'A vida é curta, mas as possibilidades são infinitas.',
'Amanhã será um dia de novas e boas surpresas.',
'Siga o seu coração e você nunca se perderá.'];

const [textoBotao, setTextoBotao] = useState('quebrar Biscoito...');
const [imgBiscoito, setImgBiscoito] = useState(require('./BS02_biscoito.png'));
const [textoFrase, setTextoFrase] = useState( 'Quebre para ver uma mensagem legal!');

function alteraStatusBiscoito(){
  let numFrase;
  if (textoBotao == 'Quebrar Biscoito...') {
    numFrase = Math.floor(Math.random() * ArrayFrases.length);
    setTextoFrase(ArrayFrases[numFrase]);
  setTextoBotao('Nova Tentativa');
  setImgBiscoito(require('./BS01_biscoitoAberto.png'));
  }
else {
  setTextoBotao('Quebrar Biscoito...');
  setImgBiscoito(require('./BS02_biscoito.png'));
  setTextoFrase('Quebre para ver uma mensagem legal!');
  }
}
  return (
    <View style={estilos.areaFundo}>
      <View style={estilos.areaTitulo}>
        <Text style={estilos.titulo}>App Biscoito da Sorte</Text>
      </View>
      <View style={estilos.areaImg}>
        <Image source={imgBiscoito}
      style={estilos.img}/>
    </View>
    <View>
      <Text style={estilos.textoFrase}>"{textoFrase}"</Text>
      <TouchableOpacity style={estilos.botao} 
      onPress={alteraStatusBiscoito}>
        <View style={estilos.areaBotao}>
          <Image source={require('./BS03_Btn_icone_01.png')}
          style={{marginRight: 20, width: 40, height: 40}}/>
          <Text style={estilos.textoBotao}>{textoBotao}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
  );  
}

export default App;