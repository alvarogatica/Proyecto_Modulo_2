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
        const respCorrecta = prompt(pregunta.pregunta + "\n" + pregunta.opciones.join(", "));
        if (pregunta.esRespCorrecta(respCorrecta)) {
          console.log("¡Correcto!");
        } else {
          console.log(`Incorrecto. La respuesta correcta es ${pregunta.respCorrecta}`);
        }
      });
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
  cuestionario.hacerPreguntas();
  
    