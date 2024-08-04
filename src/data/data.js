export const about = {
  aboutMe:
    "Jag är en passionerad och ambitiös individ som trivs i en dynamisk arbetsmiljö där jag kontinuerligt kan vidga mina kunskaper och utmana mig själv. Genom min erfarenhet har jag utvecklat en skicklighet i att felsöka och lösa problem, vilket jag ser som en nyckelkompetens. Min starka tro på samarbete har gjort mig till en uppskattad kollega som alltid strävar efter att stötta och hjälpa andra när behov uppstår.",
  skill: [
    {
      name: "HTML",
      icon: "./src/assets/icons/html-icon.svg",
    },
    {
      name: "CSS",
      icon: "./src/assets/icons/css-icon.svg",
    },
    {
      name: "JavaScript",
      icon: "./src/assets/icons/javascript-icon.svg",
    },
    {
      name: "React",
      icon: "./src/assets/icons/react-js-icon.svg",
    },
    {
      name: "Tailwind",
      icon: "./src/assets/icons/tailwind-css-icon.svg",
    },
    {
      name: "NodeJS",
      icon: "./src/assets/icons/node-js-icon.svg",
    },
    {
      name: "Git",
      icon: "./src/assets/icons/git-icon.svg",
    },
    {
      name: "Figma",
      icon: "./src/assets/icons/figma-icon.svg",
    },
  ],
};

export const experience = [
  {
    startDate: "Aug 23",
    endDate: "Nuvarande ",
    company: "Folkuniversitetet Yrkeshögskola",
    type: "Frontendutvecklare",
    description:
      "Utbildningen är en yrkesutbildning för att bli en kompetent frontendutvecklare, där jag aktivt deltar i en mångfald av kurser som syftar till att bygga en stark grund och färdigheter inom webbutveckling. Utbildningen omfattar följande områden:",
    list: [
      "UX / UI",
      "HTML / CSS",
      "Datalogiskt tänkade",
      "Javascript",
      "Agilt Arbete",
      "Frontendramverk",
      "Backend med Node.js",
      "Utvecklingsverktyg och deplyment",
      "Full stack webbapplikation",
    ],
  },
  {
    startDate: "Jan 16",
    endDate: "",
    company: "Onitio",
    type: "Servicetekniker",
    description:
      "I rollen som Servicetekniker har jag installerat samt utfört felsökning av IT-system inom kollektivtredafikens fordon. Jag har både jobbat i större projekt i grupp samt i mindre uppdrag självgående med eget ansvar. Jag har även fått ha ansvaret på plats under projekt och haft upplärning med nya kollegor. ",
    list: [
      "Arbeta i team med ansvar",
      "Arbeta självständingt med eget ansvar",
      "Upplärning av nyanställda",
    ],
  },
];

export const project = [
  {
    imgSrc: "../src/assets/images/portfolio.png",
    projectName: "Portfolio Websida",
    description:
      "Detta projekt innefattar skapandet av min personliga portfoliosida med hjälp av React och Tailwind CSS. Målet med projektet var att skapa en stilren, responsiv och användarvänlig webbplats där jag kan visa upp mina färdigheter, erfarenheter och tidigare arbeten.",
    toolKit: [
      {
        name: "React",
        icon: "./src/assets/icons/react-js-icon.svg",
      },
      {
        name: "Tailwind",
        icon: "./src/assets/icons/tailwind-css-icon.svg",
      },
      {
        name: "JavaScript",
        icon: "./src/assets/icons/javascript-icon.svg",
      },
    ],
    buttonLink: [
      {
        name: "Figma",
        url: "https://www.figma.com/design/6BZbLNSAvTWHwI6E21n6NZ/Portfolio?node-id=20-205&t=GaQNJRh3tLRoVa8i-1",
      },
      {
        name: "Github",
        url: "#",
      },
      {
        name: "Live",
        url: "# ",
      },
    ],
  },
  {
    imgSrc: "../src/assets/images/yumyum.png",
    projectName: "YumYum",
    description:
      "Detta projekt är en övning i frontend- och backend-utveckling. Frontend är byggd med React och Tailwind CSS och inkluderar funktioner för att lägga varor i en varukorg, skapa en order, se orderstatus och kvitto. Personal kan uppdatera en orders status till färdig. Backend är utvecklad med Node.js och hanterar meny och alla ordrar.",
    toolKit: [
      {
        name: "React",
        icon: "./src/assets/icons/react-js-icon.svg",
      },
      {
        name: "Tailwind",
        icon: "./src/assets/icons/tailwind-css-icon.svg",
      },
      {
        name: "NodeJS",
        icon: "./src/assets/icons/node-js-icon.svg",
      },
    ],
    buttonLink: [
      {
        name: "Github",
        url: "https://github.com/",
      },
      {
        name: "Live",
        url: "https://www.google.com/",
      },
    ],
  },
  {
    imgSrc: "./src/assets/images/whereIts.png",
    projectName: "Where It's @",
    description:
      "Detta var en individuell examinationsuppgift i kursen Frontendramverk. Appen är skapad med React och använder axios för API-hantering samt react-router-dom för routing mellan sidor. För avancerad statehantering har jag använt Zustand. Externa bibliotek som swiper för att bläddra mellan biljetter, styled-components för styling, och react-icons för ikoner har också använts.",
    toolKit: [
      {
        name: "React",
        icon: "./src/assets/icons/react-js-icon.svg",
      },
      {
        name: "JavaScript",
        icon: "./src/assets/icons/javascript-icon.svg",
      },
    ],
    buttonLink: [
      {
        name: "Github",
        url: "https://github.com/kforsl/whereIts-",
      },
      {
        name: "Live",
        url: "https://www.google.com/",
      },
    ],
  },
];
