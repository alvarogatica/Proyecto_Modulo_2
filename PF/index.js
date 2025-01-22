// Paso 1: Definir el array con preguntas y respuestas ademas de la respuesta correcta
const preguntas = [
    {
      pregunta: "¿En que disciplina deportiva juega Leo Messi?",
      opciones: ["Futbol", "Tenis", "Ping Pong"],
      respuestaCorrecta: "Futbol"
    },
    {
      pregunta: "¿Quien es el presidente actual de Chile (2025)?",
      opciones: ["Gabriel Boric", "Maite Orsini", "Sebastian Piñera"],
      respuestaCorrecta: "Gabriel Boric"
    },
    {
      pregunta: "¿Nombra una figura geometrica con 4 lados?",
      opciones: ["Rombo", "Triangulo", "Cuadrado"],
      respuestaCorrecta: "Cuadrado"
    },
    {
      pregunta: "¿Donde se encuentra la famosa Torre de Pisa?",
      opciones: ["Milán", "Roma", "Pisa"],
      respuestaCorrecta: "Pisa"
    },
    {
      pregunta: "¿A cuantos grados celsius hierve el agua?",
      opciones: ["100", "95", "400"],
      respuestaCorrecta: "100"
    },
    {
      pregunta: "¿Cual es el oceano mas grande del mundo?",
      opciones: ["Pacifico", "Atlantico", "Indico"],
      respuestaCorrecta: "Pacifico"
    },
    {
      pregunta: "¿Quien es el maximo goleador en la historia del futbol?",
      opciones: ["Cristiano Ronaldo", "Lionel Messi", "Pele"],
      respuestaCorrecta: "Cristiano Ronaldo"
    },
    {
      pregunta: "¿Cuanto es 4 + 4?",
      opciones: ["8", "12", "14"],
      respuestaCorrecta: "8"
    }
  ];
  
  // Función para normalizar o aceptar las respuestas del usuario independiente si lo escriben con minusculas o sin tilde
  function normalizarRespuesta(respuesta) {
    return respuesta
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  
  // Paso 2: Crear la función que comprueba si la respuesta es correcta
  function esRespCorrecta(pregunta, respuesta) {
    return normalizarRespuesta(respuesta) === normalizarRespuesta(pregunta.respuestaCorrecta);
  }
  
  // Paso 3: Definir la función que recibe la respuesta del usuario por medio de un prompt y genera un bucle para no avanzar mientras no reciba respuesta (o este vacio)
  function recibirRespuestaUsuario(pregunta) {
    let respuesta = "";
    do {
      respuesta = prompt(pregunta.pregunta + "\n" + pregunta.opciones.join(", "));
      if (!respuesta) {
        console.log("Por favor, ingresa una respuesta válida.");
      }
    } while (!respuesta); // Se repite hasta que la respuesta no esté vacía
    return respuesta;
  }
  
  // Paso 4: Crear la función preguntar
  function preguntar(pregunta) {
    console.log(pregunta.pregunta);
    const respuestaUsuario = recibirRespuestaUsuario(pregunta); 
    if (esRespCorrecta(pregunta, respuestaUsuario)) {
      console.log("¡Correcto!");
    } else {
      console.log("Incorrecto. La respuesta correcta es " + pregunta.respuestaCorrecta);
    }
  }
  // Paso 5: Crear un método para agregar nuevas preguntas
function agregarPregunta() {
  const preguntaTexto = prompt("Introduce la pregunta:");
  const opcion1 = prompt("Introduce la opción 1:");
  const opcion2 = prompt("Introduce la opción 2:");
  const opcion3 = prompt("Introduce la opción 3:");
  const respuestaCorrecta = prompt("Introduce la respuesta correcta:");

  // Crear una nueva pregunta
  const nuevaPregunta = {
    pregunta: preguntaTexto,
    opciones: [opcion1, opcion2, opcion3],
    respuestaCorrecta: respuestaCorrecta
  };

  // Agregarla al arreglo de preguntas
  preguntas.push(nuevaPregunta);
  console.log("¡Pregunta añadida con éxito!");
}

// Paso 6: Preguntar si el usuario quiere agregar una nueva pregunta
const deseaAgregarPregunta = prompt("¿Quieres agregar una nueva pregunta al cuestionario? (si/no)");

if (deseaAgregarPregunta.toLowerCase() === "si") {
  agregarPregunta();
}
  
  // Paso 7: Utilizar la función preguntar para cada pregunta
  preguntas.forEach((pregunta) => {
    preguntar(pregunta);
  });
  