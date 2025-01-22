# Proyecto_Modulo_2

## Planteamiento del proyecto
#### Construirás un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. El programa debe cumplir con los siguientes requisitos:

  1. Permitir a los usuarios crear encuestas con opciones de respuesta.
  2. Permitir a los usuarios votar en las encuestas.
  3. Mostrar los resultados de las encuestas en tiempo real.
  4. Almacenar los datos de las encuestas y los votos en una variable.
  5. Implementar la solución utilizando programación orientada a objetos (POO) y programación funcional (PF).

## SOLUCION EXPLICADA PASO A PASO (PF)
### 1. El código define un arreglo de objetos llamado ```preguntas```. Cada objeto representa una pregunta de un cuestionario, con las siguientes propiedades:

  * ```pregunta```: Contiene el texto de la pregunta.
  * ```opciones```: Es un arreglo que lista las posibles respuestas para la pregunta.
  * ```respuestaCorrecta```: Es un string que contiene la respuesta correcta a la pregunta.

  ```javascript
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
  ```
### 2. La función ```normalizarRespuesta``` sirve para procesar una cadena de texto (respuesta) y estandarizarla. Esto se hace eliminando acentos y convirtiendo todos los caracteres a minúsculas.
* ```respuesta.toLowerCase()```: Convierte el texto a minúsculas para que no haya diferencia entre mayúsculas y minúsculas.
* ```respuesta.normalize("NFD")```: Descompone los caracteres acentuados en su forma base más los diacríticos.
* ```.replace(/[\u0300-\u036f]/g, "")```: Usa una expresión regular para eliminar los diacríticos generados por la normalización (como acentos, tildes, etc.).

```javascript
function normalizarRespuesta(respuesta) {
    return respuesta
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
```
### 3. La función ```esRespCorrecta``` determina si una respuesta proporcionada por el usuario es correcta comparándola con la respuesta correcta de una pregunta.
```javascript
function esRespCorrecta(pregunta, respuesta) {
    return normalizarRespuesta(respuesta) === normalizarRespuesta(pregunta.respuestaCorrecta);
  }
```

### 4. La función ```recibirRespuestaUsuario``` se utiliza para pedirle al usuario que ingrese una respuesta a una pregunta interactiva, utilizando el cuadro de diálogo ```prompt```.
```javascript
  function recibirRespuestaUsuario(pregunta) {
    return prompt(pregunta.pregunta + "\n" + pregunta.opciones.join(", "));
  }
```

### 5. La función ```preguntar``` se encarga de realizar una pregunta al usuario, verificar si su respuesta es correcta y mostrar un mensaje indicando el resultado.
```javascript
 function preguntar(pregunta) {
    console.log(pregunta.pregunta);
    const respuestaUsuario = recibirRespuestaUsuario(pregunta); 
    if (esRespCorrecta(pregunta, respuestaUsuario)) {
      console.log("¡Correcto!");
    } else {
      console.log("Incorrecto. La respuesta correcta es " + pregunta.respuestaCorrecta);
    }
  }
```

### 6. Este código utiliza el método ```forEach``` para recorrer todas las preguntas del arreglo ```preguntas``` y realizar la acción de hacer la pregunta al usuario.
```javascript
 preguntas.forEach((pregunta) => {
    preguntar(pregunta);
  });
```

### EL codigo completo de la solucion PF aqui abajo:
```javascript
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
      pregunta: "¿A cuantos grados celcius hierbe el agua?",
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
  
  // Paso 3: Definir la función que recibe la respuesta del usuario por medio de un prompt
  function recibirRespuestaUsuario(pregunta) {
    return prompt(pregunta.pregunta + "\n" + pregunta.opciones.join(", "));
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
  
  // Paso 5: Utilizar la función preguntar para cada pregunta
  preguntas.forEach((pregunta) => {
    preguntar(pregunta);
  });
```

## SOLUCION EXPLICADA PASO A PASO (POO)
### 1. Este código define una clase llamada ```Pregunta```, que sirve como una plantilla para crear objetos que representen preguntas con opciones y una respuesta correcta.
* ```class Pregunta```: Define una clase que encapsula la información relacionada con una pregunta.
* ```constructor(pregunta, opciones, respCorrecta)```: Es un método especial que se ejecuta automáticamente cuando se crea un nuevo objeto de la clase.
* ```this.pregunta, this.opciones, this.respCorrecta```: Asigna los valores recibidos como parámetros a las propiedades del objeto que se está creando.
```javascript
class Pregunta {
    constructor(pregunta, opciones, respCorrecta) {
      this.pregunta = pregunta;
      this.opciones = opciones;
      this.respCorrecta = respCorrecta;
    }
```

### 2. La función ```esRespCorrecta``` verifica si la respuesta proporcionada por el usuario es correcta, comparándola con la respuesta correcta de la pregunta.
* ```normalize```: Es una función interna que toma un string (str), lo normaliza para eliminar acentos y convierte todos los caracteres a minúsculas. Usa ```normalize("NFD")``` para descomponer caracteres acentuados en su forma base (por ejemplo, "á" se convierte en "a" + acento) y luego elimina los diacríticos (acentos, tildes) con ```.replace(/[\u0300-\u036f]/g, "")```. Luego, ```.toLowerCase()``` convierte todo el texto a minúsculas.
* ```normalize(respUsuario)```: Normaliza la respuesta del usuario.
* ```normalize(this.respCorrecta)```: Normaliza la respuesta correcta (almacenada en ```this.respCorrecta```).

```javascript
   esRespCorrecta(respUsuario) {
      const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return normalize(respUsuario) === normalize(this.respCorrecta);
    }
  }
```

### 3. La clase ```Cuestionario``` es una estructura que permite organizar y manejar un conjunto de preguntas en un cuestionario.
* ```constructor(preguntas)```: El constructor recibe un parámetro llamado ```preguntas```, que debe ser un arreglo de objetos o instancias de la clase ```Pregunta```. Este parámetro se asigna a la propiedad ```this.preguntas``` del objeto que se crea.
* ```this.preguntas```: Es una propiedad del objeto ```Cuestionario``` que almacena el arreglo de preguntas.

```javascript
class Cuestionario {
    constructor(preguntas) {
      this.preguntas = preguntas;
    }
```

### 4. La función ```hacerPreguntas``` recorre todas las preguntas del cuestionario y realiza un ciclo donde muestra la pregunta, pide una respuesta al usuario, y verifica si la respuesta es correcta o no.

```javascript
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
```

### 5. Este código define un arreglo llamado ```preguntas``` que contiene varias instancias de la clase ```Pregunta```. Cada elemento del arreglo es una pregunta con sus opciones y la respuesta correcta asociada.

```javascript
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
```

### 6. Este código crea un objeto de la clase ```Cuestionario``` y luego ejecuta el método ```hacerPreguntas``` para realizar el cuestionario.
```javascript
const cuestionario = new Cuestionario(preguntas);
  cuestionario.hacerPreguntas();
```

### El codigo completo de la solucion POO aqui abajo:
```javascript
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
```



