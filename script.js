// Funciones flecha que definen las operaciones matemáticas
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

let exit = true;
let opciones = ["1", "2", "3", "4"];
let historial = []; // Objeto que lleva el historial de las operaciones

// Función que solicita y valida los números ingresados
const solicitarValidarNumero = (mensaje) => {
  while (true) {
    let input = prompt(mensaje);
    if (input === null) return null;
    input = input.trim();
    if (input === "") {
      alert("El campo no puede estar vacío");
      continue;
    }
    const numero = Number(input);
    if (isNaN(numero)) {
      alert("Ingresa un número válido");
      continue;
    }
    return numero;
  }
};

// Función para mostrar el historial de la aplicación
const mostrarHistorial = () => {
  if (historial.length === 0) {
    alert("No hay operaciones en el historial.");
    return;
  }

  const historialImpreso = historial.map((r, i) => `${i + 1}. [${r.hora}] ${r.operacion}: ${r.n1} y ${r.n2} = ${r.resultado}`).join("\n");

  alert("📋 Historial:\n\n" + historialImpreso);
};

do {
  let operacion = prompt("🖥 Ingrese la operación: \n 1-Suma | 2-Resta | 3-Multiplicación | 4-Dividir | 5-Ver Historial | 6-Salir");

  if (operacion === null || operacion === "6") {
    exit = false;
    break;
  }

  if (operacion === "5") {
    mostrarHistorial();
    continue;
  }

  if (!opciones.includes(operacion)) {
    alert("Opción no válida. Ingrese un número del 1 al 6");
    continue;
  }

  let n1 = solicitarValidarNumero("Ingrese el primer número: ");
  if (n1 === null) break;
  let n2 = solicitarValidarNumero("Ingrese el segundo número");
  if (n2 === null) break;

  if (operacion === "4" && n2 === 0) {
    alert("No se puede dividir por cero");
    continue;
  }

  let resultado;
  let nombreOperacion;
  
  // Estructura condicional para la operación seleccionada
  switch (operacion) {
    case "1":
      resultado = sumar(n1, n2);
      nombreOperacion = "Suma";
      break;
    case "2":
      resultado = restar(n1, n2);
      nombreOperacion = "Resta";
      break;
    case "3":
      resultado = multiplicar(n1, n2);
      nombreOperacion = "Multiplicación";
      break;
    case "4":
      resultado = dividir(n1, n2);
      nombreOperacion = "División";
      break;
  }

  // Objeto litera para llevar un registro de las operaciones
  const registro = {
    operacion: nombreOperacion,
    n1,
    n2,
    resultado,
    hora: new Date().toLocaleDateString(),
  };

  historial.unshift(registro);
  alert(`${nombreOperacion}: ${n1} y ${n2} = ${resultado}`);
  console.log(`${nombreOperacion}: ${n1} y ${n2} = ${resultado}`);
  console.log("Historial: ", historial);
} while (exit);

alert("Saliendo de la aplicación, vuelva pronto 👋");
// Imprime el historial en formato de tabla
console.table(historial);
