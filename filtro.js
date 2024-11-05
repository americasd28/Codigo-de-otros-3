// Arreglo de productos
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Se cambio lista de productos y el input de búsqueda
const contenedorProductos = document.getElementById("listaProductos");
const inputBusqueda = document.getElementById("inputBusqueda");

// Se agrego función para renderizar productos en el DOM
function renderizarProductos(lista) {
  // Se agrego para limpiar el contenedor antes de renderizar los productos
  contenedorProductos.innerHTML = "";

  // Se agrego forEach para la lista de productos y los agrega al contenedor
  lista.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    contenedorProductos.appendChild(d);
  });
}

// Se agrego para renderizar todos los productos inicialmente
renderizarProductos(productos);

// Se agrega el evento de clic al botón para filtrar productos
document.querySelector("button").onclick = function () {
  
  const texto = inputBusqueda.value.toLowerCase();

  // Se cambio la funcion para filtar los productos basados en el texto ingresado
  const productosFiltrados = filtrado(productos, texto);

  //Se agrego para renderizar los productos filtrados
  renderizarProductos(productosFiltrados);
};

//Se corrigio la función para filtrar productos según el tipo o el color
const filtrado = (productos = [], texto) => {
  return productos.filter(item => 
    item.tipo.toLowerCase().includes(texto) || 
    item.color.toLowerCase().includes(texto)
  );
};
