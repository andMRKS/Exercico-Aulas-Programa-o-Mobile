import React from 'react';
import {
    View, Text, SectionList, TouchableOpacity,
    Alert, Platform
} from 'react-native';

import dados_Alunos from './alunos.json';
import { estilos1 } from './estilos';

function App() {

    function mostrarDetalhes(aluno) {

        const mensagem =
            `CPF: ${aluno.cpf}\n` +
            `Nascimento: ${aluno.nascimento}\n` +
            `Ano: ${aluno.ano}`;

        if (Platform.OS === 'web') {
            alert(aluno.nome + '\n\n' + mensagem);
        } else {
            Alert.alert(aluno.nome, mensagem);
        }
    }

    function mostraItem({ item }) {

        return (
            <TouchableOpacity
                style={estilos1.item}
                onPress={() => mostrarDetalhes(item)}
                activeOpacity={0.2}
            >

                <Text style={estilos1.nome}>{item.nome}</Text>

            </TouchableOpacity>
        );
    }
function mostraCabecalhoLista({ section }) {
    return (
        <View style={estilos1.cabecalho}>
            <Text style={estilos1.cabTexto}>{section.title}</Text>
        </View>
    );
}

function extraiId(item) {
    return item.id;
}

return (
    <View style={estilos1.fundo}>
        <Text style={estilos1.cabecalho}>Lista de Alunos por Curso</Text>
        <SectionList
            sections={dados_Alunos}
            keyExtractor={extraiId}
            renderItem={mostraItem}
            renderSectionHeader={mostraCabecalhoLista}
        />
    </View>
);
}

export default App;