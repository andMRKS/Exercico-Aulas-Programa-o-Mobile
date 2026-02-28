import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ backgroundColor: '#adff2f', height: '100%', width: '100%' }}>
      
      <View style={{
        backgroundColor: 'red',
        height: '15%',
        width: '80%',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'black',
        marginTop: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
      }}>
        <Text style={{ fontSize: 22, paddingLeft: 10, paddingTop: 5 }}>
          COMPONENTE VIEW
        </Text>
      </View>

      <View style={{
        backgroundColor: 'yellow',
        height: '50%',
        width: '80%',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'black',
        marginTop: 15
      }}>
        <Text style={{ fontSize: 45, paddingLeft: 10 }}>
          CONTEÚDO
        </Text>
      </View>

      <View style={{
        backgroundColor: 'grey',
        height: '15%',
        width: '80%',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'black',
        marginTop: 15,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingLeft: 20,
        paddingTop: 10
      }}>
        <Text style={{ fontSize: 22 }}>{'<SEU NOME>'}</Text>
        <Text style={{ fontSize: 22 }}>{'<dd/mm/aaa>'}</Text>
      </View>

    </View>
  );
}

export default App;