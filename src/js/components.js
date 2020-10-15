import '../css/components.css'


export const saludar = (nombre) => {
    console.log(`Creando etiqueta h1`);
    
    const hola = ''
    const hola2 = ''
    const hola3 = ''
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.innerText = `Hola, ${nombre}...`;
    document.body.append(h1);
}


    // "start": "webpack serve "
