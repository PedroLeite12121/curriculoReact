import { StyleSheet } from "react-native";

export let styles = StyleSheet.create({

    container: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      backgroundColor: '#b8e2f4',
    },  
  
    titulo: {
      marginBottom: '1vh',
      fontSize: '4.3vh',
      fontWeight: 'bolder',
    },
  
    formacoes:{
      fontWeight: 'bold',
      fontSize: '2vh'
    },
  
    elemento:{
      fontWeight: 'bolder',
      fontSize: '3vh',
      marginTop: '2vh'
    },
  
    tarefas:{
      margin: '1vh',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'left',
      gap: '15px', 
      borderRadius: '10px',
      padding: '1.7vh',
      paddingLeft: '4vh',
      paddingRight: '4vh',
      width: '39vw',
    }, 
  
    text:{
       width: '100%',
       fontSize: '2vh',
       margin: '0'
    }
  
    
  });

