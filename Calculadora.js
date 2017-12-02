let btn_soma        = document.querySelector('#btn-soma');
let btn_subtracao   = document.querySelector('#btn-subtracao');
let btn_divisao     = document.querySelector('#btn-divisao');
let btn_multiplicao = document.querySelector('#btn-multiplicao');

let edt_valor1      = document.querySelector('#edt-valor1');
let edt_valor2      = document.querySelector('#edt-valor2');




btn_soma.addEventListener('click', () => {
	console.log ('Estou clicando no botão +');
	console.log (parseInt(edt_valor1.value) + parseInt(edt_valor2.value));	
	});