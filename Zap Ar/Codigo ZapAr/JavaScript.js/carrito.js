/* EVENTOS Y DOM */
let btn_abrir = document.getElementById("btn_abrir");
let carrito_oculto = document.getElementById("carrito_JS");

btn_abrir.addEventListener("click", () => {
  carrito_oculto.innerHTML = `
 <div id="carrito_container" class= "carrito_JS_container">

    <div class="carrito_JS_contente">

        <div>
            <button  id= "btn_cerrar" class="btn_cerrar">x</button>

            <h2>Tu Carrito</h2>
            
            <div class="carrito_JS_description">
            <table class="table">
            <thead>
              <tr class="text_description">
                <th scope="col"></th>
                <th scope="col">Modelo</th>
                <th scope="col">Talle</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody class= "cuerpo_de_tabla">
              
            </tbody>
          </table>
            </div>
        </div>
        
        

        <div class="bottom_carrito">
            <div class="bottom_carrito_total">
                <h3>Total</h3>
                <div>
                    <strong>$</strong> 
                </div>
            </div>
            <button class="botones_violetas text_quienesSomos_carrito sombra">Comprar</button>
            <button class="botones_violetas  text_quienesSomos_carrito sombra">Limpiar carrito</button>
        </div>

    </div>

 </div>
 `;

  document.getElementById("carrito_JS").addEventListener("click", (e) => {
    if (e.target.id === "carrito_container" || e.target.id === "btn_cerrar") {
      carrito_oculto.innerHTML = "";
    }
  });
});

/* Funcionalidad de cargar del producto */
const Clickbutton = document.querySelectorAll(".btn_agregar");
const tbody = document.querySelector(".cuerpo_de_tabla");
let carrito = [];

Clickbutton.forEach((btn_agregar) => {
  btn_agregar.addEventListener("click", cargarAlCarrito);
});

function cargarAlCarrito(e) {
  const button = e.target;
  const producto = button.closest(".zapas_unidad");
  const productoNombre = producto.querySelector(".nombre_producto").textContent;
  const productoPrecio = producto.querySelector(".precio_producto").textContent;
  const productoTalle = producto.querySelector(".talle").value;

  const newCompra = {
    nombre: productoNombre,
    precio: productoPrecio,
    talle: productoTalle,
    cantidad: 1,
  };

  agregarAlCarrito(newCompra);
}

function agregarAlCarrito(newCompra) {
  carrito.push(newCompra);

  renderCarrito();
}

function renderCarrito() {
  tbody.innerHTML = "";
  carrito.map((compra) => {
    const tr = document.createElement("tr");
    tr.classList.add("productoCarrito");
    const content = `
    <th scope="row">1</th>
                <td class="table__modelos">${compra.nombre}</td>
                <td class="table__talle">${compra.talle}</td>
                <td class="table__cantidad">
                <input type="number" min="1" value="${compra.cantidad}">
                <button class="delete sombra">x</button>
                </td>
                <td class="table__precio"><p>${compra.precio}</p></td> 
                `;
    tr.innerHTML = content;
    tbody.append(tr);
  });
}
btn_abrir.addEventListener("click", renderCarrito());
