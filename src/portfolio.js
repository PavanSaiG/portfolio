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
      logo_path: "jntua.jpg",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
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
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Apifi",
      url: "http://apifi.io/",
      description:
        "A marketplace for APIs. Leading a team of 4 developers, implemented SDK-generation tools, core services like rate-limiter and console.",
      languages: [
        {
          name: "AWS",
          iconifyClass: "devicon-aws",
        },
        {
          name: "Golang",
          iconifyClass: "devicon-go",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "DynamoDB",
          iconifyClass: "devicon-dynamodb",
        },
        {
          name: "Redis",
          iconifyClass: "devicon-redis",
        },
      ],
    },
    {
      name: "CineScope",
      url: "https://github.com/Hrishi1999/CineScope",
      description: "An IMDB-like application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Journalify",
      url: "https://play.google.com/store/apps/details?id=com.picle.journalify",
      description:
        "You personal journaling companion, goals & daily challenges! About 5k+ downloads on Play Store.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "RecipesAPI",
      url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
      description: "Get recipes for hundreds and thousands of dishes",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "opPortfolio",
      url: "https://github.com/Hrishi1999/opPortfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Cab Security System",
      url: " ",
      description:
        "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Lensinator",
      url: " ",
      description:
        "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Doorbell.io",
      url: "https://github.com/Hrishi1999/Doorbell.io",
      description:
        "A sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TensorflowJS",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Video Summarization",
      url: "https://github.com/Hrishi1999/Video-Summarization",
      description:
        "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Dashboard Activity",
      url: "https://github.com/Hrishi1999/Dashboard.activity",
      description:
        "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Project Pickle",
      url: " ",
      description:
        "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Project Health Card",
      url: "",
      description:
        "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Food Classifier",
      url: " ",
      description:
        "A food classifier app using tflite which classfier over 50 Indian Dishes.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Image Clustering",
      url: " ",
      description:
        "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Antivirus",
      url: " ",
      description:
        "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
      ],
    },
    {
      name: "Sugar on Windows",
      url: " ",
      description:
        "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Object + Face Detection",
      url: " ",
      description: "2017 project. Object detection + accurate face detection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Image Captioning with Visual Attention",
      url: " ",
      description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "DalSocial",
      url: " ",
      description:
        "An Android app to meet new people in the university, organize and join events. ",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "simple-icons:kotlin",
          color: "#F18E33",
        },
        {
          name: "Android",
          iconifyClass: "simple-icons:android",
          color: "#3DDC84",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "HalifaxFoodie",
      url: " ",
      description:
        "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
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
