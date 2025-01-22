//creamos la clase pregunta
class Pregunta {
    constructor(pregunta, opciones, respCorrecta) {
      this.pregunta = pregunta;
      this.opciones = opciones;
      this.respCorrecta = respCorrecta;
    }
  
    //validamos la respuesta del usuario aparte de validar la misma independiente si esta escrita en minusculas o sin tilde
    esRespCorrecta(respUsuario) {
      const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return normalize(respUsuario) === normalize(this.respCorrecta);
    }
  }
  
  //creamos la clase cuestionario
  class Cuestionario {
    constructor(preguntas) {
      this.preguntas = preguntas;
    }
  
    //creamos el metodo hacerPreguntas para recorrer las preguntas y validar las respuestas
    hacerPreguntas() {
      this.preguntas.forEach((pregunta) => {
        console.log(pregunta.pregunta);
        let respCorrecta;
  
        // Pedir respuesta hasta que el usuario ingrese algo no vacío
        do {
          respCorrecta = prompt(pregunta.pregunta + "\n" + pregunta.opciones.join(", "));
          if (!respCorrecta) {
            console.log("Por favor, ingresa una respuesta.");
          }
        } while (!respCorrecta); // Si la respuesta está vacía, se repite el ciclo
  
        if (pregunta.esRespCorrecta(respCorrecta)) {
          console.log("¡Correcto!");
        } else {
          console.log(`Incorrecto. La respuesta correcta es ${pregunta.respCorrecta}`);
        }
      });
    }
    // Método para permitir al usuario agregar una nueva pregunta al cuestionario
  agregarPregunta() {
    const preguntaTexto = prompt("Introduce la pregunta:");
    const opcion1 = prompt("Introduce la opción 1:");
    const opcion2 = prompt("Introduce la opción 2:");
    const opcion3 = prompt("Introduce la opción 3:");
    const respuestaCorrecta = prompt("Introduce la respuesta correcta:");

    // Crear una nueva instancia de la clase Pregunta
    const nuevaPregunta = new Pregunta(preguntaTexto, [opcion1, opcion2, opcion3], respuestaCorrecta);

    // Agregar la nueva pregunta al arreglo de preguntas
    this.preguntas.push(nuevaPregunta);

    console.log("¡Pregunta añadida con éxito!");
  }
}
  
//creamos las preguntas
  const preguntas = [
    new Pregunta("¿En que continente se encuentra Chile?", ["Europa", "Asia", "Sudamerica"], "Sudamerica"),
    new Pregunta("¿Cuál es el planeta mas cercano al sol?", ["Mercurio", "Venus", "Tierra"], "Mercurio"),
    new Pregunta("¿Cuanto es 2 + 2?", ["2", "4", "6"], "4"),
    new Pregunta("¿Cual es el pais con mas campeonatos mundiales de futbol?", ["Brasil", "Alemania", "Argentina"], "Brasil"),
    new Pregunta("¿Quien es conocido como el Rey del Pop?", ["Michael Jackson", "Elvis Presley", "Justin Bieber"], "Michael Jackson"),
    new Pregunta("¿Cual es el pais mas grande del mundo?", ["Rusia", "Brasil", "Estados Unidos"], "Rusia"),
    new Pregunta("¿Que animal es conocido como el rey de la selva?", ["Tigre", "Oso", "Leon"], "Leon"),
    new Pregunta("¿Cual es el animal terrestre mas grande del mundo?", ["Jirafa", "Elefante", "Toro"], "Elefante"),
  ];
  
//creamos el objeto cuestionario y llamamos al metodo hacerPreguntas para iniciar el juego
  const cuestionario = new Cuestionario(preguntas);

// Permitir al usuario agregar una pregunta si lo desea
const deseaAgregarPregunta = prompt("¿Quieres agregar una nueva pregunta al cuestionario? (si/no)");

if (deseaAgregarPregunta.toLowerCase() === "si") {
  cuestionario.agregarPregunta();
}
//iniciamos el juego
  cuestionario.hacerPreguntas();
  
    