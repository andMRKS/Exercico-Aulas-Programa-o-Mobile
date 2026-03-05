//importar a bibliote geral do React
import React from 'react';
//importar os componentes utilizados
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, padding: 50, backgroundColor: "orange", flexDirection: 'column' }}>
      <View style={{ width: 70, height: 70, backgroundColor: 'powderblue' }}>
      </View>
      <View style={{ width: 70, height: 70, backgroundColor: 'skyblue' }}>
      </View>
      <View style={{ width: 70, height: 70, backgroundColor: 'steelblue' }}>
      </View>
    </View>
  );
}

export default App;