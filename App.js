
import {Text, View } from 'react-native';
import { Titulo } from './src/componentes/titulo/titulo';
import { styles } from './src/componentes/styles/styles';
import { Contato } from './src/componentes/contato/contato';
import { Formacao } from './src/componentes/formacao/formacao';
import { Habilidades } from './src/componentes/habilidades/habilidades';
import { Objetivo } from './src/componentes/objetivos/objetivo';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tarefas}>
          <Titulo></Titulo>
          <Contato></Contato>
          <Formacao></Formacao>
          <Habilidades></Habilidades>
          <Objetivo></Objetivo>
          

      </View>
       
    
    </View>
  );
}


