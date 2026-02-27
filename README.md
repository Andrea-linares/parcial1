INTEGRANTES:
YOSELIN ANDREA LINARES HERNANDEZ

KATERINNE ALEJANDRA MENDEZ GARCIA

¿Qué valor agregado tiene el uso de WebComponents a su proyecto?
El uso de WebComponents permite encapsular toda la funcionalidad (HTML, lógica y comportamiento) 
en una etiqueta personalizada (<inventario-component>). Esto hace que el código sea mucho más ordenado, 
fácil de mantener y reutilizable en otras partes del sitio sin generar conflictos con el resto del código.

¿De qué forma manipularon los datos sin recargar la página?
Se utilizó la manipulación del DOM (Document Object Model) a través de eventos de JavaScript 
(click). Al capturar los datos, estos se almacenan en un arreglo (array) interno y se 
renderizan dinámicamente en la pantalla utilizando propiedades como .innerHTML y el método 
.appendChild(), actualizando la vista instantáneamente sin necesidad de refrescar el navegador.

¿De qué forma validaron las entradas de datos?
Las entradas se validaron mediante lógica condicional en JavaScript antes de procesar el 
registro. Se implementaron las siguientes reglas:
1- Campos obligatorios: Se verifica que el nombre y la categoría no estén vacíos mediante el método .trim().
2- Validación numérica: Se asegura que el campo de cantidad contenga un valor superior a cero.
En caso de error, se muestra una alerta o mensaje al usuario para evitar el ingreso de datos incorrectos.

¿Cómo manejaría la escalabilidad futura en su página?
Para escalar el proyecto, se podrían implementar las siguientes mejoras:
- Persistencia de datos: Conectar la aplicación a una base de datos real o utilizar localStorage para que los datos no se borren al cerrar el navegador.
- Modularización: Dividir el WebComponent en componentes más pequeños (uno para el formulario y otro para la lista).
- Filtrado avanzado: Añadir funciones de búsqueda y filtrado por categoría para manejar grandes volúmenes de inventario.
