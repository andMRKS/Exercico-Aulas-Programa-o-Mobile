import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView }
  from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor: 'powderblue', flex: 1,
    paddingTop: 25, paddingHorizontal: 10
  },
  cabecalho: {
    backgroundColor: 'white', height: "15%",
    paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20,
    justifyContent: 'space-between', alignItems: 'center'
  },
  corpo: {
    backgroundColor: 'white', height: '75%'
  },
  itemCorpo: {
    backgroundColor: 'lightgreen', marginTop: 15, borderRadius: 20,
    marginHorizontal: 10, height: 70, borderLeftWidth: 3, borderColor: 'yellow',
  },
  rodape: {
    backgroundColor: 'lightgray', height: '10%', alignItems: 'center'
  }
});

function App() {
  let cabImg1 = 'https://cdn-icons-png.flaticon.com/128/3135/3135768.png';
  let cabImg2 = 'https://cdn-icons-png.flaticon.com/128/738/738497.png';
  let itens = [];
for (let i = 0; i < 8; i++) {
  itens.push(<View key={i} style={estilos.itemCorpo}>
    <Text style={{color: 'black', padding: 15}}> Item do Loop: {i + 1}
      </Text>
      </View>);
}
  
  return (


    <View id='View01' style={estilos.fundo}>
      <View id='View02' style={estilos.cabecalho}>
        <View id='View05' style={{
          backgroundColor: 'white',
          flexDirection: 'row', alignItems: 'center'
        }}>
          <Image source={{ uri: cabImg1}}
            style={{ width: 50, height: 50}} />
          <Text style={{ paddingLeft: 15}} >Andre Marques</Text>
          </View>
          <Image source={{ uri: cabImg2 }}
            style={{width: 18, height: 24, resizeMode: 'contain'}} />
      </View>

      <ScrollView id='View03' style={estilos.corpo}>
        {itens}
      </ScrollView>
      <View id='View04' style={estilos.rodape} >
        <Text style={{ color: 'black' }} >Curitiba, 26/03/2026</Text>
      </View>
    </View>
  );
}
export default App;