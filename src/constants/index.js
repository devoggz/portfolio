const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/search.svg",
  },
  {
    id: 2,
    img: "/icons/user.svg",
  },
  {
    id: 3,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Case Studies", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Photography Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Technical Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },

  {
    category: "Graphic Design",
    items: ["Logos", "Identities", "Social Media", "Editorial"],
  },
  {
    category: "Photography",
    items: ["Portraits", "Landscapes", "Events"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Behance",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: "library", // Changed from 1 to "library"
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: "portraits", // Changed from 2 to "portraits"
    icon: "/icons/gicon2.svg",
    title: "Portraits",
  },
  {
    id: "landscapes", // Changed from 3 to "landscapes"
    icon: "/icons/file.svg",
    title: "Landscapes",
  },
  {
    id: "iphone", // Changed from 4 to "iphone"
    icon: "/icons/gicon5.svg",
    title: "Short On iPhone",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/sunrise.JPG",
  },
  {
    id: 2,
    img: "/images/fly.JPG",
  },
  {
    id: 3,
    img: "/images/bright.JPG",
  },
  {
    id: 4,
    img: "/images/away.JPG",
  },
  {
    id: 5,
    img: "/images/boat.JPG",
  },
  {
    id: 6,
    img: "/images/set.JPG",
  },
  {
    id: 7,
    img: "/images/home.jpg",
  },
  {
    id: 8,
    img: "/images/set.JPG",
  },
];

const albums = {
  library: [
    {
      id: 1,
      img: "/images/sunrise.JPG",
    },
    {
      id: 2,
      img: "/images/fly.JPG",
    },
    {
      id: 3,
      img: "/images/bright.JPG",
    },
    {
      id: 4,
      img: "/images/away.JPG",
    },
    {
      id: 5,
      img: "/images/boat.JPG",
    },
    {
      id: 6,
      img: "/images/set.JPG",
    },
    {
      id: 7,
      img: "/images/home.jpg",
    },
    {
      id: 8,
      img: "/images/set.JPG",
    },
  ],
  portraits: [
    {
      id: 1,
      img: "/images/sunrise.JPG",
    },
    {
      id: 2,
      img: "/images/bright.JPG",
    },
  ],
  landscapes: [
    {
      id: 1,
      img: "/images/away.JPG",
    },
    {
      id: 2,
      img: "/images/boat.JPG",
    },
    {
      id: 3,
      img: "/images/fly.JPG",
    },
  ],
  iphone: [
    {
      id: 1,
      img: "/images/home.jpg",
    },
    {
      id: 2,
      img: "/images/set.JPG",
    },
  ],
};

// Keep the old gallery export for backward compatibility if needed

export {
  albums,
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Graphic Design",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
      ],
    },

    // ▶ Project 2

    // ▶ Project 3
    {
      id: 7,
      name: "Web Development",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Tazama Digital",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://taz-ds.vercel.app/",
          position: "top-10 right-105",
        },
        {
          id: 2,
          name: "RONN Law",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-80",
        },
        {
          id: 3,
          name: "Apple Centre Ke",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Keshi",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-50",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "About Me",
      icon: "/images/kenny.jpg",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Ken Govoga",
      image: "/images/kenny.jpg",
      description: [
        "Hey! I’m Govoga 👋,",
        "For the over 6 years, I’ve worked as a multidisciplinary designer across branding, web development, and photography.",
        " I focus on turning complex challenges into visual solutions while moving quickly between disciplines, keeping quality consistent and shifting easily between collaboration and independent work.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
