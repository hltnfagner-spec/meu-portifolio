// Array contendo apenas o projeto do MVP
const projetos = [
    {
        titulo: "MVP - Portfólio Profissional",
        descricao: "Desenvolvimento da primeira versão do meu portfólio profissional como desenvolvedor de sistemas. Este projeto demonstra competências em HTML5 semântico, estilização com CSS3 (Flexbox/Grid) e manipulação dinâmica de elementos via JavaScript.",
        // Substitua o link abaixo pelo link do seu repositório ou do site no ar
        link: "https://github.com/SEU-UTILIZADOR/NOME-DO-REPOSITORIO" 
    }
];

// Seleciona a div onde o projeto será renderizado
const listaProjetos = document.getElementById('lista-projetos');

// Limpa a lista e renderiza apenas o MVP
listaProjetos.innerHTML = '';

function renderizarProjetos() {
    projetos.forEach(projeto => {
        const divCard = document.createElement('div');
        divCard.classList.add('projeto-card');

        divCard.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver Repositório</a>
        `;

        listaProjetos.appendChild(divCard);
    });
}

// Executa a função
renderizarProjetos();
