import firstProject from "../assets/projects-images/API_de_Filmes.jpeg"
import secondProject from "../assets/projects-images/formulario_de_pagamento.png";
import thirdProject from "../assets/projects-images/sistema_de_finança.png";

export const projects = [

  {
    id: 0,
    imgUrl: firstProject.src,
    title: " API de Filmes",
    description: "Api de filmes descrição",
    type: "website",
    slug: "API_de_Filmes",
    url: "https://github.com/GabrielBarbosa07",
  },
  {
    id: 1,
    imgUrl: secondProject.src,
    title: "Formulário de Pagamento",
    description: "Formulario de pagamento descrição",
    type: "website",
    slug: " Formulário_de_Pagamento",
    url: "https://rocket-pay-self.vercel.app/",
  },
  {
    id: 2,
    imgUrl: thirdProject.src,
    title: "Minhas Finanças",
    description: "Minhas finanças descrição",
    type: "website",
    slug: "Minhas_Finanças",
    url: "https://sistema-de-financas-chi.vercel.app/",
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
