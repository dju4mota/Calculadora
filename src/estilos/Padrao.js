import {StyleSheet,  Dimensions} from 'react-native'

export default Styles = StyleSheet.create({
    botao:{
        fontSize: 40,
        height: Dimensions.get('window').width /4 ,
        width: Dimensions.get('window').width /4 ,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
       // alignItems: 'center',
        justifyContent: 'center',
      },
    botoes:{
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue:{
        fontSize: 60,
        color: '#fff',

    },
    opertionButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width /4) *2,        
    },
    buttonTriple: {
        width: (Dimensions.get('window').width /4) *3,        
    }


  });
  