import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Formulario from './components/Formulario';

const initialNotes = [
  {
    id: "1",
    nombres: "Juan",
    asignatura: "Matemáticas",
    momento1: "4.5",
    momento2: "3.5",
    momento3: "4.0",
    definitiva: "4.0",
    observacion: "El estudiante ganó",
  },
  {
    id: "2",
    nombres: "María",
    asignatura: "Ciencias",
    momento1: "3.0",
    momento2: "3.5",
    momento3: "3.8",
    definitiva: "3.4",
    observacion: "El estudiante habilita",
  },
  // Agrega más notas si es necesario
];

const App = () => {
  // Define el estado dentro del componente App
  const [tusNotas, setTusNotas] = useState(initialNotes);

  const guardarNota = (nota) => {
    // Lógica para guardar la nota en la aplicación
    console.log('Nota guardada:', nota);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.appTitle}>Aplicativo Notas</Text>
        {/* Coloca el componente Formulario aquí, después de definir tusNotas */}
        <Formulario guardarNota={guardarNota} tusNotas={tusNotas}/>
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
