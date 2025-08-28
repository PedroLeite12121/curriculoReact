import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tarefas}>
          <Text style={styles.titulo}>
            Pedro Henrique Leite Pedreira
          </Text>
          <Text style={styles.elemento}>
            CONTATO
          </Text>
          <Text style={styles.text}>
            E-mail: pedro.pedreira@etec.sp.gov.br
          </Text>
          <Text style={styles.text}>
            Telefone: (11) 91010-1010
          </Text>
          <Text style={styles.text}>
            LinkedIn: linkedin.com/in/PedroLeite
          </Text>
          <Text style={styles.elemento}>
            FORMAÇÃO
          </Text>
           <Text style={styles.text}>
            Ensino Fundamental Completo
          </Text>
          <Text style={styles.text}>
            Cursando Ensino Médio Integrado ao Técnico de Desenvolvimento de Sistemas
          </Text>
          <Text style={styles.elemento}>
            OBJETIVOS
          </Text>
          <Text style={styles.text}>
            Atuar na área de engenharia de software
          </Text>
          <Text style={styles.elemento}>
            EXPERIÊNCIAS PROFISSIONAIS
          </Text>
          <Text style={styles.text}>
            Sem experiência
          </Text>
          <Text style={styles.elemento}>
           HABILIDADES
          </Text>
          <Text style={styles.text}>
            Experiência com: Java, JS, Node, HTML e CSS
          </Text>
          <Text style={styles.text}>
            Conhecimento em modelagem e criação de banco de dados (SQL Server, MYSQL)
          </Text>
          <Text style={styles.text}>
            Rapida adaptação e compreensão de lógicas da programação
          </Text>
      </View>
       
    
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    backgroundColor: '#b8e2f4',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    justifyContent: 'center'
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
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'left',
    gap: '15px', 
    borderRadius: '10px',
    padding: '1.7vh',
    paddingLeft: '4vh',
    paddingRight: '4vh',
    width: '39vw',
    height: '98vh'
  }, 

  text:{
     width: '100%',
     fontSize: '2vh',
     margin: '0'
  }

  
});
