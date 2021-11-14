
// FORMULARIO COTIZACION

function Seguro(nombre, dni, patente, marca, year, tipo){
    this.nombre = nombre;
    this.dni = dni;
    this.patente = patente;    
    this.marca = marca;
    this.year =  year;
    this.tipo = tipo;
}

// realiza cotización
Seguro.prototype.cotizarSeguro =  function(){

let cantidad;
const base = 2000;

   switch(this.marca){
    case 'Fiat':
            cantidad = base * 1.15;
            break;
    case 'Renault':
            cantidad = base * 1.25;
            break;
    case 'Chevrolet':
            cantidad = base * 1.35;
            break;
    case 'Ford' :
        cantidad = base * 1.95;
        break;
    case 'Volkswagen' :
        cantidad = base * 2.15;
        break;
    case 'Audi' :
        cantidad = base * 3.35;
        break;    
    default:
        break;
   }

// calcular año

const diferencia = new Date().getFullYear() - this.year;

// reduccion de costo segun año

cantidad -= ((diferencia * 3) * cantidad)/100;

/*    Multiplicacion segun tipo de cobertura    */

   if(this.tipo === 'terceros-completo'){
       cantidad *= 1.30;
   }else{
        cantidad *= 1.60;
   }

   return cantidad;
}

function UI(){  }

UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(),
          min = max -22;
    
    const selectYear = document.querySelector('#year');

    for(let i = max; i>min; i--){
        let option =  document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//  alertas

UI.prototype.mostrarMensaje = (mensaje,tipo) => {
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('mensaje','error');
    }else{
        div.classList.add('mensaje','correcto');
    }
    
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

// insertar en html

const formulario = document.querySelector('#cotizar-seguro');
formulario.insertBefore(div, document.querySelector('#resultado'));

setTimeout(() => {
    div.remove();
    }, 2000);
}

UI.prototype.mostrarResultado = (total,seguro) =>{

const {marca, year, tipo} = seguro;
let txtMarca;

    switch(marca){
        case 'Fiat':
            txtMarca = 'Fiat';
            break;
        case 'Renault':
            txtMarca = 'Renault';
            break;   
        case 'Chevrolet':
            txtMarca = 'Chevrolet';
            break;
        case 'Ford' :
            txtMarca = 'Ford';
            break;
        case 'Volkswagen' :
            txtMarca = 'Volkswagen';
            break;
        case 'Audi' :
            txtMarca = 'Audi';
            break;
        default:
            break;
    }

// crear el resultado

const div = document.createElement('div');
div.classList.add('mt-10');

div.innerHTML = `
    <p class='div'> Tu Resumen </p>
    <p class='font-bold'> Marca: <span class='font-normal'> ${txtMarca}</span> </p>
    <p class='font-bold'> Año: <span class='font-normal'> ${year}</span> </p>
    <p class='font-bold'> Tipo: <span class='font-normal capitalize'> ${tipo}</span> </p>
    <p class='font-bold'> Total: <span class='font-normal'> $${total}</span> </p>

    `;

const resultadoDiv = document.querySelector('#resultado');

    

// mostrar spinner

const spinner = document.querySelector('#cargando');
spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        // se borra el spinner y se muestra el resultado
        resultadoDiv.appendChild(div);
    }, 2000);

}

// Instanciar UI

const ui = new UI();

$(document).ready( () => {
    ui.llenarOpciones();
});

const listaCotizacion = [];

$('#cotizar-seguro').on("submit", function(e) {
    e.preventDefault();

    const nombre = $('#nombre').val();
    const dni = $('#dni').val();
    const patente = $('#patente').val();
    const marca = $('#marca').val();
    const year = $('#year').val();
    const tipo = $('input[name=tipo]:checked').val();

    if(nombre === '' || dni === '' || patente === '' || marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Completa todos los campos', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'exito');
    // ocultar cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }
    // instanciar seguro

    const seguro = new Seguro(nombre, dni, patente, marca, year, tipo);
    const total = seguro.cotizarSeguro();
    // use prototype que va a cotizar
    const final = ui.mostrarResultado(total, seguro);



    if (localStorage.getItem("cotizaciones") ==null) {
        listaCotizacion.push(seguro);
        localStorage.setItem("cotizaciones",JSON.stringify(listaCotizacion));
    }else {
        let listanueva = JSON.parse(localStorage.getItem("cotizaciones"));
        listanueva.push(seguro);
        localStorage.setItem("cotizaciones",JSON.stringify(listanueva));
    }
})









