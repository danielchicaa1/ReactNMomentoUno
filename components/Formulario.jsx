import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../assets/styles/styles"; // Asegúrate de importar los estilos correctamente

const Formulario = ({ guardarNota, tusNotas }) => {
  const [id, setId] = useState("");
  const [nombres, setNombres] = useState("");
  const [asignatura, setAsignatura] = useState("");
  const [momento1, setMomento1] = useState("");
  const [momento2, setMomento2] = useState("");
  const [momento3, setMomento3] = useState("");
  const [definitiva, setDefinitiva] = useState("");
  const [observacion, setObservacion] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState(null); // Nuevo estado

  const calcularDefinitiva = () => {
    let nota1 = parseFloat(momento1);
    let nota2 = parseFloat(momento2);
    let nota3 = parseFloat(momento3);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      setObservacion("El número ingresado no es válido");
      return;
    }

    const notaDefinitiva = (nota1 * 0.3 + nota2 * 0.35 + nota3 * 0.35).toFixed(2);
    setDefinitiva(notaDefinitiva);

    let observacionTexto = "";

    if (notaDefinitiva >= 3) {
      observacionTexto = "El estudiante ganó";
    } else if (notaDefinitiva > 2 && notaDefinitiva <= 2.9) {
      observacionTexto = "El estudiante habilita";
    } else {
      observacionTexto = "El estudiante pierde";
    }
    setObservacion(observacionTexto);
  };

  const buscarNota = () => {
    // Lógica para buscar la información en función de la identificación o asignatura
    // Debes implementar esta lógica según tus requisitos
    // Puedes buscar en tu arreglo de notas y actualizar los resultados en resultadosBusqueda

    // Ejemplo de búsqueda por identificación (debes adaptarlo a tus necesidades):
    const resultado = tusNotas.filter((nota) => nota.id === id);
    
    // Actualiza los resultados de búsqueda
    setResultadosBusqueda(resultado);
  }
  const guardarNotaHandler = () => {
    const nota = {
      id,
      nombres,
      asignatura,
      momento1,
      momento2,
      momento3,
      definitiva,
      observacion,
    };

    guardarNota(nota);

    // Limpiar los campos de entrada después de guardar
    setId("");
    setNombres("");
    setAsignatura("");
    setMomento1("");
    setMomento2("");
    setMomento3("");
  };

  const limpiarCampos = () => {
    setId("");
    setNombres("");
    setAsignatura("");
    setMomento1("");
    setMomento2("");
    setMomento3("");
    setDefinitiva("");
    setObservacion("");
  };

  return (
    <View style={styles.formulario}>
      <Text style={styles.label}>Identificación:</Text>
      <TextInput
        value={id}
        onChangeText={(text)=> setId(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Nombres:</Text>
      <TextInput
        value={nombres}
        onChangeText={(text)=> setNombres(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Asignatura:</Text>
      <TextInput
        value={asignatura}
        onChangeText={(text)=> setAsignatura(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Nota 1:</Text>
      <TextInput
        value={momento1}
        onChangeText={(text)=> setMomento1(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Nota 2:</Text>
      <TextInput
        value={momento2}
        onChangeText={(text)=> setMomento2(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Nota 3:</Text>
      <TextInput
        value={momento3}
        onChangeText={(text)=> setMomento3(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Definitiva</Text>
      <TextInput
        value={definitiva}
        onChangeText={(text)=>setDefinitiva(text)}
        style={styles.input}
        editable={false} // Para que no sea editable
      />

      <Text style={styles.label}>Observaciones:</Text>
      <TextInput
        value={observacion}
        onChangeText={(text) => setObservacion(text)}
        style={styles.input}
        editable={false} // Para que no sea editable
      />

      <Button title="Calcular" onPress={calcularDefinitiva} />

      <View style={{marginVertical:10}} />

      <Button title="Guardar Nota" onPress={guardarNotaHandler} style={styles.guardarButton} />

      <View style={{marginVertical:10}}/>

      <Button title="Limpiar" onPress={limpiarCampos} style={styles.limpiarButton} />

      <View style={{marginVertical:10}}/>

      <Button title="Buscar" onPress={buscarNota} style={styles.buscarButton} />

      {/* Mostrar mensajes de error o éxito */}
      {observacion && <Text style={styles[observacion === 'El estudiante ganó' ? 'successText' : 'errorText']}>{observacion}</Text>}
    </View>
  );
};

export default Formulario;