//incluimos y definimos las funciones a exportar
export function saludar(nombre){
    return `Hola, ${nombre}`
}

export function despedida(nombre){
    return `Hasta luego, ${nombre}`
}

export function despedidas(nombre){
    return `Hasta luego, ${nombre}`
}
//Exporto las funciones
// export {saludar, despedida};
//export * from ; 
export * from './saludo.js';
