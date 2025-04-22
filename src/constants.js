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

//Educatio  section Logo's
import jisLogo from './assets/education_logo/JIS_Logo.png';
import icvpLogo from './assets/education_logo/icvp_logo.png';
import mhsLogo from './assets/education_logo/MHS_logo.png';

// Project Section Logo's
import letsmeet from './assets/work_logo/Lets_Meet.png';
import portfolio from './assets/work_logo/Portfolio.png';
import quickride from './assets/work_logo/Quick_Ride.png';
import shortestpath from './assets/work_logo/Shortest_Path.png';


export const SkillsInfo = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'SASS', logo: sassLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'React JS', logo: reactjsLogo },
        { name: 'Angular', logo: angularLogo },
        { name: 'Redux', logo: reduxLogo },
        { name: 'Next JS', logo: nextjsLogo },
        { name: 'Tailwind CSS', logo: tailwindcssLogo },
        { name: 'GSAP', logo: gsapLogo },
        { name: 'Material UI', logo: materialuiLogo },
        { name: 'Bootstrap', logo: bootstrapLogo },
      ],
    },
    {
        title: 'Backend',
        skills: [
          { name: 'Springboot', logo: springbootLogo },
          { name: 'Node JS', logo: nodejsLogo },
          { name: 'Express JS', logo: expressjsLogo },
          { name: 'MySQL', logo: mysqlLogo },
          { name: 'MongoDB', logo: mongodbLogo },
          { name: 'Firebase', logo: firebaseLogo },
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
          { name: 'C-Sharp', logo: csharpLogo },
          { name: 'JavaScript', logo: javascriptLogo },
          { name: 'TypeScript', logo: typescriptLogo },
        ],
      },
      {
        title: 'Tools',
        skills: [
          { name: 'Git', logo: gitLogo },
          { name: 'Github', logo: githubLogo },
          { name: 'VS Code', logo: vscodeLogo },
          { name: 'Postman', logo: postmanLogo },
          { name: 'Compass', logo: mcLogo },
          { name: 'Vercel', logo: vercelLogo },
          { name: 'Netlify', logo: netlifyLogo },
          { name: 'Figma', logo: figmaLogo },
        ],
      }      
    ];
  
  export const education = [
    {
      id: 0,
      img: jisLogo,
      school: "JIS University, Kolkata",
      date: "July 2022 - June 2025",
      grade: "8.50 CGPA",
      desc: "I have completed my Bachelor degree (BTech) in Computer Science & Engineering from JIS University, Kolkata. During my time at JIS, I gained a strong foundation in programming and software development and computer science principles. I Have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development and Software Engineering. My experience in JIS University has been Instrumental in shaping my technical abilities and professional growth.", 
      degree: "Bachelor of Technology - BTech(CSE)",
    },
    {
      id: 1,
      img: icvpLogo,
      school: "Iswar Chandra Vidyasagar Polytechnic, Jhargram",
      date: "August 2019 - June 2022",
      grade: "78.2%",
      desc: "I completed my Diploma degree in Computer Science & Technology (DCST) from ICVP College, Jhargram. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structure and Algorithms to diving into Web Development And Database Management Systems, I gained practical inshights into the world of software development. My time at ICVP College allowed me to work on project that applied theoritical concepts to real-world problems.",
      degree: "Diploma in Computer Science & Technology - Diploma (CST)",
    },
    {
      id: 2,
      img: mhsLogo,
      school: "Manikpara High School(H.S), Jhargram",
      date: "July 2017 - July 2019",
      grade: "78%",
      desc: "I completed my class 12 education from Manikpara High School(H.S), Jhargram, under the West Bengal Council of Higher Secondary Education (WBCSHSE) and the Board of Secondary Education, West Bengal (WBSE).",
      degree: "WBCSHSE(XII) ",
    },
    // {
    //   id: 3,
    //   img: vpsLogo,
    //   school: "Vatsalya Public School Govardhan, Mathura",
    //   date: "Apr 2015 - March 2016",
    //   grade: "87.5%",
    //   desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    //   degree: "CBSE(X), Science with Computer Application",
    // },
  ];

  export const projects = [
    { id: 0,
      title: "Quick Ride - Fast, Reliable Rides at Your Fingertips",
      description:
        "Quick Ride is a web-based ride-hailing application inspired by Uber, designed to connect riders with nearby drivers for seamless transportation. The platform aims to offer real-time ride requests, fare estimations, and route tracking, ensuring a user-friendly experience for both passengers and drivers.",
      image: quickride,
      tags: ["JavaScript", "React JS", "API", "Node JS", "Express JS", "MongoDB", "HTML", "CSS"],
      github: "https://github.com/dipendumahata/QuickRide",
      webapp: "https://quick-ride-zeta.vercel.app/",
      
    },
    {
      id: 1,
      title: "Let's Meet - A Minimal Real-Time Video Chat Web App",
      description:
        "LetsMeet is a web-based application designed to facilitate seamless group video conferencing. Built with modern web technologies, it offers users the ability to connect and communicate through high-quality video calls directly from their browsers.​",
      image: letsmeet,
      tags: ["React JS","ZEGOCLOUD API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/dipendumahata/lets-meet",
      webapp: "https://lets-meet-navy.vercel.app/",
    },
    { id: 2,
      title: "Portfolio Website", 
      description:
        "A personal portfolio website showcasing my projects, skills, and experience as a passionate and results-driven web developer. Explore my work in frontend and backend development, and get in touch for collaboration or freelance opportunities.",
      image: portfolio,
      tags: ["Tailwind","React JS","HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "Shortest Path Finder – Interactive Pathfinding Visualizer",
      description:
        "Shortest Path Finder is an interactive web application that visualizes pathfinding algorithms on a grid-based interface. Users can set start and end points, place obstacles, and observe how the algorithm computes the shortest path in real-time.​",
      image: shortestpath,
      tags: ["HTML", "CSS", "JavaScript","BFS","Dijkstra's Algorithm"],
      github: "https://github.com/dipendumahata/shortest_path_finder",
      webapp: "https://shortest-path-finder-zeta.vercel.app/",
    }
  ];
  

  