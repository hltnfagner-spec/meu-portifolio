// Lista com os meus projetos. Por enquanto só tem o MVP do portfólio
const projetos = [
    {
        titulo: "MVP - Portfólio Profissional",
        descricao: "Desenvolvimento da primeira versão do meu portfólio profissional como desenvolvedor de sistemas. Este projeto demonstra competências em HTML5 semântico, estilização com CSS3 (Flexbox/Grid) e manipulação dinâmica de elementos via JavaScript.",
        // Link do meu projeto publicado no GitHub Pages
        link: "https://hltnfagner-spec.github.io/meu-portifolio/" 
    }
];

// Pegando a div lá do HTML onde os cards vão ficar
const listaProjetos = document.getElementById('lista-projetos');

// Limpo a div por garantia antes de colocar os projetos
listaProjetos.innerHTML = '';

// Função para passar por cada projeto e criar o HTML dele na tela
function renderizarProjetos() {
    projetos.forEach(projeto => {
        // Cria a div que vai ser o card
        const divCard = document.createElement('div');
        divCard.classList.add('projeto-card');

        // Coloca o título, texto e link dentro do card
        divCard.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver Repositório</a>
        `;

        // Joga o card pronto lá pro HTML
        listaProjetos.appendChild(divCard);
    });
}

// Roda a função assim que o arquivo carrega
renderizarProjetos();
