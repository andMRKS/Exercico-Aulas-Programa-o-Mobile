import React from 'react';
import { View,Text } from 'react-native';

function App() {
    return (
        <View style={{backgroundColor:'blue', height: '100%', width: 300 }}>
             <View style={{ backgroundColor: 'orange', height: '20%', width: '100%' }}>
                <Text>RESENHA</Text>
                <Text>andre</Text>
                <Text>RESENHA</Text>
            </View>
            <View style={{ backgroundColor: 'yellow', height: '70%', width: 100 }}>
                <Text>meu app seila</Text>
                <Text>andre</Text>
                <Text>Curitiba 20/02/2026</Text>
            </View>
            <View style={{ backgroundColor: 'red', height: '10%', width: 200 }}>    
                <Text>meu app seila</Text>
                <Text>andre</Text>
                <Text>Curitiba 20/02/2026</Text>
            </View>
        </View>
    );
}
export default App;
