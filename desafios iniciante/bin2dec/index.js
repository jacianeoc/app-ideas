const form = document.getElementById('formulario');
const campo = document.getElementById('campo');
var typeConversion = "Decimal";
const $selected = document.querySelector('#typeConversion');

$selected.addEventListener('change', e => {
    typeConversion = e.target.value;
    console.log(typeConversion);

});

//decimal para binario
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
//binario para decimal
function binDec(bin) {
    return parseInt(bin, 2);
}

form.addEventListener('submit', function(e) {
    if(typeConversion === "Binary"){
        document.getElementById('result').value = binDec(campo.value);
    } else{
        document.getElementById('result').value = dec2bin(campo.value);
    }
    

    e.preventDefault();
});