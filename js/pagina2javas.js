$(document).ready(function() {
    $("#guardar").click(function() {
  
      const nombre = $("#txtNombre").val();
      const ingreso = $("#txtIngreso").val();  
      const puesto = $("#txtPuesto").val();
      const salario = parseFloat($("#txtSalario").val()) || 0;  
  
      // Crear una nueva fila y agregar celdas con datos
      const nuevaFila = $("<tr>");
      nuevaFila.append("<td>" + nombre + "</td>");
      nuevaFila.append("<td>" + ingreso + "</td>");
      nuevaFila.append("<td>" + puesto + "</td>");
      nuevaFila.append("<td>" + salario + "</td>");
  
      // Agregar la nueva fila a la tabla
      $("#tabla > tbody").append(nuevaFila);
  
      // Limpiar los campos de entrada
      $("#txtNombre").val("");
      $("#txtIngreso").val("");
      $("#txtPuesto").val("");
      $("#txtSalario").val("");
    });
  
    $("#boton1").click(function() {
      $("#tabla > tbody tr:first").remove();
    });
    $("#boton2").click(function() {
      $("#tabla > tbody tr:last").remove();
    });
  });
  