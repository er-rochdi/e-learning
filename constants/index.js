


export const formations = [
  {
    id: 1,
    title: 'Apprendre C# - Les fondamentaux',
    description: 'Apprenez les bases de la programmation en C#.',
    image: '/c-sharp.webp',
    donneReyal: 'Introduction au C#', 
    videoformations: [
      {
        id: 1,
        title: 'C# Basics',
        description: 'Apprenez les bases du langage C#.',
        image: '/image1.jpg',
        formationId: 1,
        durition: '1h 30m',
        chapitre: [
          { id: 1, title: 'Introduction', duration: '30min', score: '10%',video: 'https://www.youtube.com/embed/4UZrsTqkcW4',formationId: 1, },
          { id: 2, title: 'Syntaxe de base', duration: '16min', score: '20%' ,video: 'https://www.youtube.com/embed/sNMtjs_wQiE',formationId: 1,},
          { id: 3, title: 'Structures de contrôle', duration: '12min', score: '40%',video: 'https://www.youtube.com/embed/4UZrsTqkcW4',formationId: 1, },
          { id: 4, title: 'Programmation orientée objet', duration: '15min', score: '60%',video: 'https://www.youtube.com/embed/sNMtjs_wQiE',formationId: 1, },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Maîtriser Photoshop',
    description: 'Apprenez à utiliser Photoshop pour le design et la retouche photo.',
    image: '/photoshop.jpg',
    donneReyal: 'Formation Photoshop', // Added donne reyal
    videoformations: [
      {
        id: 1,
        title: 'Les bases de Photoshop',
        description: 'Apprenez les outils essentiels pour le design graphique.',
        image: '/photoshop.jpg',
        formationId: 2,
        durition: '2h 00m',
        chapitre: [
          { id: 1, title: 'Introduction à Photoshop', duration: '20min', score: '15%',video: 'https://www.youtube.com/embed/BMGirukzOPU' ,formationId: 2,},
          { id: 2, title: 'Les calques', duration: '25min', score: '25%' ,video: 'https://www.youtube.com/embed/abcdefg12345',formationId: 2,},
          { id: 3, title: 'Les outils de retouche', duration: '30min', score: '35%',video: 'https://www.youtube.com/embed/BMGirukzOPU',formationId: 2,},
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Programmation en Java',
    description: 'Apprenez à coder en Java, un langage polyvalent et puissant.',
    image: '/java.webp',
    donneReyal: 'Formation en Java', // Added donne reyal
    videoformations: [
      {
        id: 1,
        title: 'Les bases de Java',
        description: 'Introduction à Java et à la programmation orientée objet.',
        image: '/java.webp',
        formationId: 3,
        durition: '3h 00m',
        chapitre: [
          { id: 1, title: 'Introduction au langage Java', duration: '40min', score: '20%' ,video: 'https://www.youtube.com/embed/l9AzO1FMgM8', formationId: 3,},
          { id: 2, title: 'Les classes et objets', duration: '30min', score: '25%',video: 'https://www.youtube.com/embed/abcdefg12345', formationId: 3,},
          { id: 3, title: 'Les collections', duration: '50min', score: '30%', video: 'https://www.youtube.com/embed/l9AzO1FMgM8',formationId: 3,},
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Développement Web avec HTML et CSS',
    description: 'Apprenez les bases de la création de sites web avec HTML et CSS.',
    image: '/html.webp',
    donneReyal: 'Formation en Développement Web', 
    videoformations: [
      {
        id: 1,
        title: 'Les bases de HTML et CSS',
        description: 'Introduction à la structure et au style des pages web.',
        image: '/html.webp',
        formationId: 4,
        durition: '2h 30m',
        chapitre: [
          { id: 1, title: 'Structure HTML', duration: '40min', score: '15%', video: 'https://www.youtube.com/embed/qz0aGYrrlhU', formationId: 4,},
          { id: 2, title: 'Mise en page avec CSS', duration: '60min', score: '30%' , video: 'https://www.youtube.com/embed/opqrst56789', formationId: 4,},
          { id: 3, title: 'Responsive design', duration: '50min', score: '45%', video: 'https://www.youtube.com/embed/opqrst56789', formationId: 4,},
          { id: 4, title: 'Animations CSS', duration: '40min', score: '60%', video: 'https://www.youtube.com/embed/opqrst56789',  formationId: 4,},
        ],
      },
    ],
  },
];


export const videoformations = [
  {
    id: 1,
    title: 'React Basics',
    description: 'Learn the fundamentals of React.',
    image: '/image1.jpg',
    video: 'https://www.youtube.com/embed/4UZrsTqkcW4',
    formationId: 1,
    durition: '1h 30m'
  },
  {
    id: 2,
    title: 'Next.js Mastery',
    description: 'Master server-side rendering and more.',
    image: '/image2.jpg',
    video: 'https://www.youtube.com/embed/rq7DvjN1Gco',
    formationId: 1,
    durition: '2h 30m'
  },
  {
    id: 3,
    title: 'Vue.js Basics',
    description: 'Learn the fundamentals of Vue.js.',
    image: '/image3.jpg',
    video: 'https://www.youtube.com/embed/LG7ff9TVWjM',
    formationId: 1,
    durition: '1h 30m'
  },
];

export const footerLinks = [
  {
    title: "À propos",
    links: [
      { title: "Comment ça fonctionne", url: "/" },
      { title: "En vedette", url: "/" },
      { title: "Partenariats", url: "/" },
      { title: "Relations d'affaires", url: "/" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { title: "Événements", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Inviter un ami", url: "/" },
    ],
  },
  {
    title: "Réseaux sociaux",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];



