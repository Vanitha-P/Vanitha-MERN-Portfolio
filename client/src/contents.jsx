import html from '../src/assets/html.png'
import css from '../src/assets/css.png'
import js from '../src/assets/javascript.png'
import tailwind from '../src/assets/tailwind.png'
import reactjs from '../src/assets/react.png'
import nestjs from '../src/assets/nestjs.png'
import git from '../src/assets/git.png'
import github from '../src/assets/github.png'
import mongoose from '../src/assets/mongoose.png'
import mongodb from '../src/assets/mongodb.png'
import mongodbCompass from '../src/assets/mongodbCompass.png'
import nodejs from '../src/assets/nodejs.png'
import postman from '../src/assets/postman.png'
import vscode from '../src/assets/vscode.png'
import redux from '../src/assets/redux.png'
import express from '../src/assets/expressjs.png'
import mteamz from '../src/assets/mteamz.png'
import hrblusky from '../src/assets/hrblusky.png'
import pruvitygroup from '../src/assets/pruvitygroup.png'
import futurefocus from '../src/assets/futurefocus.png'
import photon from '../src/assets/photon.png'
import laravel from '../src/assets/laravel.png'
import redis from '../src/assets/redis.png'
import docker from '../src/assets/docker.png'
import postgresql from '../src/assets/postgresql.png'
import kubernetes from '../src/assets/kubernetes.png'
import avis from '../src/assets/avis.png'
import momopay from '../src/assets/momopay.png'
import { AiOutlineArrowRight, AiOutlineGlobal, AiOutlineLink, AiFillPhone, AiOutlineVerticalAlignBottom, AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
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
    icon: js,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
  {
    name: "Laravel",
    icon: laravel
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHup",
    icon: github,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  }
];
const tools = [
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Mongodb Compass",
    icon: mongodbCompass,
  },
  {
    name: "Postman",
    icon: postman,
  },
];
const experience = [
  {
    name: "Photon Infotech Pvt Ltd",
    icon: photon,
    title: "Senior Software Engineer I",
    duration: "March-2025 to Present",
    project: 'Project: Avis First',
    stack: '#Nodejs #Nestjs #Redis #PostgreSQL',
    address: "D.L.F Cyber City (DLF IT Park), Ramapuram, Chennai, Tamil Nadu 600125",
    global: AiOutlineGlobal,
    linkicon: AiOutlineLink,
    arrow: AiOutlineArrowRight,
    expHeadings: ["Backend Development (NodeJS, NestJS,  Redis): ", "Resolved Complex Bugs: ",],
    experience: ["Developed and implemented concierge module for the Avis First Car Rental LLC client.",
    ],
    projects: [{
      name: "AVIS - Car Rental APP", logo: avis, website: "https://www.avis.com/en/home",
      applink: "https://play.google.com/store/apps/details?id=com.avis.androidapp&hl=en_IN", expHeadings: ["Design Pattern: ", "Jest: ", "Mockoon: ",], experience: ['Implemented Strategy and Abstract Factory patterns.', 'Maintained 95%+ coverage using Jest.', 'Created mock APIs with Mockoon for faster integration.',]
    }],
  },
  {
    name: "Future Focus Infotech Pvt Ltd",
    icon: futurefocus,
    title: "Senior Software Engineer",
    duration: "July-2024 to Jan-2025",
    project: 'Project: MOMO Payment',
    stack: '#Nodejs #Expressjs #Nestjs #Redis #Mongodb #PostgreSQL',
    address: "No.169,(old 62 1, Habibullah Rd, Bharathy Nagar, T. Nagar, Chennai, Tamil Nadu 600017",
    global: AiOutlineGlobal,
    linkicon: AiOutlineLink,
    arrow: AiOutlineArrowRight,
    expHeadings: ["Backend Development (NodeJS, Express/Nest, PostgreSQL, Redis): ", "Bug Fixing & Performance Optimization: ", " Dedicated Backend Support: "],
    experience: [" Developed and implemented 15 key features for the Comviva’s Momo payment app.",
      " Demonstrated expertise in debugging and resolving complex issues, improving application stability and performance.",
      " Provided continuous backend support, working off-hours to ensure project deadlines were met and critical issues were promptly addressed.",
    ],
    projects: [{
      name: "MOMO Payment", logo: momopay, website: "https://momo.mtn.com/home-page/",
      applink: "https://play.google.com/store/apps/details?id=com.consumerug", expHeadings: [" express-rate-limiting: ", "Helmet: ", "Swagger: ", "JWT: ", "PostgreSQL: ", "Redis: "], experience: ['To prevent API abuse and brute-force attacks.', 'Secured HTTP headers to protect against web vulnerabilities.', ' Integrated Swagger for interactive API documentation and testing.', 'To secure API access with token-based authentication.', ' Stored and managed application data.', 'Cached data for faster access.']
    }],
  },
  {
    name: "Pruvity HR Solutions Pvt Ltd",
    icon: pruvitygroup,
    title: "Associate Software Developer",
    duration: "Jan-2021 to May-2024",
    project: 'Project: MteamZ, HRBluSky',
    stack: '#Nodejs #Expressjs #Mongodb #Laravel',
    address: "253, Bhagat Singh St, Mandure, Vandiyur, Thasildar Nagar, Madurai, Tamil Nadu 625020",
    global: AiOutlineGlobal,
    linkicon: AiOutlineLink,
    expHeadings: ["Agile Collaboration: ", "Stakeholder Engagement: ", "Code Craftsmanship: ", "DB Proficiency: ", "Agile Adaptability: ", "User Support: ", "Code Quality Assurance: ", "Deployment and Support: ", "Testing Proficiency: "],
    experience: ["Mastering Agile teamwork to orchestrate seamless communication and drive efficient project execution, sprint by sprint. Tool - #JIRA",
      "Turned business goals into precise technical plans, aligning technology with company objectives.",
      "Wrote clean, high-quality code following industry best practices.",
      "Optimized MongoDB queries for fast and efficient data handling.",
      "Adapted quickly to changing requirements, delivering timely features.",
      "Resolved technical issues swiftly, ensuring a great user experience.",
      "Maintained code quality through thorough reviews and constructive feedback.",
      "Ensured smooth application deployment and reliable production support. Tool - #Smart GIT, #Sublime Merge",
      "Implemented rigorous testing to identify and fix software bugs, ensuring robust performance. Tool - #Postman"
    ],
    projects: [{
      name: "MteamZ - Social App", logo: mteamz, website: "https://www.mteamz.com/",
      applink: "https://app.mteamz.com", expHeadings: ["Routing and Middleware: #Express.js", "MongoDB Indexing: #MongoDB Compass", "Query Management: #mongoose", "MongoDB Trigger and Search Index: #MongoDB Atlas Cloud", "Order Management: #Razorpay, #Stripe, #Puppeteer", "Bulk Product Management: #ExcelJS", "Dynamic Form Generation", "File Management, Notifications, Emails: #aws-sdk", "Reporting: #xlsx"], experience: ['Architected routing and middleware in "Express.js", enhancing backend performance and scalability.', 'Utilized "MongoDB Compass" for query testing, data verification, and patching with "MongoDB Shell".', 'Connected Node.js and MongoDB using "Mongoose" for efficient query handling.', 'Created scheduled triggers for greetings notifications and seamlessly updating data with database triggers. Implemented fuzzy search using search index in "MongoDB Atlas".', 'Managed payments with "Razorpay" and "Stripe". Generated order bills using "Puppeteer".', 'Streamlined bulk product upload and retrieval with "ExcelJS".', 'Enabled custom form creation for helpdesk, quotations, and feedback, enhancing backend flexibility.', 'Handled file storage with "S3", push notifications with "SNS", and email dispatch using "SES".', 'Implemented efficient reporting and data export to CSV using "XLSX".']
    }, {
      name: "HRBluSky - User Portal", logo: hrblusky, website: "https://hrblusky.com/",
      applink: "https://app.hrblusky.com/", expHeadings: ["RESTful API Development: #MVC Pattern, #jenssegers/mongodb", "Secure Authentication: #tymondesigns/jwt-auth", "Advanced Reporting and Search: #phpoffice/phpspreadsheet, #maatwebsite/excel", "Payroll PDF Generation: #barryvdh/laravel-dompdf", "File Management: #aws/aws-sdk-php"], experience: [`Leveraged Laravel's MVC pattern to develop robust APIs for Employee Leave, Claim, and Shift modules. Utilized the "jenssegers/mongodb" package to seamlessly connect Laravel with MongoDB, ensuring efficient data management and high performance.`, 'Enhanced application security by implementing JWT token-based authentication and authorization using the "tymondesigns/jwt-auth" package. This approach ensured secure access control and user authentication.', 'Created sophisticated reporting and search functionalities, including Excel export capabilities, with the "phpoffice/phpspreadsheet" and "maatwebsite/excel" packages. Delivered comprehensive data insights and easy-to-use reporting tools.', 'Generated professional and accurately formatted payroll PDFs using the "barryvdh/laravel-dompdf" package. This ensured reliable and visually appealing document outputs for payroll processes.', 'Managed file storage and retrieval efficiently using the "aws/aws-sdk-php" package. Implemented robust file management and image handling solutions to ensure secure and scalable data storage.']
    }],
    arrow: AiOutlineArrowRight
  },
  {
    name: "Pruvity HR Solutions Pvt Ltd",
    icon: pruvitygroup,
    title: "Intern",
    duration: "Feb-2020 to Dec-2020",
    project: 'Project: HRBluSky',
    stack: '#Laravel #Mongodb',
    address: "253, Bhagat Singh St, Mandure, Vandiyur, Thasildar Nagar, Madurai, Tamil Nadu 625020",
    global: AiOutlineGlobal,
    linkicon: AiOutlineLink,
    arrow: AiOutlineArrowRight,
    expHeadings: ["Mastered Laravel and MongoDB Basics: ", "Resolved Complex Bugs: ", "Acquired Comprehensive Workflow Knowledge: ", "Adapted to Team Dynamics: "],
    experience: ["Gained a strong foundational knowledge of Laravel, a leading PHP framework, and MongoDB, a popular NoSQL database, enabling me to build and manage robust web applications.",
      "Demonstrated exceptional problem-solving skills by identifying, troubleshooting, and resolving intricate bugs during the development of HRBlusky, significantly improving the project's stability and performance.",
      "Developed a deep understanding of the overall development workflow, from initial planning and design to implementation and testing, ensuring efficient and effective project execution.",
      "Quickly integrated into the team environment, collaborating seamlessly with colleagues, and contributing to a productive and harmonious workplace."
    ],
    projects: [],
  }
];
const intro = [
  {
    intro: "Passionate Backend Developer with 4.5+ years of experience, mastering Node.js, Express.js, Nest.js and Laravel to build scalable, high-performance applications. Adept at crafting seamless APIs and optimizing database interactions with MongoDB, PostgreSQL, Redis. Committed to delivering robust, elegant solutions that drive business success.",
    download: AiOutlineVerticalAlignBottom,
    contact: AiFillPhone
  }
];
const about = [
  {
    one: "Dynamic and results-driven Backend Developer with 4.5+ years of experience building scalable, secure, and high-performance applications using Node.js, NestJS, and Laravel. I specialize in crafting clean, efficient APIs, optimizing databases with MongoDB and PostgreSQL, and engineering backend systems that power real-world platforms.",

    two: "Driven by a deep passion for problem-solving, I take pride in transforming complex requirements into elegant, maintainable solutions.",

    three: "I thrive in fast-moving, collaborative environments, actively participating in code reviews, sharing best practices, and continuously learning to level up both myself and my team.",

    four: '"' + "Let’s turn ideas into impactful digital experiences." + '"'
  }
]
const footer = [
  {
    icon: AiOutlineMail,
    content: "vanithaponraj18@gmail.com",
    title: "Gmail"
  },
  {
    icon:  AiFillLinkedin,
    content: "https://www.linkedin.com/in/vanitha-ponraj/",
    title: "Linkedin"
  },
  {
    icon:  AiFillGithub,
    content: "https://github.com/Vanitha-P",
    title: "Github"
  }
]
export {
  technologies,
  tools,
  experience,
  intro,
  about,
  footer
};