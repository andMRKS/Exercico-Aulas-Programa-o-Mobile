import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const nomes = ['Ninja 300', 'ZX-6R', 'CBR 600F', 'Bandit 650', 'R1', 'GSX-R750'];
  const cursos = ['Esportiva leve', 'Supersport', 'Sport touring', 'Naked', 'Superbike', 'Supersport'];
  const periodos = ['300cc', '636cc', '600cc', '650cc', '1000cc', '750cc'];

  const fotos = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTaOz-ZNREIjwaPkRKGmGJrI_1Qdg6NbtzA&s',
    'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202303/20230319/kawasaki-ninja-zx6r-636-abs-WMIMAGEM15265467371.jpg', 
    'https://i.ytimg.com/vi/DbR1ci8ZIFk/sddefault.jpg', 
    'https://www.motonline.com.br/noticia/wp-content/uploads/2021/01/Bandit-650.jpg', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRigu33C80LtH53bD6-bmE-BadZIcvqhhMw&s', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tk1S3CunCm8EtKlJoZ_qzT4xrH2zC_B1-A&s', 
  ];

  let lista = [];

  for (let i = 0; i < nomes.length; i++) {
    lista.push(
      <View style={styles.card} key={i}>
        <View style={styles.areaImagem}>
          {fotos[i] !== '' ? (
            <Image source={{ uri: fotos[i] }} style={styles.imagemItem} />
          ) : (
            <View style={styles.imagemVazia} />
          )}
        </View>

        <View style={styles.areaTexto}>
          <Text style={styles.linhaTexto}>
            Nome: <Text style={styles.nomeDestaque}>{nomes[i]}</Text>
          </Text>

          <Text style={styles.linhaTexto}>
            Classe: <Text style={styles.infoDestaque}>{cursos[i]}</Text>
          </Text>

          <Text style={styles.linhaTexto}>
            Cilindrada: <Text style={styles.infoDestaque}>{periodos[i]}</Text>
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>MINHAS MOTOS FAVORITAS</Text>

        <Image
          source={{ uri: 'https://4d74a63d18.cbaul-cdnwnd.com/5fa24cd36434047cd92987bae962152b/200000319-653a266341/hunter.jpg' }}
          style={styles.logo}
        />

        <Text style={styles.subtitulo}>(NÃO TEM ORDEM!)</Text>
      </View>

      <ScrollView style={styles.corpo}>
        {lista}
      </ScrollView>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>André Roberto Marques</Text>
        <Text style={styles.rodapeTexto}>19/04/2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    padding: 10,
  },

  topo: {
    backgroundColor: 'orange',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  logo: {
    width: 130,
    height: 80,
    borderRadius: 15,
    marginBottom: 8,
  },

  subtitulo: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
  },

  corpo: {
    backgroundColor: 'lightgreen',
  },

  card: {
    flexDirection: 'row',
    minHeight: 92,
    borderBottomWidth: 4,
    borderBottomColor: '#f2f2f2',
    padding: 8,
    alignItems: 'center',
  },

  areaImagem: {
    marginRight: 10,
  },

  imagemVazia: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: 'transparent',
  },

  imagemItem: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#444',
  },

  areaTexto: {
    flex: 1,
  },

  linhaTexto: {
    fontSize: 18,
    color: '#000',
    marginBottom: 2,
  },

  nomeDestaque: {
    fontWeight: 'bold',
    fontSize: 22,
  },

  infoDestaque: {
    fontWeight: 'bold',
  },

  rodape: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 35,
  },

  rodapeTexto: {
    color: 'yellow',
    fontSize: 16,
  },
});