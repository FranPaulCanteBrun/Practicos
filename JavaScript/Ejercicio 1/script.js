try {
var suma;
var num1 = Number(prompt('Ingrese un numero'));
var num2 = Number(prompt('Ingrese otro numero'));
var num3 = Number(prompt('Ingrese un ultimo numero'));
if (num1 != isNaN || num2 != isNaN || num3 != isNaN) {
    suma = (num1 + num2 + num3) / 3;
    console.log('El promedio de los numeros entregados es: ' + suma);
    } else {
        throw new Error('El valor ingresado no es un numero');
    }
} catch (err) {
    console.log(err.message)
}


