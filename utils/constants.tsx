const navItems = [
  { title: "Home", href: "#home" },
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

const techArray = [
  {
    title: "HTML5",
    src: "DeviconHtml5.svg",
  },
  {
    title: "CSS3",
    src: "DeviconCss3.svg",
  },
  {
    title: "Javascript",
    src: "DeviconJavascript.svg",
  },
  {
    title: "Tailwind",
    src: "DeviconTailwindcss.svg",
  },
  {
    title: "React",
    src: "DeviconReact.svg",
  },
  {
    title: "Nextjs",
    src: "DeviconNextjs.svg",
  },
  {
    title: "Typescript",
    src: "DeviconTypescript.svg",
  },
];

const techTools = [
  {
    title: "Git",
    src: "DeviconGit.svg",
  },
  {
    title: "VS Code",
    src: "DeviconVscode.svg",
  },
  {
    title: "Firebase",
    src: "DeviconFirebase.svg",
  },
  {
    title: "MongoDB",
    src: "DeviconMongodb.svg",
  },
  {
    title: "Github",
    src: "DeviconGithub.svg",
  },
];
interface Project {
  title: string;
  desc: string;
  src: string;
  technologies: string[]; // Adjust this type based on your data
  site: string;
  github: string;
}

const projectsData: Project[] = [
  {
    title: "Shoe Stop",
    desc: "Shoe Stop shopping cart app is a cutting-edge e-commerce project aimed at revolutionizing the way customers shop for footwear online. The app is designed to provide users with a seamless and enjoyable shopping experience, offering a wide selection of shoes from various brands, styles, and sizes.",
    src: "shoesphere.png",
    technologies: [],
    site: "https://shoe-stop-seven.vercel.app/",
    github: "https://github.com/Gunsz123/e-commerce",
  },
  {
    title: "Movie App",
    desc: "Flick Fiesta is an innovative movie app designed to revolutionize the way users discover, explore, and enjoy their favorite films. With an extensive database of movies spanning various genres, languages, and eras, Flick Fiesta offers a comprehensive platform for cinephiles and casual viewers alike.",
    src: "movieApp.png",
    technologies: [],
    site: "https://movie-app-delta-orcin-77.vercel.app/",
    github: "https://github.com/Gunsz123/movie_app",
  },
  {
    title: "Notes App",
    desc: "My Notes is a versatile notes app designed to streamline the process of capturing, organizing, and accessing personal notes, thoughts, and ideas. With a clean and intuitive interface, My Notes offers users a seamless experience for managing their digital notes across multiple devices.",
    src: "notesApp.png",
    technologies: [],
    site: "https://notes-app-orcin-rho.vercel.app/",
    github: "https://github.com/Gunsz123/notes-app",
  },
];

export { navItems, techArray, techTools, projectsData };
