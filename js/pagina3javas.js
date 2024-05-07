var salario;
var bonificacion;
var comision;
var totalIngresos;
var ahorro;
var igss;
var prestamos;
var totalEgresos;
var totalSueldoLiquido;


function ingresarIngresos() {
    salario = parseFloat(document.getElementById("txtSalario").value);
    bonificacion = parseFloat(document.getElementById("txtBonificacion").value);
    comision = parseFloat(document.getElementById("txtComisiones").value);
}
  
function operarIngresos() {
    ingresarIngresos();
    totalIngresos = salario + bonificacion + comision;
}

function ingresarEgresos() {
    ahorro = parseFloat(document.getElementById("txtAhorro").value);
    prestamos = parseFloat(document.getElementById("txtPrestamos").value);
}
  
function igssOperar() {
    igss = salario * (4.83/100);
}

function operarEgresos() {
    ingresarEgresos();
    totalEgresos = ahorro + igss + prestamos;
}

function operarSueldoLiquido() {
    operarIngresos();
    operarEgresos();

    totalSueldoLiquido = totalIngresos - totalEgresos;
}

function mostrarTotalSueldo() {
    operarSueldoLiquido();
    document.getElementById("txtNewTotal").innerHTML=" " + totalSueldoLiquido;
    operarIngresos();
    document.getElementById("txtTotal1").innerHTML=" " + totalIngresos;
    igssOperar();
    document.getElementById("txtIgss").innerHTML=" " + igss;
    operarEgresos();
    document.getElementById("txtTotal2").innerHTML=" " + totalEgresos;
}