export const projects = [
  {
    id: "singapore-odyssea",
    title: "Singapore Odyssea: A journey through time",
    tag: "Unreal Engine 5 — National Museum Singapore",
    image: "/projects/odyssea.jpg",
    year: "2025",
    client: "National Museum Singapore",
    role: "Junior interactive media & game developer",
    engine: "Unreal Engine 5",
    overview: "A large-scale public interactive installation at the National Museum of Singapore, exploring Singapore's history through immersive real-time visuals seen by thousands of visitors.",
    contributions: [
      {
        title: "Real-time network architecture",
        body: "Engineered a low-latency communication layer using MQTT and TCP/IP protocols to synchronise distributed hardware sensors with the Unreal Engine runtime. Designed the message schema and retry logic to ensure reliable data delivery under high visitor load.",
      },
      {
        title: "Performance optimisation",
        body: "Profiled and optimised the performance bottleneck due to high-end video data transmission, number of spawned actors and overall game mechanics for Transition Zone",
      },
        {
        title: "Visual and rendering optimisation",
        body: "Profiled and optimised the rendering pipeline inside Unreal Engine 5, identifying draw call bottlenecks and reducing GPU frame time by restructuring LOD settings and merging static mesh actors in high-density scenes, identified artefacting visual problems due to aggressive anti-aliasing method and implemented super sampling to mitigate the issue ensuring the final visual and concept deck are 1:1",
      },
      {
        title: "System integration and networking",
        body: "Independently managed the full integration between physical sensor hardware and the software layer, including writing custom Blueprint to translate raw hardware signals into in-engine events, coordinated with on-site teams and networking specialist from third-party collaborators.",
      },
      {
        title: "System integration",
        body: "Independently managed the full integration between physical sensor hardware and the software layer, including writing custom Blueprint to translate raw hardware signals into in-engine events.",
      },
       {
        title: "Security and vulnerability ",
        body: "Conducted thorough vulnerability patching and remediation, ensuring project alignment with security standards, and documented the process in a final security posture report.",
      },
    ],
    techStack: ["Unreal Engine 5","Unity 6", "C#" ,"C++", "Blueprints", "MQTT", "TCP/IP", "JSON", "VAPT"],
    reelUrl: "https://player.vimeo.com/video/1123510223?h=753b65e8de",
  },
  {
    id: "arrival-wall",
    title: "Arrival wall — SG60 Heart & Soul experience",
    tag: "Unity 6 — large-scale interactive installation",
    image: "/projects/arrival-wall.jpeg",
    year: "2025",
    client: "SG60 Heart & Soul Experience",
    role: "Junior interactive media & game developer",
    engine: "Unity 6",
    overview: "A high-traffic public interactive installation for Singapore's 60th anniversary celebration, featuring a large arrival wall experience engaging hundreds of daily visitors.",
    contributions: [
       {
        title: "Lead Developer for Interactive arrival wall experience",
        body: "Led the development of a standalone Unity executable featuring a data-driven UI pipelin, leveraged Scriptable Objects and backend API connections to process visitor data, render custom book assets, and export generated media back to the server for user download.",
      },
    ],
    techStack: ["Unity 6", "C#", "JSON"],
    reelUrl: "https://vimeo.com/1146455452/41b73ced48?fl=pl&fe=cm",
  },
  {
    id: "kebaya-quest",
    title: "Kebaya quest: A thread through tradition",
    tag: "PlayCanvas, JavaScript — interactive web experience",
    image: "/projects/kebaya-quest.png",
    year: "2025",
    client: "Cultural Heritage Client",
    role: "Junior interactive media & game developer",
    engine: "PlayCanvas / JavaScript",
    overview: "An interactive web-based experience celebrating the heritage and tradition of the Kebaya, built on PlayCanvas and delivered as a browser-accessible installation.",
    contributions: [
      {
        title: "Bug hunting and Remediation",
        body: "Identified, isolated, and remediated critical software defects and security vulnerabilities to ensure optimal system stability.",
      },
    ],
    techStack: ["PlayCanvas", "JavaScript", "HTML", "CSS"],
    reelUrl: "https://cravefx.com/portfolio/kebaya-quest-a-thread-through-tradition/",
  },
  {
    id: "not-mere-spectators",
    title: "Not Mere Spectators: The Makings of Multicultural Singapore",
    tag: "Unity 6, C# — Interactive National Museum Exhibition",
    image: "/projects/not-mere-spectators.png",
    year: "2025",
    client: "Kingsmen / National Museum Singapore",
    role: "Junior interactive media & game developer",
    engine: "Unity 6",
    overview: "An interactive museum exhibition at the National Museum of Singapore exploring Singapore's multicultural foundations, experienced by large numbers of museum visitors.",
    contributions: [
      {
      {
        title: "Design a full-scale interactive exhibition architecture.",
        body: "Architected and deployed the full-stack interactive software, independently managing system design, integration, and performance tuning with minimal supervision.",
      },
      {
        title: "Implemented Subtitle System & Localisation",
        body: "Designed a custom subtitle system for in built Unity 6 project with Bahasa Melayu, English, Mandarin and Tamil localisation language",
      },
      {
        title: "Implemented a Novel Save & Logging System Utilising JSON and CSV",
        body: "Architected a lightweight data persistence system utilizing JSON and CSV formats for streamlined game state saving and efficient performance logging to ensure 0% down time.",
      },
      ],
        {
        techStack: ["Unity 6 - C#, JSON, CSV"],
        reelUrl: "https://player.vimeo.com/video/1169840123?h=7fac4bc133",
        },
      {
        id: "mern-3D-cms",
        title: "Fullstack MERN RND Project: 3D Interactive CMS",
        tag: "MERN, MongoDB, Express.js, React.js,Node.js - Fully hosted fullstack website with cloud integration for 3D models. ",
        image: "/projects/MERN3D.png",
        year: "2025",
        client: "Internal use",
        role: "Junior interactive media & game developer, Full-stack Software Developer",
        engine: "MERN Stack, Fullstack web",
        overview: "An interactive 3D viewer with responsive layout for web and mobile device, with texture colour manipulations, paired with cloud upload",
        contributions: [
          {
            title: "Full-stack interactive responsive web",
            body: "Architected and deployed the complete web hosted 3D viewer CMS for an RND into web development branch for future projects.",
          },
          {
            title: "Cloud hosted and full web hosting integration with scalability in mind",
            body: "Integrated full development work flow from backend to front end with scalability in mind, included security authentication to avoid miscellanous and unauthorised 3D models to be uploaded.",
          },
        ],
        techStack: ["MongoDB, Express.js, React.js, Node.js."],
        reelUrl: "https://cravefx-rnd-mern-cms-flame.vercel.app",
    },
]
