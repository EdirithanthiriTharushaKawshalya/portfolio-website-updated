export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  githubLink?: string
  liveLink?: string
  linkedinLink?: string
  featured: boolean
  category: string
  year: string
}

export const projects: Project[] = [
  {
    id: "dressme",
    title: "DressMe - AI-Powered Personalized Fashion Designer",
    description:
      "An AI-driven mobile app that helps users design outfits, get personalized suggestions, and find matching styles using photo input and geolocation.",

    longDescription:
      "DressMe is an innovative AI-powered fashion application developed using Flutter for the frontend and Node.js with Express.js for the backend, supported by MongoDB. The app enables users to customize clothing based on sketches, materials, and colors, while also offering personalized suggestions using AI algorithms, including skin tone analysis for color matching and OpenAI-powered outfit recommendations. Users can upload clothing photos to find visually similar or complementary styles, and a built-in store locator helps find nearby tailors and retailers. This full-stack project addressed real-world fashion personalization and highlighted my skills in mobile development, machine learning integration, and user-centric design.",
    image: "/featuredprojects/DressMe.png",
    tags: ["Flutter", "Node.js", "Express.js", "MongoDB", "AI/ML", "Mobile Development"],
    linkedinLink: "https://www.linkedin.com/company/dresssmee/posts/?feedView=all",
    liveLink: "https://drive.google.com/file/d/1jgTTLWnbkP3FzMCkDZiyeJXA32__v7jb/view",
    featured: true,
    category: "Mobile App",
    year: "2025",
  },
  {
    id: "mindnest",
    title: "MindNest",
    description:
      "A full-stack note-taking app built with the MERN stack that allows users to create, edit, and manage notes with real-time updates and responsive UI.",

    longDescription:
      "MindNest is a full-stack note-taking web application built using the MERN stack—MongoDB, Express.js, React.js, and Node.js. Designed with a minimalist, clutter-free interface using Tailwind CSS, the app enables users to create, edit, and delete notes in real time. React’s dynamic state management ensures a smooth and interactive experience, while the Node.js backend handles robust RESTful API operations. MongoDB, integrated through Mongoose, provides secure and scalable data storage. This project enhanced my proficiency in full-stack web development, user experience design, and backend architecture.",
    image: "/featuredprojects/MindNest.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "UI/UX Design"],
    githubLink: "https://github.com/EdirithanthiriTharushaKawshalya/mindnest",
    linkedinLink: "https://www.linkedin.com/in/tharusha-kawshalya-747359356/details/projects/",
    featured: true,
    category: "Web Development",
    year: "2025",
  },
  {
    id: "studio-website",
    title: "Studio Website – Full-Stack Web Application",
    description:
      "A responsive full-stack website for a photography studio, featuring service listings, portfolio, booking forms, and email integration.",

    longDescription:
      "This full-stack photography studio website was built using Next.js for the frontend and server-side rendering, styled with Tailwind CSS, and integrated with the Resend API for email functionality. The site showcases the studio’s portfolio, services, and team, while allowing customers to book appointments and contact the studio via interactive forms. The layout is fully responsive and optimized for performance, delivering a sleek, professional user experience across all devices. The project demonstrates a clean architecture, effective use of modern web technologies, and a strong focus on client interaction and business presentation.",
    image: "/featuredprojects/Studio Website.png",
    tags: ["Next.js", "Tailwind CSS", "Resend API", "Full-Stack Development", "UI/UX Design"],
    githubLink: "https://github.com/EdirithanthiriTharushaKawshalya/zine",
    liveLink: "https://studiozine.vercel.app/",
    featured: true,
    category: "Web Development",
    year: "2025",
  },
  {
    id: "real-estate-spa",
    title: "Real Estate Website - Estate Agent SPA",
    description:
      "A modern Single Page Application for real estate listings with filtering, detailed views, and a responsive, mobile-friendly interface.",

    longDescription:
      "This real estate Single Page Application (SPA) was developed using React.js and styled with Tailwind CSS to provide users with a seamless and intuitive property browsing experience. The platform allows users to view listings, apply advanced filters, and manage favorite properties in a responsive layout that performs well across all devices. Built with React’s component-based structure, the app supports efficient navigation and real-time UI updates. This project improved my skills in frontend development, state management, and responsive design, while also focusing on usability and visual clarity.",
    image: "/featuredprojects/Estate Agent SPA.png",
    tags: ["React.js", "Tailwind CSS", "Responsive Design"],
    githubLink: "https://github.com/EdirithanthiriTharushaKawshalya/real-estate-website",
    liveLink: "https://real-estate-website-dun-seven.vercel.app/",
    featured: false,
    category: "Web Application",
    year: "2024",
  },
  {
    id: "blog-page",
    title: "Blog Page",
    description:
      "A dynamic and responsive blog website built with HTML, CSS, and JavaScript, offering a clean reading experience and user-friendly interface.",

    longDescription:
      "Blog Page is a personal project created with HTML, CSS, and JavaScript to deliver a modern, mobile-friendly reading platform. The site features a visually clean layout and interactive UI elements powered by JavaScript to enhance user experience through smooth transitions and dynamic content rendering. It supports content filtering and intuitive navigation, all while being optimized for performance across various devices. This project strengthened my skills in semantic web design, user experience thinking, and front-end performance tuning.",
    image: "/featuredprojects/Blog Page.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development"],
    githubLink: "https://github.com/EdirithanthiriTharushaKawshalya/blog-page",
    linkedinLink: "https://www.linkedin.com/in/tharusha-kawshalya-747359356/details/projects/",
    featured: false,
    category: "Web Development",
    year: "2024",
  },
  {
    id: "calculator",
    title: "Calculator",
    description:
      "A Python-based command-line calculator capable of basic arithmetic operations with error handling and clean user input flow.",

    longDescription:
      "This calculator is a Python application developed to perform core arithmetic operations such as addition, subtraction, multiplication, and division. It features a user-friendly command-line interface with input validation and error handling to manage edge cases like invalid inputs or division by zero. The project was an early programming exercise that helped reinforce my understanding of Python logic, functions, and control structures while improving my ability to build simple, interactive tools.",
    image: "/featuredprojects/Calculator.png",
    tags: ["Python"],
    githubLink: "https://github.com/EdirithanthiriTharushaKawshalya/calculator",
    linkedinLink: "https://www.linkedin.com/in/tharusha-kawshalya-747359356/details/projects/",
    featured: false,
    category: "Software Development",
    year: "2023",
  },
  {
    id: "progression-predictor",
    title: "Progression Predictor",
    description:
      "A Python application that evaluates student grades and predicts academic outcomes using rule-based logic and user input.",

    longDescription:
      "Progression Predictor is a Python-based software tool designed to analyze academic data and determine student progression outcomes based on predefined criteria and decision rules. It processes user input, evaluates logic conditions, and provides clear feedback on academic eligibility. This project emphasized problem-solving and programming with Python, particularly in applying conditional structures, managing user interactions, and translating real-world rules into functional code.",
    image: "/featuredprojects/Progression Predictor.png",
    tags: ["Python"],
    githubLink: "https://github.com/EdirithanthiriTharushaKawshalya/progression-predictor",
    linkedinLink: "https://www.linkedin.com/in/tharusha-kawshalya-747359356/details/projects/",
    featured: false,
    category: "Software Development",
    year: "2023",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio website developed with HTML and CSS to showcase skills, projects, and achievements using a clean, responsive layout.",

    longDescription:
      "This portfolio website was created using HTML and CSS to serve as an online showcase of my personal achievements, technical skills, and project experience. The design focuses on clarity, responsiveness, and semantic structure, ensuring accessibility and cross-device compatibility. The site includes multiple sections such as About, Projects, Skills, and Contact, all styled to provide a professional and visually consistent browsing experience. The project served as a foundational exercise in front-end development and personal branding through web design.",
    image: "/featuredprojects/Portfolio Website.png",
    tags: ["HTML", "CSS", "Responsive Design"],
    githubLink: "https://github.com/EdirithanthiriTharushaKawshalya/portfolio-website",
    liveLink: "https://edirithanthiritharushakawshalya.github.io/portfolio-website/",
    featured: false,
    category: "Web Development",
    year: "2023",
  },

];


export const getFeaturedProjects = () => projects.filter((project) => project.featured)
export const getAllProjects = () => projects
export const getProjectById = (id: string) => projects.find((project) => project.id === id)
