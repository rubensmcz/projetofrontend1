let btn_soma        = document.querySelector('#btn-soma');
let btn_subtracao   = document.querySelector('#btn-subtracao');
let btn_divisao     = document.querySelector('#btn-divisao');
let btn_multiplicao = document.querySelector('#btn-multiplicao');
let btn_limpar      = document.querySelector('#btn-limpar');

let edt_valor1      = document.querySelector('#edt-valor1');
let edt_valor2      = document.querySelector('#edt-valor2');

let h3_resultado      = document.querySelector('#h3-resultado');

btn_soma.addEventListener('click', () => {	

if (edt_valor1.value === '' || edt_valor2.value === '')  { 
	window.alert('Informe números validos'); 
} else {
	//console.log ('Estou clicando no botão soma');
	//console.log (parseInt(edt_valor1.value) + parseInt(edt_valor2.value));
	h3_resultado.innerHTML = (parseInt(edt_valor1.value) + parseInt(edt_valor2.value));
}
});

btn_subtracao.addEventListener('click', () => {

if (edt_valor1.value === '' || edt_valor2.value === '')  { 
	window.alert('Informe números validos'); 
} else {
	//console.log ('Estou clicando no botão subtração');
	//console.log (parseInt(edt_valor1.value) - parseInt(edt_valor2.value));
	h3_resultado.innerHTML = (parseInt(edt_valor1.value) - parseInt(edt_valor2.value));
}
});


btn_divisao.addEventListener('click', () => {

if (edt_valor1.value === '' || edt_valor2.value === '')  { 
	window.alert('Informe números validos'); 
} else {
	//console.log ('Estou clicando no botão divisão');
	//console.log (parseInt(edt_valor1.value) / parseInt(edt_valor2.value));
	h3_resultado.innerHTML = (parseInt(edt_valor1.value) / parseInt(edt_valor2.value));
}
});


btn_multiplicao.addEventListener('click', () => {

if (edt_valor1.value === '' || edt_valor2.value === '')  { 
	window.alert('Informe números validos'); 
} else {
	//console.log ('Estou clicando no botão multiplicação');
	//console.log (parseInt(edt_valor1.value) * parseInt(edt_valor2.value));
	h3_resultado.innerHTML = (parseInt(edt_valor1.value) * parseInt(edt_valor2.value));
}
});

btn_limpar.addEventListener('click', () => {		
	btn_soma.innerHTML = '';
	//btn_subtracao = '';
	//btn_divisao = '';
	//btn_multiplicao = '';
	h3_resultado.innerHTML = '';
});
