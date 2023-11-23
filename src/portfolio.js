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
  nickname: "Desarrollador Full Stack Junior",
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
        "⚡ Curso de un año de duración en introduccción al Comercio Internacional",
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
    "  A continuación describo mis anteriores experiencias laborales a lo largo",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Trabajos",
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
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
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
