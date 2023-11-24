const settings = {
  isSplash: false,
};

const seo = {
  title: "Rodrigo Allende Portfolio",
  description:
    "Una persona apasionada que siempre busca trabajar en productos de principio a fin, desarrollando aplicaciones webs  sostenibles y escalables en el tiempo",
  og: {
    title: "Rodrigo Allende Portfolio",
    type: "website",
    url: "https://portfolio-rodrigo-allende.netlify.app/.com/",
  },
};

//Home Page
const greeting = {
  title: "Rodrigo Allende ",

  nickname: "Full Stack Junior",
  subTitle:
    "Una persona apasionada que siempre busca trabajar en productos de principio a fin, desarrollando aplicaciones web sostenibles y escalables en el tiempo para generar un impacto significativo",

  githubProfile: "https://github.com/RodriAllende",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/RodriAllende",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rodrigo-javier-allende/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:allenderodrigojavier@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/rodrigo.allende.965/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rodri.allend/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Hard Skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ HTML Metodología EMMET",
        "⚡ CSS Metodología BEM y SUIT",
        "⚡ Metodologia Agil Scrum",
        "⚡ Principios Solid y Clean Code",
        "⚡ Algoritmos y patrones de Diseño",
        "⚡ Inglés B2 Avanzado",
        "⚡ Inglés Técnico",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "skill-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "icon-park:github",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "skill-icons:mysql-dark",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: " Soft Skills",
      fileName: "DesignImg",
      skills: [
        "⚡ Capacidad de aprendizaje rapido",
        "⚡Creatividad aplicada a resultados",
        "⚡Resolución de problemas",
        "⚡ Gran habilidad para la comunicación",
        "⚡ Gestión eficiente del tiempo",
        "⚡ Gestion de Stress",
        "⚡ Adaptabilidad",
        "⚡ Automotivación",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Instituto Superior Politécnico Córdoba",
      subtitle: "Certificación Intermedia Desarrollador Full Stack Junior",
      logo_path: "logoispc.png",

      duration: "2021 - 2023",
      descriptions: [
        "⚡ Javascript",
        "⚡ Patrones de Diseño y Algoritmos",
        "⚡ Introducción a aplicaciones web",
        "⚡ Angular principiante",
        "⚡ PHP principiante",
        "⚡ Desarrollo de Aplicacion Web con Formulario , base de datos y tienda e-commerce",
      ],
      website_link: "https://www.ispc.edu.ar/",
    },
    {
      title: "Instituto Superior Politécnico Córdoba",
      subtitle: "Certificación Inicial Programador",
      logo_path: "logoispc.png",

      duration: "2021 - 2022",
      descriptions: [
        "⚡ Lógica en Programación ",
        "⚡ Java Principiante ",
        "⚡ Base de Datos SQL",
        "⚡ Metodologias agiles de Trabajo",
        "⚡ Diseño de Sitio Web responsive con HTML, CSS y Bootstrap ",
      ],
      website_link: "https://www.ispc.edu.ar/",
    },
    {
      title: "EF SET Education First",
      subtitle: "Certificación Nivel de Ingles",
      logo_path: "logoef.jpg",

      duration: "2023",
      descriptions: ["⚡ Certificación Nivel de Ingles C1  Advanced"],
      website_link: "https://www.efset.org/english-certificate/",
    },
    {
      title: "ILSC Brisbane",
      subtitle: "Certificación IV en Comercio Internacional",
      logo_path: "brilogo.jpg",

      duration: "2016 -2017",
      descriptions: [
        "⚡ Curso de un año de duración en introduccción al Comercio Internacional , cursado en Brisbane , Australia",
      ],
      website_link:
        "https://www.ilsc.com/hubfs/pdf/program-flyers/greystone-college/australia/BSB41115-certificate-IV-international-trade.pdf",
    },
    {
      title: "Colegio Universitario IES ",
      subtitle: "Técnico en Marketing",
      logo_path: "ieslogo.png",

      duration: "2008 -2012",
      descriptions: [
        "⚡ Curse la Tecnicatura durante 3 años ,deja la carrera con una materia y la tesis para recibirme.Pude aprender muchisimos conocimientos que los aplique a lo largo de mi trayectoria laboral. ",
      ],
      website_link: "https://www.ies21.edu.ar/",
    },
    {
      title: "Azafrán",
      subtitle: "Profesional Gastrónomico",
      logo_path: "azalogo.png",

      duration: "2005 -20007",
      descriptions: [
        "⚡  Formación de alta capacitación interdisciplinaria, brindando las herramientas y técnicas necesarias a través de programas, contenidos y dinámicas diseñados adquiriendo  los conocimientos y destrezas de forma idónea",
      ],
      website_link:
        "https://www.ilsc.com/hubfs/pdf/program-flyers/greystone-college/australia/BSB41115-certificate-IV-international-trade.pdf",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experiencia",
  subtitle: "Mis trabajos previos",
  description:
    "  A continuación describo mis anteriores experiencias laborales a lo largo de mi vida",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Manager General",
          company: "Distripack SAS ",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "agdlogo.png",
          duration: "Junio 2018- Junio 2023",
          location: "Córdoba, Argentina",
          description:
            "Realizar compras a nuestros proveedores,Tomar el control financiero de la empresa y Impulsar las decisiones de negocios.",
          color: "#000000",
        },
        {
          title: "Asesor de Ventas",
          company: "Prosegur",
          logo_path: "prologo.png",
          duration: "Noviembre 2017 - Junio 2019",
          location: "Madrid , España",
          description:
            " Gestión comercial para la incorporación de nuevos clientes al sistema de alarma de Prosegur y búsqueda de nuevos clientes potenciales desde diferentes canales",

          color: "#ee3c26",
        },
        {
          title: "Chef de Partie",
          company: "Atlantic Group",
          company_url:
            "https://atlanticgroup.com.au/venues/sophia/?gad_source=1&gclid=CjwKCAiAjfyqBhAsEiwA-UdzJDjZUV4FIbHqmqiRUsVqxK5xQMcNEkTqhuUap-CUHNez9GkW1iZJRxoCDyIQAvD_BwE ",
          logo_path: "alogo.jpg",
          duration: "Agosto 2013 - Agosto 2017",
          location: "Australia",
          description:
            "Trabajar rápidamente con diferentes equipos , cumpliendo objetivos, manteniendo siempre los estándares de calidad y presentación",
          color: "#0071C5",
        },
        {
          title: "Ejecutivo de Ventas",
          company: "Lóreal",
          company_url: "https://www.loreal.com/es-ar/argentina/",
          logo_path: "loreallogo.png",
          duration: "Octubre 2011 - Junio 2013",
          location: "Córdoba, Argentina",
          description:
            " Capacitación del personal en técnicas de venta y desarrollo de imagen empresarial.	Desarrollo de salones como punto de venta",

          color: "#0071C5",
        },
        {
          title: "Asesor Comercial",
          company: "Kadicard",
          company_url: "",
          logo_path: "brand.gif",
          duration: "Octubre 2007 - Julio 2009",
          location: "Córdoba, Argentina",
          description:
            "Captacion de nuevos clientes y atención al cliente en sucursal",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projectos",
  description:
    "En esta sección encontras mi proyectos desarrollados en el Instituto , los hechos hasta el momento en ODIN PROYECT y algunos freelance.En Github están los links para Live preview de los sitios.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {},
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
