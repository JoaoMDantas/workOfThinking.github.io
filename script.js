const btnGerar = document.getElementById('btnGerar');
const btnVerificar = document.getElementById('btnVerificar');
const inputText = document.getElementById('inputText');
const result = document.getElementById('result');

// Array com textos aleatórios
const textos = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"Suspendisse ac ligula consectetur, efficitur quam eu, luctus leo.",
	"Mauris nec dui eget dolor imperdiet faucibus non id quam.",
	"Praesent a nisl non velit suscipit imperdiet in sed libero.",
	"Donec fermentum nunc vitae lectus pharetra, sit amet bibendum nunc iaculis.",
	"Aliquam ac dolor at felis suscipit ullamcorper.",
	"Vestibulum non sapien non nibh bibendum feugiat vel vel eros.",
	"Phasellus vehicula urna sed augue euismod facilisis.",
	"Integer et lectus vel felis eleifend malesuada sit amet at est.",
	"Etiam et augue vitae lorem dapibus placerat."
];

// Função para gerar texto aleatório
function gerarTextoAleatorio() {
	const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
	inputText.value = textoAleatorio;
}

// Função para verificar informação
function verificarInformacao() {
	const texto = inputText.value.toLowerCase();

	if (texto.includes('verdade')) {
		result.innerText = 'A informação é verdadeira.';
		result.style.color = 'green';
	} else {
		result.innerText = 'A informação não é verdadeira.';
		result.style.color = 'red';
	}
}

btnGerar.addEventListener('click', gerarTextoAleatorio);
btnVerificar.addEventListener('click', verificarInformacao);
