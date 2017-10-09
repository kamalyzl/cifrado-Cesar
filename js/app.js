
/*
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado
según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha
Por ejemplo:

Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
 */


 // creamos la primera funcion para cifrar
function ciphe (text){
  
    array = text.split(""); //se convierte texto a un array
    array2= array.splice(0,7); //separamos los arrays 
    array3= array.concat(array2); //Unimos arrays
    finalText= array3.join("");// transformamos arrays a String 
  

    //Validamos, si tipo de texto es igual a una cadena String, devolver mensaje, sino error
    if ( typeof(text)=== typeof("h")){
      return ("Texto original " +text + "\n" + " texto cifrado es : "+ finalText);
          }  return alert("Error"); 

}

//Creamos la funcion para decifrar
function decipher(text){
    array = text.split(""); // convertimos un texto en arrays
    array2= array.splice(-7,7); // dividimos el array 
    array3= array2.concat(array); // Unimos el array
    finalText= array3.join(""); // transformamos de array a String 
  

    //validamos, si el tipo de text es igual a un String sino monstramos error 
    if (typeof(text)=== typeof("h")){
      return ("Texto original " +text + "\n" + " texto cifrado es : "+ finalText);
         }     return alert("Error"); 

}


//Probar funcion por función 
// ejemplo= ABCDEFGHIJKLMNOPQRSTUVWXYZ
ciphe(prompt("Ingresa texto para cifrar"));
//decipher(prompt("Ingresa texto que desea desifrar "));