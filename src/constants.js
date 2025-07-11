// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import manitLogo from './assets/education_logo/manit.jpg';
import bsaLogo from './assets/education_logo/manit.jpg';
import vpsLogo from './assets/education_logo/manit.jpg';

// Project Section Logo's
import datacrafterLogo from './assets/work_logo/datacrafter.jpg';
import luxoraLogo from './assets/work_logo/luxora.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
import SimonGameLogo from './assets/work_logo/SimonGame.png';
import PortfolioLogo from './assets/work_logo/Portfolio.png';
import FrostyFoodLogo from './assets/work_logo/FrostyFood.png';
import TicTacToeLogo from './assets/work_logo/TicTacToe.png';
import randomGifsLogo from './assets/work_logo/randomGifsss.jpg';
import shoppingCartLogo from './assets/work_logo/shoppingCart.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: manitLogo,
      school: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
      date: "August 2023 - July 2026",
      grade: "8.72 CGPA",
      desc: "I hold a Master’s degree in Computer Applications (MCA) from Maulana Azad National Institute of Technology (MANIT), Bhopal. During my academic journey, I developed a strong foundation in core areas of computer science including programming, software development, and system design. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Web Development, and Software Engineering. These subjects not only strengthened my technical knowledge but also enhanced my problem-solving abilities and logical thinking. My time at MANIT was instrumental in shaping my passion for technology and boosting my practical skills in both backend and frontend development.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Holkar Science College, Indore",
      date: "Sept 2020 - Aug 2023",
      grade: "72.05%",
      desc: "I completed my Bachelor’s degree in Computer Science from Holkar Science College, Indore. During this time, I explored a wide range of subjects that deepened my understanding of computing and technology, including Data Structures, Algorithms, Web Development, and Database Management Systems. Alongside technical learning, my time at Holkar also helped me grow personally—I had the opportunity to interact with diverse peers, build meaningful friendships, and adapt to new environments, which greatly enhanced my communication and interpersonal skills.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Royal Heights Heigher Secondary School, Zirapur",
      date: "July 2019 - March 2020",
      grade: "86.6%",
      desc: "I completed my Class 12 education from Royal Heights Higher Secondary School, Zirapur, with a focus on the PCMB stream—Physics, Chemistry, Mathematics, and Biology. This combination of subjects not only strengthened my analytical and logical reasoning abilities but also provided a well-rounded foundation in both mathematical and life sciences.",
      degree: "XII - PCMB",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vijaya Convent High School, Zirapur",
      date: "July 2017 - March 2018",
      grade: "94%",
      desc: "I completed my Class 10 education at Vijaya Convent High School, Zirapur, with a strong academic focus on Science and Computer Fundamentals. This early exposure to computer concepts sparked my interest in technology and laid the groundwork for my future studies in the field of computer science.",
      degree: "X, Science with English and Computer",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "DataCrafter",
      description:
        "DataCrafter is an intelligent web app that lets users upload and manage files like CSV, Excel, JSON. It enables smart sorting and searching using DSA concepts such as bubble sort, quick sort, linear and binary search. Users can customize operations by column, order, type, or length, and also edit, delete, or fill missing data. With secure login via email + OTP or password.",
      image: datacrafterLogo,
      tags: [ "React JS","HTML", "TailwindCSS", "JavaScript", "API","Node.js", "Express.js","MongoDB"],
      github: "https://github.com/Sonalijatav/DataCrafter.git",
      webapp: "https://data-crafter.vercel.app/",
    },
    {
      id: 1,
      title: "Luxora",
      description:
        "Luxora is a modern and user-friendly eCommerce website built to provide a seamless online shopping experience. It features product browsing by categories, detailed product views, dynamic search and filtering, and a secure cart and checkout process. Users can create accounts, manage orders, and receive updates through a clean, responsive interface.",
      image: luxoraLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS","Bootstrap"],
      github: "https://github.com/Sonalijatav/Luxora.git",
      // webapp: "https://csprep.netlify.app/",
    },
    // {
    //   id: 2,
    //   title: "TaxiTop Advertisement",
    //   description:
    //     "Taxi Top Advertisement is a dynamic outdoor advertising concept that involves placing digital or static ads on the tops of taxis to maximize brand visibility in high-traffic areas. The system is designed to manage and rotate advertisements based on location, time, or campaign priority. This approach offers businesses a cost-effective way to reach a wider audience on the move, while enabling real-time content updates and campaign tracking for better engagement and reach analysis.",
    //   image: luxoraLogo,
    //   tags: ["React JS", "API", "HTML", "TailwindCSS", "MongoDB","Express","Node.js"],
    //   github: "https://github.com/Sonalijatav/Luxora.git",
    //   // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    {
      id: 3,
      title: "Simon Game",
      description:
        "Simon Game is a classic memory-based game built using HTML, CSS, and JavaScript. The game challenges users to repeat an increasingly complex sequence of colors and sounds. With each correct round, the pattern grows longer, testing the player’s memory and focus. It’s a fun and interactive project that demonstrates logic building, event handling, and UI interactivity using core web technologies.",
      image: SimonGameLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Sonalijatav/SimonGame.git",
      webapp: "https://sonalijatav.github.io/SimonGame/7.4simonGame.html",
    },
    {
      id: 4,
      title: "Show-My-Skill",
      description:
        "Personal Portfolio Website is a responsive and interactive web application built using React and CSS. It includes dedicated sections like Home, Projects, Skills, and Contact Me, allowing visitors to explore my work, technical abilities, and reach out easily. The site offers smooth navigation, clean design, and highlights my journey, achievements, and development projects in a professional format.",
      image: PortfolioLogo,
      tags: ["React.js", "HTML", "CSS"],
      github: "https://github.com/Sonalijatav/PortfolioReact.git",
      webapp: "https://github.com/Sonalijatav/PortfolioReact.git",
    },
    {
      id: 5,
      title: "FrostyFood",
      description:
        "Frosty Food is a static website designed using HTML and CSS, focused on showcasing a food-related business. It includes key sections like Home, About, Services, Clients, Reviews, and Contact, providing a complete overview of the brand. The site features a clean layout, intuitive navigation, and visually appealing design to highlight offerings and build trust with potential customers.",
      image: FrostyFoodLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Sonalijatav/FrostyFood.git",
      webapp: "https://sonalijatav.github.io/FrostyFood/FrostyFood/2%20assignment/",
    },
    {
      id: 6,
      title: "Tic-Tac-Toe",
      description:
        "Tic Tac Toe is a classic two-player game built using HTML, CSS, and JavaScript. It features a simple and interactive 3x3 grid where players take turns marking X and O. The game includes logic to detect wins, draws, and allows for instant replay. It demonstrates core JavaScript concepts like DOM manipulation, event handling, and game logic implementation in an engaging way.",
      image: TicTacToeLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Sonalijatav/Tic-Tac-Toe.git",
      webapp: "https://sonalijatav.github.io/Tic-Tac-Toe/",
    },
    {
      id: 7,
      title: "Random-Gifs-Generator",
      description:
        "Random GIFs Generator is a fun and interactive web app built using React, HTML, and CSS that fetches and displays random GIFs using a third-party API (like Giphy API). With a single click, users can instantly generate and view a new GIF, making it an engaging way to explore trending or themed content. This project demonstrates API integration, state management, and dynamic rendering using core React concepts.",
      image: randomGifsLogo,
      tags: ["React JS", "API", "HTML", "CSS"],
      github: "https://github.com/Sonalijatav/RandomGifsGenerator.git",
      webapp: "https://github.com/Sonalijatav/RandomGifsGenerator.git",
    },
    {
      id: 8,
      title: "Shopping Cart",
      description:
        "Shopping Cart is an interactive web application built using React that allows users to add items, adjust quantities, and view real-time price updates based on selected products. The cart dynamically updates the total amount as users increase or decrease item quantities, providing a smooth and responsive shopping experience. This project showcases state management, component-based design, and conditional rendering in React.",
      image: shoppingCartLogo,
      tags: ["React JS", "HTML", "CSS"],
      github: "https://github.com/Sonalijatav/myshoppingcart.git",
      webapp: "https://github.com/Sonalijatav/myshoppingcart.git",
    },
  ];  