import firstProject from "../assets/projects-images/API_de_Filmes.jpeg";
import secondProject from "../assets/projects-images/formulario_de_pagamento.png";
import thirdProject from "../assets/projects-images/sistema_de_finança.png";
import fourthProject from "../assets/projects-images/calculadora.png";
import fifthProject from "../assets/projects-images/clima_tempo.png";

export const projects = [

  {
    id: 0,
    imgUrl: firstProject.src,
    title: "API de Filmes",
    description: "Site para pesquisa e consulta de filmes, séries e desenhos. Foi desenvolvido com React e com seus Hooks. Também incrementei um sistema de autenticação de usuário utilizando contextAPI e localStorage para armazenar os usuários cadastrados.",
    type: "website",
    slug: "API_de_Filmes",
    url: "https://biblioteca-de-filmes-beta.vercel.app/",
  },
  {
    id: 1,
    imgUrl: secondProject.src,
    title: "Formulário de Pagamento",
    description: "Site desenvolvido em um evento da rocketseat. O objetivo foi desenvolver um formulário de pagamento com cartão de crédito. Nele foi utilizado imask junto com RegExp, para as verificações dos campos.",
    type: "website",
    slug: "Formulário_de_Pagamento",
    url: "https://rocket-pay-self.vercel.app/",
  },
  {
    id: 2,
    imgUrl: thirdProject.src,
    title: "Minhas Finanças",
    description: "Site desenvolvido para servir como sistema de controle financeiro pessoal.  Nele foi utilizado o localStorage para armazenar as movimentações na conta, e alguns Hooks do React.",
    type: "website",
    slug: "Minhas_Finanças",
    url: "https://sistema-de-financas-chi.vercel.app/",
  },
  {
    id: 3,
    imgUrl: fourthProject.src,
    title: "Calculadora",
    description: "Calculadora feita com Javascript Vanilla. Incluso com o modo de troca de temas.",
    type: "website",
    slug: "Calculadora_Js",
    url: "https://gabrielbarbosa07.github.io/Calculadora_JS/",
  },
  {
    id: 4,
    imgUrl: fifthProject.src,
    title: "Clima Tempo",
    description: "Site para a verificação de tempo em qualquer cidade do mundo. Utilizei o vite para a criação do projeto, junto com o boilerplate de Typescript",
    type: "website",
    slug: "Clima_Tempo",
    url: "https://clima-tempo-six.vercel.app/",
  },

];
