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
    name: "Works", // was "Finder"
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
    name: "Photo Gallery", // was "Photos"
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
    category: "Graphic Design",
    items: ["Adobe Creative Cloud Suite"],
  },
  {
    category: "Motion Design",
    items: ["After Effects", "Cinema 4D"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },

  {
    category: "Photography",
    items: ["Capture One", "Photoshop", "Sony Alpha"],
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
    title: "#ShortOniPhone",
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
      img: "/images/events/event.jpg",
    },

    {
      id: 2,
      img: "/images/landscapes/landscape6.jpg",
    },
    {
      id: 3,
      img: "/images/exhibition/exh3.jpg",
    },
    {
      id: 4,
      img: "/images/exhibition/exh5.jpg",
    },
    {
      id: 5,
      img: "/images/landscapes/landscape3.jpg",
    },
    {
      id: 6,
      img: "/images/events/event6.jpg",
    },
    {
      id: 8,
      img: "/images/portraits/frame8.jpg",
    },
    {
      id: 7,
      img: "/images/exhibition/exh3.jpg",
    },
  ],
  portraits: [
    {
      id: 1,
      img: "/images/portraits/frame.jpg",
    },
    {
      id: 2,
      img: "/images/portraits/frame2.jpg",
    },
    {
      id: 3,
      img: "/images/portraits/frame3.jpg",
    },
    {
      id: 4,
      img: "/images/portraits/frame4.jpg",
    },
    {
      id: 5,
      img: "/images/portraits/frame5.jpg",
    },
    {
      id: 6,
      img: "/images/portraits/frame6.jpg",
    },
    {
      id: 7,
      img: "/images/portraits/frame7.jpg",
    },
    {
      id: 8,
      img: "/images/portraits/frame8.jpg",
    },
  ],
  landscapes: [
    {
      id: 1,
      img: "/images/landscapes/landscape.jpg",
    },
    {
      id: 2,
      img: "/images/landscapes/landscape2.jpg",
    },
    {
      id: 3,
      img: "/images/landscapes/landscape3.jpg",
    },
    {
      id: 4,
      img: "/images/landscapes/landscape4.jpg",
    },
    {
      id: 5,
      img: "/images/landscapes/landscape5.jpg",
    },
  ],

  events: [
    {
      id: 1,
      img: "/images/events/event.jpg",
    },
    {
      id: 2,
      img: "/images/events/event1.jpg",
    },
    {
      id: 3,
      img: "/images/events/event2.jpg",
    },
    {
      id: 4,
      img: "/images/events/event3.jpg",
    },
    {
      id: 5,
      img: "/images/events/event4.jpg",
    },
    {
      id: 6,
      img: "/images/events/event5.jpg",
    },
    {
      id: 7,
      img: "/images/events/event6.jpg",
    },
    {
      id: 8,
      img: "/images/events/event7.jpg",
    },
    {
      id: 9,
      img: "/images/events/event8.jpg",
    },
  ],
  iphone: [
    {
      id: 1,
      img: "/images/iphone/shot.jpg",
    },
    {
      id: 2,
      img: "/images/iphone/shot2.jpg",
    },
    {
      id: 3,
      img: "/images/iphone/shot3.jpg",
    },
    {
      id: 4,
      img: "/images/iphone/shot4.jpg",
    },
    {
      id: 5,
      img: "/images/iphone/shot5.jpg",
    },
    {
      id: 6,
      img: "/images/iphone/shot6.jpg",
    },
    {
      id: 7,
      img: "/images/iphone/shot7.jpg",
    },
    {
      id: 8,
      img: "/images/iphone/shot8.jpg",
    },
    {
      id: 9,
      img: "/images/iphone/shot9.jpg",
    },
    {
      id: 10,
      img: "/images/iphone/shot10.jpg",
    },
    {
      id: 11,
      img: "/images/iphone/shot11.jpg",
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
      id: 1,
      name: "ALN Kenya",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Website",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://aln.africa",
          position: "top-5 right-115",
        },
        {
          id: 2,
          name: "Brand Guidelines",
          icon: "/images/pdf.png",
          kind: "file",
          fileType: "imgfile",
          position: "top-5 right-75",
        },
        {
          id: 3,
          name: "aln",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-5 right-20",
          imageUrl: "/images/aln/aln.jpg",
        },
        {
          id: 4,
          name: "aln",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-30 right-115",
          imageUrl: "/images/aln/aln2.jpg",
        },
        {
          id: 5,
          name: "aln",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-30 right-75",
          imageUrl: "/images/aln/aln3.jpg",
        },
        {
          id: 6,
          name: "aln",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-30 right-25",
          imageUrl: "/images/aln/aln4.jpg",
        },
        {
          id: 7,
          name: "aln",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-50 right-115",
          imageUrl: "/images/aln/aln5.jpg",
        },
        {
          id: 8,
          name: "aln",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-50 right-80",
          imageUrl: "/images/aln/aln6.jpg",
        },
        {
          id: 9,
          name: "aln",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-50 right-25",
          imageUrl: "/images/aln/aln6.jpg",
        },
      ],
    },

    {
      id: 2,
      name: "RONN LAW",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-75", // icon position inside Finder
      windowPosition: "top-[22vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "None",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://aln.africa",
          position: "top-30 right-115",
        },
      ],
    },

    {
      id: 3,
      name: "Front-End Development",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-45",
      windowPosition: "top-[33vh] left-5",
      children: [
        {
          id: 1,
          name: "Tazama Digital",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://taz-ds.vercel.app/",
          position: "top-5 right-110",
        },
        {
          id: 2,
          name: "RONN Law",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://demo-ron.vercel.app/",
          position: "top-5 right-75",
        },
        {
          id: 3,
          name: "Apple Centre Ke",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://demo-apple-ke.vercel.app/",
          position: "top-5 right-45",
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
