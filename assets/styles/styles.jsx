import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formulario: {
    margin: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  guardarButton: {
    backgroundColor: "orange",
    color: "white",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    textAlign: "center"
  },

  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    textAlign: 'center',
  },

  limpiarButton: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10, // Espacio superior para separar el botón "Limpiar" de los demás
  },
  buscarButton: {
    backgroundColor: 'green', // Cambia el color según tu preferencia
    color: 'white',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  successText: {
    color: 'green',
    fontSize: 16,
  },
});

export default styles;
