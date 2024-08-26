export const about = {
  aboutMe:
    "Jag är en ambitiös student inom frontend-utveckling och är alltid på jakt efter nya sätt att förbättra mina kunskaper och färdigheter, särskilt inom problemlösning och design. För mig är varje utmaning en möjlighet att växa och tänka utanför boxen. På min fritid, när jag inte är försjunken i kod, tycker jag om att utforska olika spelvärldar. Förutom att fördjupa mig i dessa spelvärldar, gillar jag att ta långa promenader i naturen, vilket hjälper mig att hålla mig aktiv och ger mig ro och inspiration. När tid finns över har jag också ett starkt intresse för att utveckla mina konstnärliga färdigheter, eftersom konst är en passion jag gärna vill vidareutveckla.",
  skill: [
    {
      name: "HTML",
      icon: "./assets/icons/html-icon.svg",
    },
    {
      name: "CSS",
      icon: "./assets/icons/css-icon.svg",
    },
    {
      name: "JavaScript",
      icon: "./assets/icons/javascript-icon.svg",
    },
    {
      name: "React",
      icon: "./assets/icons/react-js-icon.svg",
    },
    {
      name: "Tailwind",
      icon: "./assets/icons/tailwind-css-icon.svg",
    },
    {
      name: "NodeJS",
      icon: "./assets/icons/node-js-icon.svg",
    },
    {
      name: "Git",
      icon: "./assets/icons/git-icon.svg",
    },
    {
      name: "Figma",
      icon: "./assets/icons/figma-icon.svg",
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
    endDate: "Aug 23",
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
    imgSrc: "./assets/images/yumyum.png",
    projectName: "YumYum",
    description:
      "Detta projekt är en övning i frontend- och backend-utveckling. Frontend är byggd med React och Tailwind CSS och inkluderar funktioner för att lägga varor i en varukorg, skapa en order, se orderstatus och kvitto. Personal kan uppdatera en orders status till färdig. Backend är utvecklad med Node.js och hanterar meny och alla ordrar.",
    toolKit: [
      {
        name: "React",
        icon: "./assets/icons/react-js-icon.svg",
      },
      {
        name: "Tailwind",
        icon: "./assets/icons/tailwind-css-icon.svg",
      },
      {
        name: "JavaScript",
        icon: "./assets/icons/javascript-icon.svg",
      },
      {
        name: "NodeJS",
        icon: "./assets/icons/node-js-icon.svg",
      },
    ],
    buttonLink: [
      {
        name: "Github Repo",
        url: "https://github.com/kforsl/YumYum",
      },
      //   {
      //     name: "Live",
      //     url: "# ",
      //   },
    ],
  },
  {
    imgSrc: "./assets/images/whereIts.png",
    projectName: "Where It's @",
    description:
      "Detta var en individuell examinationsuppgift i kursen Frontendramverk. Appen är skapad med React och använder axios för API-hantering samt react-router-dom för routing mellan sidor. För avancerad statehantering har jag använt Zustand. Externa bibliotek som swiper för att bläddra mellan biljetter, styled-components för styling, och react-icons för ikoner har också använts.",
    toolKit: [
      {
        name: "React",
        icon: "./assets/icons/react-js-icon.svg",
      },
      {
        name: "JavaScript",
        icon: "./assets/icons/javascript-icon.svg",
      },
    ],
    buttonLink: [
      {
        name: "Live",
        url: "https://kforsl.github.io/whereItsAt/",
      },
      {
        name: "Github Repo",
        url: "https://github.com/kforsl/whereItsAt",
      },
    ],
  },
  {
    imgSrc: "./assets/images/myMovieDatabase.png",
    projectName: "MyMovieDatabase",
    description:
      "Detta var en individuell examinationsuppgift i kursen JavaScript med ES6+. En filmdatabas skapad med HTML, CSS och JavaScript visar de topp 20 filmerna och fem slumpade trailers på startsidan. Användare kan söka efter filmer och få detaljerad information vid klick och spara favoritfilmer.",
    toolKit: [
      {
        name: "HTML",
        icon: "./assets/icons/html-icon.svg",
      },
      {
        name: "CSS",
        icon: "./assets/icons/css-icon.svg",
      },
      {
        name: "JavaScript",
        icon: "./assets/icons/javascript-icon.svg",
      },
    ],
    buttonLink: [
      {
        name: "Github Repo",
        url: "https://github.com/kforsl/myMovieDatabase",
      },
    ],
  },
];
