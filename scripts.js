// Seleciona os botões e os passos
const botoes = document.querySelectorAll('.btn-proximo');
const passos = document.querySelectorAll('.passo');

// Configura o evento para cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const proximoPasso = botao.getAttribute('data-proximo'); // Pega o passo para onde ir
        alternarPassos(proximoPasso);
    });
});

// Função para alternar os passos
function alternarPassos(proximo) {
    passos.forEach(passo => passo.classList.remove('ativo')); // Remove a classe "ativo" de todos
    const passoAtual = document.getElementById(`passo-${proximo}`);
    if (passoAtual) {
        passoAtual.classList.add('ativo'); // Adiciona a classe "ativo" ao próximo
    } else {
        console.error(`Passo ${proximo} não encontrado.`);
    }
}

// Define o primeiro passo como ativo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('passo-1').classList.add('ativo');
});
