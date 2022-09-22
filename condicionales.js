//if

let edad = parseInt(prompt("Ingresa tu edad"));

if (edad == 18){
    console.log("Ya eres mayor de edad")
}

// = para asignar
// == para comparar

//if..else

let colorFavorito = prompt("Ingresa tu color favorito");

if (colorFavorito == "azul"){
    console.log("El azul tambien es mi color favorito");
}else{
    console.log(colorFavorito + " tambien es un lindo color")
}


let usuario = prompt("Ingrese nombre de usuario");

if(usuario == "Pepito_008"){
    console.log("Bienvenido al sistema, Pepito");
}else{
    console.log("Usuario no registrado");
}

//volviendo a la edad
if(edad <= 17){
    console.log("Aun no puedes conducir");
}else{
    console.log("Ya puedes conducir");
}

//if..else if..else

let fruta = prompt("Ingrese la fruta y le dire el precio por kg");

if(fruta == "manzana"){
    console.log("El precio de la manzana es $299");
}else if(fruta == "durazno"){
    console.log("El precio del durazno es $329.99");
}else if (fruta == "frutilla"){
    console.log("El precio de la frutilla es $899");
}else{
    console.log("Fruta sin stock");
}

//ejercicio: pedirle al usuario el año de vencemiento de su registro de conducir
//comparando con el año actual se imprime un mensaje que dira si el registro esta vencido o por vencer o si aun no esta vencido

let anioDeVencimiento = parseInt(prompt("Ingrese el año de vencimiento de su registro"));

const ANIOACTUAL = 2022;

if(anioDeVencimiento <= ANIOACTUAL){
    console.log("El registro esta vencido o por vencer");
}else{
    console.log("El registro aun no esta vencido");
}

if(anioDeVencemiento < 2022){
    console.log("Su registro vencio")
}else if(anioDeVencimiento == 2022)


//variables booleanas
/*let tieneAptoFisico = true;*/

if(tieneAptoFisico){
    console.log("Puede realizar actividad deportiva");
}

//otra opcion
let edadUsu = 27;
let esMayor = (edadUsu >=18); //true o false



//operador === vs ==

let num1 = 1;
let numUno = "1";

let sonIguales = (num1 == numUno);
console.log(sonIguales);
// == compara en funcion del valor

let sonEstrictamenteIguales = (num1 === numUno);
console.log(sonEstrictamenteIguales);
// === compara en funcion del valor y del tipo

// or ||
let futbolista = prompt("Ingresa el apellido de tu futbolista preferido");

if((futbolista == "messi") || (futbolista == "MESSI") || (futbolista == "Messi")){
    console.log("Su nombre completo es Lionel Messi, nacio en 1987 en la ciudad de Rosario, Argentina");
}else if ((futbolista == "ronaldo") || (futbolista == "RONALDO") || (futbolista == "Ronaldo")){
    console.log("Su nombre completo es Cristiano Ronaldo, nacio en 1985 en Portugal");
}else{
    console.log("Sin info");
}


// and &&
let user = prompt("Nombre usuario");
let pass = prompt("Contraseña");

if((user == "DaftPunk")&&(pass == "12345")){
    console.log("Bienvenido al sistema "+user+"!")
}else if((user == "Mike2022") && (pass == "roble_*9")){
    console.log("Buen dia Mike");
}else{
    console.log("Usuario y/o contraseña erronea")
}

let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}

let numero = prompt("Ingresar numero");
if(numero >=1000){
    alert("El numero es mayor o igual a 1000");
}else{
    alert("El numero no llega a 1000");
}

let texto = prompt("Saludar");
if((texto = "Hola") || (texto = "HOLA") || (texto = "HOla")){
    alert("Hola amigo")
}

let NUMERO = parseInt(prompt("Ingresar un numero"))
if((NUMERO >=10) && (NUMERO <=50)){
    alert("Tu numero esta entre 10 y 50");
}else{
    alert("No esta entre 10 y 50")
}