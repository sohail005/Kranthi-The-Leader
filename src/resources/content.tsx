import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kranthi",
  lastName: "Kumar",
  name: `Kranthi The Leader`,
  role: "System Engineer",
  avatar: "/images/avatar.png",
  email: "Keranthi@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Telugu", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kranthi-kumar-3b4b621ba/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@kranthi078?xmt=AQF0yyWEBFeNBLw52btgssqzoV-6cWIu6sx4KEX5_YwBhx4",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Politician - I believe that POLITICS should only change the feature of this.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">KRANTHI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/collaborations",
  },
  subline: (
    <>
      I'm Kranthi, a System Engineer at Revalsys Technologies PVT LTD{" "}
      <br />with a passion for technology and problem-solving.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kranthi is a dedicated System Engineer at Revalsys Technologies, known for his strong technical expertise and problem-solving skills. He plays a key role in managing and optimizing IT systems, ensuring smooth operations, security, and performance across projects. Kranthi is passionate about leveraging technology to improve efficiency and deliver reliable solutions that support the company’s goals.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Revalsys Technologies PVT LTD.",
        timeframe: "2022 - Present",
        role: "Senior System Engineer",
        achievements: [
          <>
            Spearheaded a server migration project that improved deployment efficiency and reduced maintenance costs by 30%.
          </>,
          <>
            Automated routine monitoring tasks using scripting, which increased operational efficiency and reduced manual workload.
          </>,
          <>
            Consistently recognized for delivering reliable, high-quality technical support and system optimization.
          </>,
        ],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Osmania University Hyderabad",
        description: <>Bachelor of Technology (B.Tech) in Computer Science and Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Sysytem Administration",
        description: (
          <>Operating Systems: Windows Server, Linux (Ubuntu, CentOS), macOS</>,
          <>Server Management: Active Directory, DNS, DHCP, IIS, Apache, Nginx</>,
          <>Cloud Platforms: AWS, Microsoft Azure, Google Cloud</>,
          <>Networking: LAN / WAN setup, VPN configuration, Firewall management, Network troubleshooting</>,
          <>Virtualization: VMware, Hyper- V, Docker</>,
          <>Monitoring Tools: Nagios, Zabbix, Grafana, CloudWatch</>,
          <>Automation & Scripting: PowerShell, Bash, Python(basic automation scripts)</>,
          <>Version Control & CI / CD: Git, Jenkins, GitHub Actions</>,
          <>Database Management: MySQL, PostgreSQL, MS SQL Server</>,
          <>Security: SSL / TLS configuration, Firewall & Endpoint Protection, Patch Management</>,
          <>Backup & Recovery: Veeam, Acronis, Windows Backup Solutions</>,
          <>IT Support Tools: ServiceNow, Jira, Remote Desktop Services</>
        ),
        tags: [
          {
            name: "System Administration",
            icon: "OS",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/image-02.webp",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Key Skills & Tech Stack",
        description: (
          <>Installation, configuration, and maintenance of Windows Server and Linux (Ubuntu, CentOS) environments.</>
        ),
        tags: [
          {
            name: "Server & Infrastructure Management",
            icon: "check",
          },
          {
            name: "Cloud & Virtualization",
            icon: "check",
          },
          {
            name: "CI/CD & Version Control",
            icon: "check",
          },
          {
            name: "Backup & Disaster Recovery",
            icon: "check",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/image-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };