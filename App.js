import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Formulario from './components/Formulario';

const App = () => {
  // Define el estado dentro del componente App
  const [tusNotas, setTusNotas] = useState([]);


  const guardarNota = (nota) => {
    // Lógica para guardar la nota en la aplicación
    console.log('Nota guardada:', nota);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.appTitle}>Aplicativo Notas</Text>
        <Formulario guardarNota={guardarNota} tusNotas={tusNotas} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  content: {
    width: '80%', // Ancho del contenido (ajusta según tu preferencia)
  },
  appTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center', // Centra el texto horizontalmente
    color: 'white', // Establece el color del texto
  },
});

export default App;
