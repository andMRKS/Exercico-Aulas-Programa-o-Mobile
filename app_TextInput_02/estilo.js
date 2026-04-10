import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundo:{
        flex:1, padding: '20px', backgroundColor: 'white'
    },
    cabecalho:{
        backgroundColor: 'lightgray', flexDirection:'column', width: '100%',
        borderRadius: '20px', justifyContent: 'center', alignItems: 'center',
        flex:0.38,
    },
    cabTitulo:{
        fontSize: 25, color: 'darkred'
    },
    cabSubTitulo:{
        fontSize: 35, fontWeight: 'bold', paddingTop: 15,
    },
    cabTexto:{
        fontSize:25, paddingTop: 10,    
    },
    conteudo:{
        backgroundColor: 'white', marginBottom: 10,
    },
    paragrafo:{
        marginTop:'10px', padding:'20px', fontSize:'18px',
    },
    entradaTexto:{
        height: 50, width: '80%', borderWidth:1,
        borderColor:'#222', marginHorizontal: '10px',
        fontSize: '20px', padding:'10px'
    },
    conteudoObs:{
        backgroundColor: 'white', marginBottom: 10, height: 80,
    },
    observacoes:{
       height: 400, width: '80%', borderWidth:1,
        borderColor:'#222', marginHorizontal: '10px',
        fontSize: '20px', padding:'10px' 
    },
    saudacao:{
        textAlign:'center', paddingTop: '30%'
    },
});

export {estilos}