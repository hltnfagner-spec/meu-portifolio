// Array de objetos contendo os projetos
const projetos = [
    {
        titulo: "Sistema de Gestão para Apicultura",
        descricao: "Plataforma web planejada para auxiliar o controle de colmeias e produção de mel na associação local.",
        link: "#"
    },
    {
        titulo: "Landing Page Corporativa",
        descricao: "Página de captura de leads desenvolvida com HTML, CSS e Flexbox para um negócio local.",
        link: "#"
    },
    {
        titulo: "Calculadora de Insumos",
        descricao: "Aplicativo em JavaScript para calcular proporções de insumos agrícolas e ração.",
        link: "#"
    }
];

// Seleciona a div onde os projetos serão renderizados
const listaProjetos = document.getElementById('lista-projetos');

// Função para renderizar os projetos dinamicamente
function renderizarProjetos() {
    projetos.forEach(projeto => {
        // Cria os elementos HTML
        const divCard = document.createElement('div');
        divCard.classList.add('projeto-card');

        const h3 = document.createElement('h3');
        h3.textContent = projeto.titulo;

        const p = document.createElement('p');
        p.textContent = projeto.descricao;

        const a = document.createElement('a');
        a.href = projeto.link;
        a.textContent = "Ver Projeto";
        a.target = "_blank";

        // Monta o card
        divCard.appendChild(h3);
        divCard.appendChild(p);
        divCard.appendChild(a);

        // Adiciona o card à lista na tela
        listaProjetos.appendChild(divCard);
    });
}

// Executa a função quando a página carrega
renderizarProjetos();
