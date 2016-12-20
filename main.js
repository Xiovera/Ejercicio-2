var numero1, numero2, numero3, resultadoSuma, promedio;

numero1 = prompt("Por favor, ingresa un número");
numero2 = prompt("Por favor, ingresa otro número");
numero3 = prompt("Por favor, ingresa un último número");

resultadoSuma = parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3);
promedio = resultadoSuma/3;

alert(promedio);