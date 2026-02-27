
class InventarioComponent extends HTMLElement {
    constructor() {
        super();
        this.productos = [];
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <div class="container">
                <form id="inventory-form">
                    <label>Nombre de la Prenda:</label>
                    <input type="text" id="nombre" placeholder="Ej. Camisa Polo">
                    <span id="error-nombre" class="error"></span>

                    <label>Categoría:</label>
                    <select id="categoria">
                        <option value="">Seleccione...</option>
                        <option value="Caballero">Caballero</option>
                        <option value="Dama">Dama</option>
                        <option value="Niños">Niños</option>
                    </select>
                    <span id="error-categoria" class="error"></span>

                    <label>Cantidad:</label>
                    <input type="number" id="cantidad" min="1" placeholder="0">
                    <span id="error-cantidad" class="error"></span>

                    <button type="button" id="btn-registrar">Registrar Producto</button>
                </form>

                <div id="display-area" class="resultado" style="display:none; margin-top:20px;">
                    <h3>Inventario Registrado:</h3>
                    <ul id="lista-productos" style="list-style: none; padding: 0;"></ul>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const btn = this.querySelector('#btn-registrar');
        if(btn) {
            btn.addEventListener('click', () => this.validarYProcesar());
        }
    }

    validarYProcesar() {
        const nombreInput = this.querySelector('#nombre');
        const categoriaInput = this.querySelector('#categoria');
        const cantidadInput = this.querySelector('#cantidad');

        const nombre = nombreInput.value.trim();
        const categoria = categoriaInput.value;
        const cantidad = cantidadInput.value;

        this.querySelectorAll('.error').forEach(e => e.textContent = '');

        if (!nombre || !categoria || !cantidad || cantidad <= 0) {
            alert("Por favor rellene todos los campos correctamente.");
            return;
        }

        const nuevoProducto = { nombre, categoria, cantidad };
        this.productos.push(nuevoProducto);
 
        this.actualizarLista();

        this.querySelector('#inventory-form').reset();
    }

    actualizarLista() {
        const area = this.querySelector('#display-area');
        const listaUI = this.querySelector('#lista-productos');
        
        area.style.display = 'block';
        
        listaUI.innerHTML = '';

        this.productos.forEach((prod) => {
            const item = document.createElement('li');
            item.style.borderBottom = "1px solid #ccc";
            item.style.padding = "8px 0";
            item.innerHTML = `<strong>${prod.nombre}</strong> - ${prod.categoria} (${prod.cantidad} unidades)`;
            listaUI.appendChild(item);
        });
    }
}

if (!customElements.get('inventario-component')) {
    customElements.define('inventario-component', InventarioComponent);
}
