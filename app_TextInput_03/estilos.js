import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cabecalho: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    align_items: 'center',
    paddingTop: 20,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  conteudo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  botoesContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  feedback: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  rodape: {
    height: 50,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoRodape: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
  }
});