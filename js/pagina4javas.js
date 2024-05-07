var sueldoBase;
var yearsLaborados;
var salPendiente;
var bonoCatorce;
var deudas;
var aguinaldo;
var mesesTrabajados;
var indemnizacion;

function capturaDatos() {
    sueldoBase=parseFloat(document.getElementById("txtSueldo").value);
    yearsLaborados=parseFloat(document.getElementById("txtTrabajados").value);
    salPendiente=parseFloat(document.getElementById("txtSalarioPen").value);
    deudas=parseFloat(document.getElementById("txtDeudas").value);
    mesesTrabajados= yearsLaborados*12;
}

function bonoCat() {
    capturaDatos();

    bonoCatorce=(sueldoBase/12)*mesesTrabajados;
}

function aguinaldoProporcional() {
    capturaDatos();

    aguinaldo=(sueldoBase/12)*mesesTrabajados;
}

function indemValor() {
    capturaDatos();
    bonoCat();
    aguinaldoProporcional();

    indemnizacion=(sueldoBase*yearsLaborados)+(bonoCatorce + aguinaldo + salPendiente) - deudas;
}
function mostrarValoresTotales() {
   capturaDatos();
   bonoCat();
   aguinaldoProporcional();
   indemValor();

   document.getElementById("txtBonocat").innerHTML=" " + bonoCatorce;
   document.getElementById("txtAguinaldo").innerHTML=" " + aguinaldo;
   document.getElementById("txtIndemnizacion").innerHTML=" " + indemnizacion;
}