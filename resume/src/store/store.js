// store.js
import { reactive } from "vue";

export const store = reactive({

  expworks: [
    {
      title: "PROFESOR EXTERNO",
      place: "Universidad de Londres",
      year: "Marzo 2019 - ACTUAL",
      info: `Impartir diplomados de desarrollo web, diseño digital
        y seguridad informática. Diseño y creación de planes
        de estudio. Diseño de cursos grabados.
        Vanilla Js, HTML, CSS, UX/UI, Adobe XD, Herramientas
        para pentesting y auditorías (Kali Linux)`,
    },
    {
      title: "SOFTWARE   DEVELOPER",
      place: "Grupo Santillana",
      year: "Agosto 2020 - Octubre 2021",
      info: `Líder de proyecto. Arquitectura de apps web.
        Seguimiento de proyectos. Gestión de talento
        humano. Desarrollo de App Reactivas.
        React, Vue, Svelte, Vanilla, PHP, Babel, Webpack, S3,
        Docker, Git y Gitlab.`,
    },
    {
      title: "HTML ANALYST",
      place: "Linio",
      year: "Octubre 2018 - Noviembre 2019",
      info: `Creación de dashbords y componentes reactivos con
        Vanilla Js. Diseño, prototipado y maquetación de LP’s.
        Análisis de Tickets.
        Suite Adobe, Sketch, Vanilla Js, babel, ES6, Bootstrap,
        S3, Git y Github.`,
    },
    {
      title: "FREELANCE",
      place: "Nogara DevCode (marca personal)",
      year: "2017- ACTUAL",
      info: `Diseño de planes de estudio. Cursos digitales, en vivo
        y presenciales. Creación de contenido para Redes
        Sociales. Diseño y edición de video. Charlas, talleres y
        conferencias. Desarrollo de apps webs. Creación de
        campañas de Marketing.`,
    },
  ],

  events: [
    {
      img: require('@/assets/events/gdg.jpg'),
      url: "https://youtu.be/csFx8KbDvZw",
      title: "SPEAKER - GDG ORIZABA",
      desc: `Ponencia: Cross-Site Scripting <br> Panel de preguntas`,
    },
    {
      img: require('@/assets/events/azulschool.png'),
      url: "https://youtu.be/csFx8KbDvZw",
      title: "SPEAKER - AZUL WEB",
      desc: `Ponencia: Cross-Site Scripting <br> Panel de preguntas`,
    },
    {
      img: require('@/assets/events/techweek.jpg'),
      url: "https://youtu.be/csFx8KbDvZw",
      title: "SPEAKER - ARELIS",
      desc: `Ponencia: Cross-Site Scripting <br> Panel de preguntas`,
    },
    {
      img: "https://i.ytimg.com/vi/csFx8KbDvZw/hq720.jpg",
      url: "https://youtu.be/csFx8KbDvZw",
      title: "MENTOR - DATATHON",
      desc: `Hackathon BBVA 2021 <br> Mentor en UX/UI y Front-end`,
    },
    {
      img: require('@/assets/events/bbva.png'),
      url: "https://youtu.be/csFx8KbDvZw",
      title: "MENTOR - BBVA",
      desc: `Hackathon BBVA 2021 <br> Mentor en UX/UI y Front-end`,
    },
    {
      img: require('@/assets/events/cybersec.jpg'),
      url: "https://youtu.be/csFx8KbDvZw",
      title: "SPEAKER - CYBERSEC ON BITS",
      desc: `Ponencia: Cross-Site Scripting <br> Panel de preguntas`,
    },
    {
      img: "https://i.ytimg.com/vi/csFx8KbDvZw/hq720.jpg",
      url: "https://youtu.be/csFx8KbDvZw",
      title: "SPEAKER - C#MFECO",
      desc: "“Introducción a Svelte”",
    },
    {
      img: "https://i.ytimg.com/vi/csFx8KbDvZw/hq720.jpg",
      url: "https://youtu.be/csFx8KbDvZw",
      title: "SPEAKER - UNIVERSIDAD DE LONDRES",
      desc: "“Creando un modelo de inteligencia artificial”",
    },
    {
      img: "https://i.ytimg.com/vi/csFx8KbDvZw/hq720.jpg",
      url: "https://youtu.be/csFx8KbDvZw",
      title: "ASISTENTE- SENADO",
      desc: "“La tecnología para la transparencia y el combate a la corrupción”",
    },
    {
      img: "https://i.ytimg.com/vi/csFx8KbDvZw/hq720.jpg",
      url: "https://youtu.be/csFx8KbDvZw",
      title: "SPEAKER - UNAM",
      desc: "“El juego de la vida”",
    },
  ],

  interviewsUrls: [
    {
      img: "https://i.ytimg.com/vi/csFx8KbDvZw/hq720.jpg",
      url: "https://youtu.be/csFx8KbDvZw",
      title: "La ruta del Front-End",
      desc: "En esta ocasión tendremos una charla sobre Desarrollo Web, Front End y Comunidad Dev con @DevCaress CEO de NogaraDevCode una comunidad de Desarrolladores con Iniciativas muy frescas, no te lo pierdas, ya que nos esperan unas sorpresas muy interesantes 😃",
    },
    {
      img: "https://i.ytimg.com/vi/fA4v0q6gqn0/hq720.jpg",
      url: "https://youtu.be/fA4v0q6gqn0",
      title: "ATREVETE #10 − DEV CARESS",
      desc: "En este episodio nos acompaña Daniel. Un programador, específicamente desarrollador web, profesor y tiktoker quien nos cuenta su largo recorrido en el mundo laboral a su temprana edad, nos habla sobre sus altas y bajas en su proceso de aprendizaje. Trata temas como la importancia de plantearse objetivos, de como descubrir lo que te apasiona y mucho mas. También tiene su propia academia de cursos que esta por lanzar. Disfrútalo :)",
    },
    {
      img: "https://i.ytimg.com/vi/OXjfe9ybsZw/hq720.jpg",
      url: "https://youtu.be/OXjfe9ybsZw",
      title: "El comienzo del camino de los programadores",
      desc: "En este episodio hablamos con Devcaress desarrollador frontend con mas de 6 anios de experiencia, CEO de NogaraDevCode y speaker en talent land con el cual hablamos sobre sus inicios como programador y sus trayectoria, asi como nos conto algunas anécdotas y  consejos hacía los nuevos desarrolladores.",
    },
    {
      img: "https://i.ytimg.com/vi/0nM2PDgVDRc/hq720.jpg",
      url: "https://youtu.be/0nM2PDgVDRc",
      title: "El potencial de trabajar como programador | DevCaress⚡",
      desc: 'Platicamos con Daniel conocido como "DevCaress", el es desarrollador de software. apasionado de la tecnología y la programación, en esta charla les compartirá su experiencia que ha tenido en diferentes empleos y como llego a ser CEO de su actual academia de programación "Nogara DevCode"',
    },
  ],

  contactBtns: [
    {
      url: "#",
    },
    {
      url: "#",
    },
    {
      url: "#",
    },
    {
      url: "#",
    },
  ],
});
