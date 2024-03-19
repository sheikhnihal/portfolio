import {
  mobile,
  pyton,
  aws,
  gcp,
  azure,
  linux,
  backend,
  creator,
  web,
  javascript1,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  frt,
  stn,
  nullc,
  nullclass,
  rentals,
  todoapp,
  dataanalytics,
  threejs,
  github,
  github1,
  github2,
  ibmdevops,
  moviesme,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cloud Engineer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
];

const resumes = [
  {
    title: "My Resume",
    text: "checkout my Resume",
    source_url: "https://flowcv.me/nihalsheikh",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript1,
  },
  {
    name: "Pyton",
    icon: pyton,
  },
  {
    name: "Ubuntu",
    icon: linux,
  },
  {
    name: "GitHub",
    icon: github1,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "GCP",
    icon: gcp,
  },
];

const experiences = [
  {
    title: "Front-End Developer Intern",
    company_name: "Soft The Next",
    icon: stn,
    iconBg: "#E6DEDD",
    date: "June 2023 - December 2023",
    points: [
      "Engaged in front-end development using React.js, crafting responsive and user-friendly interfaces to enhance the user experience of web applications.",
      "Utilized Python-Django for back-end development, building robust and scalable server-side applications to handle data processing and business logic.",
      "Created RESTful APIs to facilitate communication between the front-end and back-end components, enabling seamless data exchange.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "NullClass",
    icon: nullc,
    iconBg: "#E6DEDD",
    date: "July 2023 - January 2024",
    points: [
      "Trained on both front-end and back-end technologies to become proficient in the MERN Stack.",
      "Gained hands-on experience in building interactive and user-friendly web interfaces using React.js, developed scalable and efficient server-side applications",
      "Utilized MongoDB to design and maintain databases, ensuring efficient data storage and retrieval for the applications.",
      "Implementing user authentication and authorization mechanisms to secure the web applications and control access to certain features.",
    ],
  },
];

const certificates = [
  {
    certificate: "Google Data Analytics Certificate",
    company_name: "Google",
    date: "March 2023 - May 2023",
    platform: "Coursera",
    image: dataanalytics,
    source_code_link: "https://github.com/sheikhnihal/google_data-analytics",
  },
  {
    certificate: "IBM DevOps and Software Engineering",
    company_name: "IBM",
    date: "October 2023 - Present",
    platform: "Coursera",
    image: ibmdevops,
    source_code_link: "https://github.com/sheikhnihal/ibm_devops",
  },
];

const projects = [
  {
    name: "MoviesMe",
    description:
      "Movie suggestions made better",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "netlify",
        color: "green-text-gradient",
      },
    ],
    image: moviesme,
    source_code_link: "https://github.com/sheikhnihal/moviesme",
  },
  {
    name: "Car Rentals Website",
    description:
      "Mobility: A Car rental website.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: rentals,
    source_code_link: "https://github.com/sheikhnihal/mobility",
  },
  {
    name: "To Do Tasks",
    description:
      "To Do App - you got work to do.",
    tags: [
      {
        name: "android_studio",
        color: "blue-text-gradient",
      },
      {
        name: "kotlin",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: todoapp,
    source_code_link: "https://github.com/sheikhnihal/todo",
  },
];

export { services, resumes, technologies, experiences, certificates, projects };
