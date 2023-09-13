import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../assets/styles/styles";

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
    const nota1 = parseFloat(momento1);
    const nota2 = parseFloat(momento2);
    const nota3 = parseFloat(momento3);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      setObservacion("El número ingresado no es válido");
      return;
    }

    
    // Validar que las notas estén en el rango de 0 a 5
    if (
      nota1 < 0 ||
      nota1 > 5 ||
      nota2 < 0 ||
      nota2 > 5 ||
      nota3 < 0 ||
      nota3 > 5
    ) {
      setObservacion("Solo puedes ingresar notas de 0 a 5");
      return;
    }

    const notaDefinitiva = (nota1 * 0.3 + nota2 * 0.35 + nota3 * 0.35).toFixed(
      2
    );
    setDefinitiva(notaDefinitiva);

    let observacionTexto = "";

    if (notaDefinitiva >= 3) {
      //Mensajes de acuerdo a nota del estudiante
      observacionTexto = "El estudiante ganó";
    } else if (notaDefinitiva > 2 && notaDefinitiva <= 2.9) {
      observacionTexto = "El estudiante habilita";
    } else {
      observacionTexto = "El estudiante pierde";
    }
    setObservacion(observacionTexto);
  };

  const buscarNota = () => {
    // buscar en  arreglo de notas y actualizar los resultados en resultadosBusqueda

    // Ejemplo de búsqueda por identificación :
    const resultado = tusNotas.filter((nota) => nota.id === id);
    console.log(resultado);
    // Actualiza los resultados de búsqueda
    setResultadosBusqueda(resultado);

    setId(resultado[0].id);
    setNombres(resultado[0].nombres);
    setAsignatura(resultado[0].asignatura);
    setMomento1(resultado[0].momento1);
    setMomento2(resultado[0].momento2);
    setMomento3(resultado[0].momento3);
    setDefinitiva(resultado[0].definitiva);
    setObservacion(resultado[0].observacion);
  };
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

     // Verificar si ya existe una nota con la misma identificación y asignatura
  const notaExistente = tusNotas.find(
    (nota) => nota.id === id && nota.asignatura === asignatura
  );

  if (notaExistente) {
    setObservacion("Ya existe una nota para esta identificación y asignatura.");
    return;
  }

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
        onChangeText={(text) => setId(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Nombres:</Text>
      <TextInput
        value={nombres}
        onChangeText={(text) => setNombres(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Asignatura:</Text>
      <TextInput
        value={asignatura}
        onChangeText={(text) => setAsignatura(text)}
        style={styles.input}
      />

      {/* Nota 1, Nota 2 y Nota 3 en una sola línea */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 1, marginRight: 5 }}>
          <Text style={styles.label}>Nota 1:</Text>
          <TextInput
            value={momento1}
            onChangeText={(text) => setMomento1(text)}
            style={styles.input}
          />
        </View>
        <View style={{ flex: 1, marginRight: 5 }}>
          <Text style={styles.label}>Nota 2:</Text>
          <TextInput
            value={momento2}
            onChangeText={(text) => setMomento2(text)}
            style={styles.input}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Nota 3:</Text>
          <TextInput
            value={momento3}
            onChangeText={(text) => setMomento3(text)}
            style={styles.input}
          />
        </View>
      </View>

      <Text style={styles.label}>Definitiva</Text>
      <TextInput
        value={definitiva}
        onChangeText={(text) => setDefinitiva(text)}
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

      {/* Primer par de botones centrado verticalmente */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Button title="Calcular" onPress={calcularDefinitiva} />
        <Button
          title="Guardar Nota"
          onPress={guardarNotaHandler}
          style={styles.guardarButton}
        />
      </View>

      {/* Segundo par de botones centrado verticalmente */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Button
          title="Limpiar"
          onPress={limpiarCampos}
          style={styles.limpiarButton}
        />
        <Button
          title="Buscar"
          onPress={buscarNota}
          style={styles.buscarButton}
        />
      </View>

      {/* Mostrar mensajes de error o éxito */}
      {observacion && (
        <Text
          style={
            styles[
              observacion === "El estudiante ganó" ? "successText" : "errorText"
            ]
          }
        >
          {observacion}
        </Text>
      )}
    </View>
  );
};

export default Formulario;
