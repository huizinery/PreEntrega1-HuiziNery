// - - - - - - - - - - - - - FUNCIONES

function saludoBienvenida(nombreCliente) {
  alert("Hola " + nombreCliente + ", apriete ACEPTAR para ingresar al catálogo");
}

function saludoDespedida(nombreCliente) {
  alert("Gracias por visitar TomaDos, sr/sra " + nombreCliente + ", vuelva pronto");
}

// - - - - - - - - - - - - - BIENVENIDA
alert("Bienvenido a TomaDos, acceso permitido solo a mayores de 18 años");

// - - - - - - - - - - - - - FILTRO DE EDAD, SOLO INGRESA SI TIENE 18 AÑOS O MÁS
let edadUsuario = prompt("Ingrese su edad, por favor: ");

if (parseInt(edadUsuario) >= 18) 

// - - - - - - - - - - - - - SE LE PIDE NOMBRE, PARA MEJORAR LA INTERACIÓN

{
  let nombreCliente = prompt("Acceso permitido, Ingrese su nombre:");

  saludoBienvenida(nombreCliente);

  let categoriaElegida = prompt("¿Qué está buscando? : 1-Bebidas SIN ALCOHOL, 2-Bebidas CON ALCOHOL, 0-Salir");

  // - - - - - - - - - - - - - VARIABLES GLOBALES
  let montoTotal = 0; //Varía dependiendo si el usuario agregar productos al carrito
  let cantidadALLevar = 0; 

  while (categoriaElegida != "0")
  
  // - - - - - - - - - - - - - CATÁLOGO, SI DECICE COMPRAR BEBIDAS Y NO SALIR

  {
    switch (categoriaElegida)
  // - - - - - - - - - - - - - CATÁLOGO, SI QUIERE BEBIDAS SIN ALCOHOL
    {
      case "1":
        let eleccionSinAlcohol = prompt("Escriba la opción deseada: 1-Jugo, 2-Gaseosa, 0-Volver al menú principal");
        while (eleccionSinAlcohol != "0") {
          switch (eleccionSinAlcohol) {
            case "1":
              let baggioNarMan = prompt("Escriba la opción deseada: 1-Baggio Naranja 1L ($600), 2-Baggio Manzana 1L ($550), 0-Volver al menú principal");
              while (baggioNarMan != "0")
          
// - - - - - - - - - - - - - CATÁLOGO, SI QUIERE ELEGIR ENTRE JUGOS
              {
                cantidadALLevar = parseInt(prompt("¿Cuántas unidades quiere agregar al carrito?"));
                while (cantidadALLevar < 0) {
                  cantidadALLevar = parseInt(prompt("El valor debe ser igual o mayor a 0: "));
                }
                switch (baggioNarMan) {
                  case "1":
                    const baggioNaranja = 600 * cantidadALLevar;
                    montoTotal += baggioNaranja;
                    alert("Se agregaron " + cantidadALLevar + " Baggio Naranja al carrito, el monto es: " + baggioNaranja);
                    break;
                  case "2":
                    const baggioManzana = 550 * cantidadALLevar;
                    montoTotal += baggioManzana;
                    alert("Se agregaron " + cantidadALLevar + " Baggio Manzana al carrito, el monto es: " + baggioManzana);
                    break;
                  default:
                    alert("ERROR: Ingrese una opción válida");
                    break;
                }
// - - - - - - - - - - - - - PARA SALIR DEL CICLO DE JUEGOS
                baggioNarMan = prompt("Escriba la opción deseada: 1-Baggio Naranja 1L ($600), 2-Baggio Manzana 1L ($550), 0-Volver");
              }
              break;
// - - - - - - - - - - - - - CATÁLOGO SI QUIERE ELEGIR ENTRE GASEOSAS

            case "2":
              let marcaGaseosas = prompt("Escriba la opción deseada: 1-Coca Cola 2,25L ($1000), 2-Sprite 2,25L ($899), 0-Volver al menú principal");
              while (marcaGaseosas != "0") {
                cantidadALLevar = parseInt(prompt("¿Cuántas unidades quiere agregar al carrito?"));
                while (cantidadALLevar < 1) {
                  cantidadALLevar = parseInt(prompt("El valor debe ser igual o mayor a 1: "));
                }
                switch (marcaGaseosas) {
                  case "1":
                    const precioCocas = 1000 * cantidadALLevar;
                    montoTotal += precioCocas;
                    alert("Se agregaron " + cantidadALLevar + " Coca Cola de 2,25L al carrito, el monto es: " + precioCocas);
                    break;
                  case "2":
                    const precioSprites = 899 * cantidadALLevar;
                    montoTotal += precioSprites;
                    alert("Se agregaron " + cantidadALLevar + " Sprite de 2,25L al carrito, el monto es: " + precioSprites);
                    break;
                  default:
                    alert("ERROR: Ingrese una opción válida");
                    break;
                }
// - - - - - - - - - - - - -  PARA SALIR DE CICLO DE GASEOSAS

                marcaGaseosas = prompt("Escriba la opción deseada: 1-Coca Cola 2,25L ($1000), 2-Sprite 2,25L ($899), 0-Volver");
              }
              break;
            default:
              alert("ERROR: Ingrese una opción válida");
              break;
          }
// - - - - - - - - - - - - - PARA SALIR DEL CICLO DE BEBIDAS SIN ALCOHOL

          eleccionSinAlcohol = prompt("Escriba la opción deseada: 1-Jugo, 2-Gaseosa, 0-Salir de Bebidas SIN alcohol");
        }
        break;

// - - - - - - - - - - - - - CATÁLOGO, DE BEBIDAS CON ALCOHOL
      case "2":
        let eleccionConAlcohol = prompt("Escriba la opción deseada: 1-Cerveza Quilmes 1L ($1200), 2-Fernet Branca 750ml ($4000), 0-Salir de Bebidas CON alcohol");
        while (eleccionConAlcohol != "0") {
          cantidadALLevar = parseInt(prompt("¿Cuántas unidades quiere agregar al carrito?"));
          while (cantidadALLevar < 1) {
            cantidadALLevar = parseInt(prompt("El valor debe ser igual o mayor a 1: "));
          }
          switch (eleccionConAlcohol) {
            case "1":
// - - - - - - - - - - - - - CERVEZA  

              const cervezaQuilmes = 1200 * cantidadALLevar;
              montoTotal += cervezaQuilmes;
              alert("Se agregaron " + cantidadALLevar + " Quilmes de 1L al carrito, el monto es: " + cervezaQuilmes);
              break;
            case "2":
// - - - - - - - - - - - - - FERNET

              const fernetBranca = 4000 * cantidadALLevar;
              montoTotal += fernetBranca;
              alert("Se agregaron " + cantidadALLevar + " Fernet Branca de 750ml al carrito, el monto es: " + fernetBranca);
              break;
            default:
              alert("ERROR: Ingrese una opción válida");
              break;
          }
// - - - - - - - - - - - - - PARA SALIR DEL CICLO DE BEBIDAS CON ALCOHOL
          eleccionConAlcohol = prompt("Escriba la opción deseada: 1-Cerveza Quilmes 1L ($1200), 2-Fernet Branca 750ml ($4000), 0-Salir de Bebidas CON alcohol");
        }
        break;
      default:
        alert("ERROR: Ingrese una opción válida");
        break;
    }
// - - - - - - - - - - - - - PARA SALIR DEL MENU DE COMPRAS

    categoriaElegida = prompt("¿Qué está buscando? : 1-Bebidas SIN ALCOHOL, 2-Bebidas CON ALCOHOL, 0-Salir/Finalizar compra");
  }
// - - - - - - - - - - - - - MUESTRA AL CLIENTE EL VALOR DE LA COMPRA
  alert( " El monto total de su compra es: $" + montoTotal);

  saludoDespedida(nombreCliente);
} else {
// - - - - - - - - - - - - - SI NO ES MAYOR DE 18, NO PUEDE INGRESAR

  alert("Acceso DENEGADO, eres menor de 18 años");
}
