import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { estilos } from './estilos';

const personagens = [
  { nome: 'Naruto', uri: 'https://static.wikia.nocookie.net/naruto/images/3/33/Naruto_Uzumaki_%28Parte_I_-_HD%29.png/revision/latest/scale-to-width/360?cb=20160316113315&path-prefix=pt-br' }, // Substitua pelas URIs reais
  { nome: 'Goku', uri: 'https://easydrawingguides.com/wp-content/uploads/2023/08/Low-Res-Goku_goku-drawing-tutorial.png' },
  { nome: 'Akuma', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHQWXj_PZiOGPDYmpHXv6dJ766oRcRHsaFw&s' }
];

export default function Conteudo() {
  const [indice, setIndice] = useState(0);
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Sorteia um personagem ao abrir o app
  useEffect(() => {
    proximoPersonagem();
  }, []);

  const proximoPersonagem = () => {
    const novoIndice = Math.floor(Math.random() * personagens.length);
    setIndice(novoIndice);
    setPalpite('');
    setMensagem('');
  };

  const verificarAcerto = () => {
    if (palpite.trim().toLowerCase() === personagens[indice].nome.toLowerCase()) {
      setMensagem('✅ Acertou!');
    } else {
      setMensagem('❌ Tente novamente!');
    }
  };

  return (
    <View style={estilos.conteudo}>
      <Image source={{ uri: personagens[indice].uri }} style={estilos.imagem} />
      
      <TextInput
        style={estilos.input}
        placeholder="Digite o nome..."
        value={palpite}
        onChangeText={setPalpite}
      />

      <View style={estilos.botoesContainer}>
        <Button title="Verificar" onPress={verificarAcerto} color="#4CAF50" />
        <Button title="Próximo" onPress={proximoPersonagem} />
      </View>

      <Text style={[estilos.feedback, { color: mensagem.includes('✅') ? 'green' : 'red' }]}>
        {mensagem}
      </Text>
    </View>
  );
}