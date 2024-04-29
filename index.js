// Pair Programming

// ARRAYS

let arrayVacio = []


let arrayNumeros = [0,1,2,3,4,5,6,7,8,9]


let arrayNumerosPares = [0,2,4,6,8]


let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

// FUNCIONES

function suma (num1,num2){
    return num1 + num2
}


function potenciacion (num1,num2){
    let result = 1
    for (let i = 0; i < num2; i++ ){
    
    result = result * num1    
    }

    return result
}


function separarPalabras (frase){   
    return frase.split (' ')
}


function repetirString (risa, num){
    let result = ''
    for (let i = 0; i < num; i++){   
        result = result.concat(risa) 
        // otra opcion sustituir linea de encima por result = result + risa
    }

    return result
}


function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }


// Mezclando arrays y funciones

  function ordenarArray(arr){
    return arr.sort()
  }


  function obtenerPares(par){
    let result = []
    for(i of par){
        if (i % 2 === 0){
            result.push(i)
        }
    }
    return result
  }


  function pintarArray(arr){
    let result = '['
    for (x of arr){
        result = result.concat(x, ', ')    
    }
    result = result.slice(' ',-2)
    return result.concat(']')
    
  }


  function arrayMapi(arr,func) { 
    let resultado = []
    for (let i = 0; i < arr.length; i++) {
        resultado[i] = func(arr[i])    
    }
    return resultado
}


    function eliminarDuplicados(arr) {
        let arrNuevo = new Set(arr)
        let result = [...arrNuevo]
    return result
}
    

// Proyecto

// Arrays

    let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
    

    let holaMundo = ['Hola', 'Mundo']


    let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']


    let arrayDeArrays = [[756,'nombre'],[225,'apellido'],[298,'direccion']]

// Funciones
    
    function multiplicacion (num1,num2){
        return num1 * num2
    }


    function division (num1,num2){
        return num1 / num2
    }


    function esPar(num) {
        return num % 2 == 0;
      }
    
      
    function resta(num1,num2){
        return num1 - num2;
    } 
    let arrayFunciones = [ suma, resta, multiplicacion] 


    // Arrays and functions


    function ordenarArray2(arr) {
        arr.sort(function (a, b) {
            return  b - a
        })
        return arr
    }

  
    function obtenerImpares(arr) {
        let arrImp = []
        arrImp = arr.filter(arr => arr % 2 !== 0)
        return arrImp
    }

    function sumarArray(arr) {
        let result = []
        result = arr.reduce((a,b) => a + b)
        return result
    }
    
    function multiplicarArray (arr){
        let result = []
        result = arr.reduce((a,b) => a * b)
        return result
    }










