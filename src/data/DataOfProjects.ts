import firstProject from "../../public/assets/projects-images/API_de_Filmes.jpeg"
import secondProject from "../../public/assets/projects-images/formulario_de_pagamento.png";
import thirdProject from "../../public/assets/projects-images/sistema_de_finança.png";

export const projects = [

  {
    id: 0,
    imgUrl: secondProject.src,
    title: "Formulário de Pagamento",
    description: "Formulario de pagamento descrição",
    type: "website",
    slug: "Formulário_de_Pagamento",
    url: "https://github.com/GabrielBarbosa07",

  },
  {
    id: 1,
    imgUrl: thirdProject.src,
    title: "Minhas Finanças",
    description: "Minhas finanças descrição",
    type: "website",
    slug: "Minhas_Finanças",
    url: "/url/finanças",

  },
  {
    id: 2,
    imgUrl: firstProject.src,
    title: "API de Filmes",
    description: "Api de filmes descrição",
    type: "website",
    slug: "API_de_Filmes",
    url: "/url",

  },
  {
    id: 3,
    imgUrl: firstProject.src,
    title: "API de Filmes",
    description: "",
    type: "website",
    slug: "projeto03",
    url: "/url",

  },
  {
    id: 4,
    imgUrl: thirdProject.src,
    title: "API de Filmes",
    description: "",
    type: "website",
    slug: "projeto04",
    url: "/url",

  },

];
