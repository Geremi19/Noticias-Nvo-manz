// src/utils/data_weekly.js

import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { CiTimer, CiCalendar} from "react-icons/ci";
export const newsItems = [
  {
    id: 1,
    image: "./News_image/puerto1.jpg",
    title: "Puerto de Manzanillo: ¿por qué es el más importante de México?",
    date: { icon: <CiCalendar />, date: "27 AUGUST, 2024"},
    readTime: { icon: <CiTimer />, time: "20 MINS" },
    description:
      "Browned Butter And Brown Sugar Caramelly Goodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite",
  },
  {
    id: 2,
    image: "./News_image/puerto1.jpg",
    title: "Título de la segunda noticia importante",
    date: { icon: <CiCalendar />, date: "25 AUGUST, 2024"},
    readTime: { icon: <CiTimer />, time: "15 MINS" },
    description:
      "Descripción breve de la segunda noticia con información relevante y atractiva para los lectores",
  },
  {
    id: 3,
    image: "./News_image/puerto1.jpg",
    title: "Título de la tercera noticia destacada",
    date: { icon: <CiCalendar />, date: "23 AUGUST, 2024"},
    readTime: { icon: <CiTimer />, time: "18 MINS" },
    description:
      "Contenido descriptivo de la tercera noticia con detalles importantes y contexto adicional",
  },
  {
    id: 4,
    image: "./News_image/puerto1.jpg",
    title: "Título de la cuarta noticia relevante",
    date: { icon: <CiCalendar />, date: "20 AUGUST, 2024"},
    readTime: { icon: <CiTimer />, time: "12 MINS" },
    description:
      "Información detallada sobre la cuarta noticia con datos relevantes y actualizados",
  },
  {
    id: 5,
    image: "./News_image/puerto1.jpg",
    title: "Título de la quinta noticia interesante",
    date:  {icon: <CiCalendar />, date: "18 AUGUST, 2024"},
    readTime: { icon: <CiTimer />, time: "22 MINS" },
    description:
      "Descripción completa de la quinta noticia con análisis y perspectivas únicas",
  },
  {
    id: 6,
    image: "./News_image/puerto1.jpg",
    title: "Título de la sexta noticia actualizada",
    date: { icon: <CiCalendar />, date: "15 AUGUST, 2024"},
    readTime: { icon: <CiTimer />, time: "16 MINS" },
    description:
      "Contenido informativo de la sexta noticia con información valiosa para los lectores",
  },
];

export const socialMedia = [
  { name: "Facebook", icon: <TiSocialFacebook />, color: "#1877F2", url: "#" },
  { name: "Instagram", icon: <TiSocialInstagram />, color: "#E4405F", url: "#" },
  { name: "Youtube", icon: <TiSocialYoutube />, color: "#FF0000", url: "#" },
  { name: "X", icon: <FaXTwitter />, color: "#000000", url: "#" },
];
