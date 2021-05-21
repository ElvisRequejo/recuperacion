var fecha = document.getElementById("fecha");
var cliente = document.getElementById("cliente");
var prod = document.getElementById("prod");
var precio = document.getElementById("precio");
var cant = document.getElementById("cant");
var table = document.getElementById("table");
var tbd = document.getElementById("tbd");
var filita = "";
var estado = 0;
function guardar() {
    if (estado == 0) {
        var fila = document.createElement("tr");

        var celda_fecha = document.createElement("td");
        celda_fecha.innerHTML = fecha.value;

        var celda_cliente = document.createElement("td");
        celda_cliente.innerHTML = cliente.value;

        var celda_prod = document.createElement("td");
        celda_prod.innerHTML = prod.value;

        var celda_precio = document.createElement("td");
        celda_precio.innerHTML = precio.value;
  
        var celda_cant = document.createElement("td");
        celda_cant.innerHTML = cant.value;

        var celda_accion = document.createElement("td");
        celda_accion.innerHTML =
            "<a href='#' class='icono2' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>"
            + "<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";
        fila.appendChild(celda_fecha);
        fila.appendChild(celda_cliente);
        fila.appendChild(celda_prod);
        fila.appendChild(celda_precio);
        fila.appendChild(celda_cant);
        fila.appendChild(celda_accion);
        tbd.appendChild(fila);
        table.appendChild(tbd);
        limpiar();
    } else {
        filita.cells[0].innerHTML = fecha.value;
        filita.cells[0].innerHTML = cliente.value;
        filita.cells[2].innerHTML = prod.value;
        filita.cells[4].innerHTML = precio.value;
        filita.cells[3].innerHTML = cant.value;
        limpiar();
        estado = 0;
    }

}
function eliminar(row) {
    var fil = row.parentNode.parentNode;
    fil.parentNode.removeChild(fil);
}
function editar(row) {
    filita = row.parentNode.parentNode;
    fecha.value = filita.cells[0].innerHTML;
    cliente.value = filita.cells[1].innerHTML;
    prod.value = filita.cells[2].innerHTML;
    precio.value = filita.cells[3].innerHTML;
    cant.value = filita.cells[4].innerHTML;
    estado = 1;
}
function limpiar() {
    fecha.value = "";
    cliente.value = "";
    prod.value = "";
    precio.value = "";
    cant.value = "";
    fecha.focus();
}