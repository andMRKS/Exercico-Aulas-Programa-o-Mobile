import { StyleSheet } from 'react-native';

export const estilos1 = StyleSheet.create({
  // Estilo do container principal (fundo)
  fundo: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Cinza azulado bem claro
    paddingTop: 20,
  },

  // Estilo usado tanto no Título principal quanto no container do Cabeçalho da Seção
  cabecalho: {
    backgroundColor: '#34495E', // Azul escuro profissional
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  // Texto dentro do cabeçalho da seção (o nome do curso)
  cabTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ECF0F1', // Branco gelo
    letterSpacing: 1,
  },

  // Estilo de cada linha/aluno (o botão clicável)
  item: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginVertical: 1, // Cria uma linha divisória fina entre os itens
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Texto do nome do aluno
  nome: {
    fontSize: 16,
    color: '#2C3E50',
    fontWeight: '500',
  },
});