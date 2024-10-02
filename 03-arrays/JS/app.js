let autos = ['BMW', 'Audi', 'Volvo'];

console.log(autos);
console.log(typeof autos);

//creacion de array
let item = new Array(1,6);
console.log(item);

let items = new Array(6);
console.log(items);

//dos formas de crear e inicializar un array
let pets = new Array('perro', 'gato', 'periquito');
let pets2 = ['perro', 'gato', 'periquito'];
console.log(pets);

//tamaño
console.log(pets.length);

//llamar a 1 elemento del array empiezan en 0!!!
console.log(pets[0]);

//Iterar en el array
let len = pets.length;
for(let i= 0; i<len; i++){
    console.log(pets[i]);
}

//push añadir un elemento al final
pets.push('rana');
pets.push('loro');
console.log(pets);
pets[2] = 'pez';
console.log(pets);

//añadir un elemento en una posicion concreta
items[2] = 'toro';
console.log(items);

//pop : saca el ultimo elemento de la lista (lo elimina)
console.log(pets.pop());
console.log(pets.pop());
console.log(pets)

//shift: saca el primer elemento de la lista (lo elimina)
console.log(pets.shift());

//splice:  (posicion, 0 añadir 1 remplazar (DeleteCount), 'dato')
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'May'); // Param 1 posicion. Param 2: 0 insetando en la posicion 1
console.log(months);
months.splice(1,1, 'Feb');  // Param 1 posicion. Param 2: 1 remplaza en la posicion 1
console.log(months);

//podemos concatenar 
months.splice(5, 2, 'July', 'Agost', 'Sept'); //Param 1 posicion Param 2: 2 en adelate 3..4... indica cuantos elementos quieres eliminar
console.log(months); 

//partir la cadena en 2
let eliminados = months.splice(3);
console.log(eliminados);
console.log(months);

//ordenación del array
//reverse te lo muestra alreves alfabetameticamente
console.log(months.reverse())
//ordena hacia delante alfabeticamente
console.log(months.sort())

//matrices
let matriz = [];

let num = prompt("Dime el tamaño de columna");

for(let i=0; i<num; i++){
    matriz[i] = new Array(num);
}