/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Pavan",
  logo_name: "Pavan",
  nickname: "Pavan",
  full_name: "Pavan Sai Gajula",
  subTitle:
    "Full Stack Developer, Skilled. Reliable. Adaptable..",
  resumeLink:
    "https://drive.google.com/file/d/1Dpx__GvgJs-a54nG0Js_ICI7suCcyrWt/view?usp=sharing",
  mail: "mailto:gajulapavansai1@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/PavanSaiG",
  linkedin: "https://www.linkedin.com/in/pavan-sai-gajula-a022b51a3/",
  gmail: "gajulapavansai1@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://x.com/ps23997",
  instagram: "https://www.instagram.com/pavan_sai.g/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend development using NodeJS, ExpressJS and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        
        
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:siJava",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Certified AWS Cloud Practioner",
        "⚡ Experience hosting and managing web apps on AWS",
        
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "National institute of Technology Karnataka",
      subtitle: "Masters in Technology",
      logo_path: "NITK.png",
      alt_name: "NITK",
      duration: "2020 - 2022",
      descriptions: [
      ],
      website_link: "https://www.nitk.ac.in/",
    },
    {
      title: "JNTUA college of Engineering",
      subtitle: "B.Tech ",
      logo_path: "jntuaa.png",
      alt_name: "JNTUA",
      duration: "2015 - 2019",
      descriptions: [
      ],
      website_link: "https://www.jntuacea.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/27b33382-aad6-49ce-899a-d8f5734208f2/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Volunteership",
  description:
    "I am a MERN Stack Developer with 2+ years of experience in frontend development, skilled in ReactJS, JavaScript, and HTML. I've worked on multiple projects and enjoy collaborating on scalable, high-quality solutions. I'm currently looking to contribute to impactful teams while sharing my knowledge.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Frontend Developer",
          company: "Cognizant",
          company_url: "",
          logo_path: "Logo_Cognizant.png",
          duration: "Jan 2023 - Present",
          location: "Bangalore",
          description:
            "• Developed and maintained user-friendly banking applications, enhancing customer satisfaction by 30%\n" +
            "• Collaborated with cross-functional teams to deliver high-quality solutions within tight deadlines\n" +
            "• Implemented reusable components using ReactJS and optimized performance by 25%",
          color: "#2962FF",
        },
        {
          title: "NodeJs Developer",
          company: "Cognizant",
          company_url: "",
          logo_path: "Logo_Cognizant.png",
          duration: "June 2022 - Jan 2023",
          location: "Bangalore",
          description:
            "• Designed and developed backend applications\n" +
            "• Built secure and scalable REST APIs using Node.js and Express\n" +
            "• Improved app performance and user experience through pixel-perfect designs",
          color: "#800000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research Intern",
          company: "NIO, Goa",
          company_url: "",
          logo_path: "csir_logo.jpeg",
          duration: "Jun 2021 - July 2021",
          location: "Goa",
          description:
            "• Worked on research topic Prediction of offshore wind speed using Artificial neural networks\n" +
            "• Gained hands-on experience with Python and Artificial Neural Networks for research",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "National service scheme",
          company: "NSS, India",
          company_url: "",
          logo_path: "jntuaa.png",
          duration: "2015 - 2019",
          location: "Anantapur",
          description:
            "• Organized cultural workshops to promote healthy relationship among students\n",
          color: "#D83B01",
        },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Pavan.JPG",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@pavansaig",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    
    {
      name: "Food genie",
      url: " ",
      description:
        "Food delivery app with config driven UI",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
        {
          name: "Google Cloud",
          iconifyClass: "logos-google-cloud",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
