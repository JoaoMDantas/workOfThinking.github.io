const btnGerar = document.getElementById('btnGerar');
const btnVerificar = document.getElementById('btnVerificar');
const inputText = document.getElementById('inputText');
const result = document.getElementById('result');
const text= document.querySelector('p');

const textos = ['A professora vai dar nota máxima para o nosso trabalho?',
    'É verdade que o monte Everest cresce?',
	'Afonsinho ama mozart?' ,
	'Bolsonaro é o presidente do Brasil?',
	"Óleo é mais denso que água?",
	"O morcego é o único mamífero que voa?" ,
	"Hitler era alemão?",
	"As tartarugas sao répteis?",
	"Messi é autista?",
	"Bob marley morreu por causa de maconha?" ,
	"Todas as perguntas feitas aqui são 100% confiáveis ?" ,
	"Os mosquitos são animais letais?",
	"O Brasil é um grande produtor de café?",
	
];


// Função para gerar texto aleatório
function gerarTextoAleatorio() {
	const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
	inputText.value = textoAleatorio;
}

// Função para verificar informação
function verificarInformacao() {
	const texto = inputText.value.toLowerCase();

	if (texto.includes('confiáveis')|| texto.includes('brasil') || texto.includes('professora') ||texto.includes('mosquitos') || texto.includes('everest')|| texto.includes('afonsinho')|| texto.includes('morcego')||texto.includes('tartarugas')) {
		result.innerText = 'A informação é verdadeira.';
		result.style.color = 'green';
		if(texto.includes('professora')){text.textContent="A professora gosta muito da nossa equipe!";}
		if(texto.includes('confiáveis')){text.textContent="Sim, nossa equipe é muito responsável.";}
		if(texto.includes('brasil')){text.textContent="O Brasil é o maior produtor de café do mundo.";}
		if(texto.includes('afonsinho')){text.textContent="Afonsinho e Mozart são grandes amigos.";}
		if(texto.includes('tartaruga')){text.textContent="Sim, pois possuem uma série de características que as incluem neste grupo de animais e, ao mesmo tempo, as diferenciam dos anfíbios.";}
		if(texto.includes('morcego')){text.textContent=" É o único mamífero capaz de voar, estima-se que mais de 1.200 espécies diferentes de morcegos habitam o planeta.";}
		if(texto.includes('everest')){text.textContent="Estima-se que, a cada ano, o monte Everest cresça 4 milímetros."};
		if(texto.includes('mosquitos')){text.textContent="Os mosquitos são os animais mais letais do mundo, causando mais mortes humanas do que todas as guerras da história. Esses seres vivos matam cerca de 725 mil humanos anualmente.";}
		
	}
		
		
	else if  (texto.includes('bolsonaro')|| texto.includes('óleo') || texto.includes('hitler') ||texto.includes('messi')|| texto.includes('bob')){
		result.innerText = 'A informação não é verdadeira.';
		result.style.color = 'red';
		if(texto.includes('bolsonaro')){text.textContent="O presidente do Brasil se chama Lula.";}
		if(texto.includes('óleo')){text.textContent="As ligações entre as moléculas dos ácidos graxos que formam a o óleo são menos fortes do que as que ligam as moléculas de H2O. Isso faz com que a substância ser menos densa do que a água. Existe ainda outra explicação para esse fato, baseada na segunda lei da termodinâmica.";}
		if(texto.includes('hitler')){text.textContent="Adolf Hitler (1889-1945) foi um político e ditador de origem austríaca que governou a Alemanha.";}
		if(texto.includes('messi')){text.textContent=" Não. Messi não é autista e nunca foi diagnosticado como tal.";}
		if(texto.includes('bob')){text.textContent="A morte de Bob Marley foi causada por um câncer de pele do tipo melanoma maligno.";}
	
	}


}
btnGerar.addEventListener('click', gerarTextoAleatorio);
btnVerificar.addEventListener('click', verificarInformacao);
