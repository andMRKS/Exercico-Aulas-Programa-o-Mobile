import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({

    Principal_fundo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000814',
        padding: 20
    },

    Principal_SubTit: {
        fontSize: 28,
        color: '#FFFFFF',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    Principal_img: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20
    },

    Principal_Tit: {
        fontSize: 32,
        color: '#FFD60A',
        fontWeight: 'bold',
        marginBottom: 30
    },

    Principal_SubTit2: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 30
    },

    Planeta_fundo: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    padding: 20
},

Planeta_titulo: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 30
},

Planeta_img: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginBottom: 30
},

Planeta_texto: {
    color: '#FFFFFF',
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'left',
    width: '100%'
},

Planeta_botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40
}

});