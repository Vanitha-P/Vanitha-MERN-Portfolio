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
import synechron from '../src/assets/synechron.png'
import laravel from '../src/assets/laravel.png'
import redis from '../src/assets/redis.png'
import aws_services from '../src/assets/Amazon_Web_Services.png'
import docker from '../src/assets/docker.png'
import postgresql from '../src/assets/postgresql.png'
import kubernetes from '../src/assets/kubernetes.png'
import avis from '../src/assets/avis.png'
import enbd from "../src/assets/enbd.png"
import momopay from '../src/assets/momopay.png'
import { AiOutlineArrowRight, AiOutlineGlobal, AiOutlineLink, AiFillPhone, AiOutlineVerticalAlignBottom, AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
const technologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
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
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "AWS Services",
    icon: aws_services,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
    name: "Synechron Technologies Pvt Ltd",
    icon: synechron,
    title: "Senior Associate - Technology",
    duration: "February-2026 to June-2026",
    project: 'Project: Emirates NBD',
    stack: '#Nodejs #ExpressJS #Typescript',
    address: "DLF Downtown, Taramani Link Rd, Tharamani, Chennai, Tamil Nadu 600113",
    global: AiOutlineGlobal,
    linkicon: AiOutlineLink,
    arrow: AiOutlineArrowRight,
    expHeadings: [],
    experience: [
    ],
    projects: [{
      name: "ENBD - Emirates National banking APP", logo: enbd, website: "https://www.emiratesnbd.com/en",
      applink: "https://www.emiratesnbd.com/en/ways-of-banking/mobile-banking", expHeadings: ["API Optimization: ", "API Testing & Validation: ", "Agile Delivery: "],
      experience: ["Removed an unnecessary TIPCO service-layer dependency and consolidated the required logic into a single service to simplify API processing.", "Implemented API changes based on Jira requirements, validated response fields and functionality using Postman, and updated Jira tickets with testing evidence and results.", "Participated in sprint planning, code reviews and feature delivery within Agile/Scrum practices."
      ]
    }],
  },
  {
    name: "Photon Infotech Pvt Ltd",
    icon: photon,
    title: "Senior Software Engineer I",
    duration: "March-2025 to Jan-2026",
    project: 'Project: Avis First',
    stack: '#Nodejs #Typescript #Redis #MongoDB #AWS Services',
    address: "D.L.F Cyber City (DLF IT Park), Ramapuram, Chennai, Tamil Nadu 600125",
    global: AiOutlineGlobal,
    linkicon: AiOutlineLink,
    arrow: AiOutlineArrowRight,
    expHeadings: ["Backend Engineering (Node.js, TypeScript, Express.js, Microservices, AWS Lambda, API Gateway, Redis, MongoDB): ", "Serverless Architecture: ", "Rental & Trip Management: "],
    experience: ["Developed the Concierge Microservice, delivering Rental APIs, Trip Lifecycle Management, and real-time tracking workflows.", "Developed REST APIs using Node.js and Express.js, integrated with AWS Lambda using serverless-http, and exposed endpoints through API Gateway for rental listings and trip status updates.", "Optimized Rental List APIs using Redis cache-aside, dynamic filtering, and cache invalidation across the complete trip lifecycle."
    ],
    projects: [{
      name: "AVIS - Car Rental APP", logo: avis, website: "https://www.avis.com/en/home",
      applink: "https://play.google.com/store/apps/details?id=com.avis.androidapp&hl=en_IN", expHeadings: ["Jest: ", "Mockoon: ",], experience: ['Maintained 95%+ coverage using Jest.', 'Created mock APIs with Mockoon for faster integration.',]
    }],
  },
  {
    name: "Future Focus Infotech Pvt Ltd",
    icon: futurefocus,
    title: "Senior Software Engineer",
    duration: "July-2024 to Jan-2025",
    project: 'Project: MOMO Payment',
    stack: '#Nodejs #Expressjs #Grafana',
    address: "No.169,(old 62 1, Habibullah Rd, Bharathy Nagar, T. Nagar, Chennai, Tamil Nadu 600017",
    global: AiOutlineGlobal,
    linkicon: AiOutlineLink,
    arrow: AiOutlineArrowRight,
    expHeadings: ["API Integration: ", "Country-Specific Enhancements: ", "Issue Analysis & Resolution: ", "Cross-Team Collaboration: "],
    experience: ["Worked on Node.js and TypeScript backend APIs to convert frontend JSON requests into XML payloads for downstream services and transform XML responses back into JSON.",
      "Implemented country-specific payload changes for Ghana and Uganda based on Jira requirements, ensuring compatibility with existing payment service integrations.",
      "Analyzed application and service logs using Grafana to identify issues across frontend and backend services, troubleshoot problems, and implement fixes.", "Collaborated with offshore teams across different time zones to investigate issues, coordinate fixes, and provide timely support."
    ],
    projects: [{
      name: "MOMO Payment", logo: momopay, website: "https://momo.mtn.com/home-page/",
      applink: "https://play.google.com/store/apps/details?id=com.consumerug", expHeadings: [" express-rate-limiting: ", "Helmet: ", "Swagger: ", "JWT: ", "Redis: "], experience: ['To prevent API abuse and brute-force attacks.', 'Secured HTTP headers to protect against web vulnerabilities.', ' Integrated Swagger for interactive API documentation and testing.', 'To secure API access with token-based authentication.', 'Cached data for faster access.']
    }],
  },
  {
    name: "Pruvity HR Solutions Pvt Ltd",
    icon: pruvitygroup,
    title: "Associate Software Developer",
    duration: "Jan-2021 to May-2024",
    project: 'Project: MteamZ, HRBluSky',
    stack: '#Nodejs #Expressjs #Mongodb #AWS-Services #Laravel',
    address: "253, Bhagat Singh St, Mandure, Vandiyur, Thasildar Nagar, Madurai, Tamil Nadu 625020",
    global: AiOutlineGlobal,
    linkicon: AiOutlineLink,
    expHeadings: ["Agile Collaboration: ", "AWS Serverless Architecture: ", "DB Proficiency: ", "Agile Adaptability: ", "User Support: ", "Code Quality Assurance: ", "Deployment and Support: ", "Testing Proficiency: "],
    experience: ["Collaborated in 2-week Agile sprints using JIRA, delivering feature releases on schedule across cross-functional teams.",
      "Integrated AWS Lambda, API Gateway, SNS, and SQS into Node.js applications using AWS SDK and serverless-http for synchronous API communication, asynchronous processing, and background task execution.",
      "Optimized MongoDB queries for fast and efficient data handling.",
      "Adapted quickly to changing requirements, delivering timely features.",
      "Resolved technical issues swiftly, ensuring a great user experience.",
      "Maintained code quality through thorough reviews and constructive feedback.",
      "Ensured smooth application deployment and reliable production support. Tool - #Smart GIT, #Sublime Merge",
      "Tested REST APIs using Postman to validate request payloads, response data, and endpoint functionality"
    ],
    projects: [{
      name: "MteamZ - E-Com App", logo: mteamz, website: "https://www.mteamz.com/",
      applink: "https://app.mteamz.com", expHeadings: ["Node.js & Express.js: ", "MongoDB Indexing: #MongoDB Compass", "Query Management: #mongoose", "MongoDB Trigger and Search Index: #MongoDB Atlas Cloud", "Order Management: #Razorpay, #Stripe", "Bulk Product Management: #ExcelJS #AWS-SQS, #S3", "Dynamic Form Generation", "AWS Lambda: ", "Socket.IO: ", "AWS CloudWatch & Winston: : "], experience: ['Optimized APIs using non-blocking operations, RESTful routing, and middleware like JWT(RBAC custom), cors(third-party), express.json(inbuilt), error handling(app level) efficiently.', 'Utilized "MongoDB Compass" for query testing, data verification, and patching with "MongoDB Shell".', 'Connected Node.js and MongoDB using "Mongoose" for efficient query handling.', 'Created scheduled triggers for greetings notifications and seamlessly updating data with database triggers. Implemented fuzzy search using search index in "MongoDB Atlas".', 'Managed payments with "Razorpay" and "Stripe"', 'Streamlined bulk product upload and retrieval with "ExcelJS". Background proccessing using S3 and SQS', 'Enabled custom form creation for helpdesk, quotations, and feedback, enhancing backend flexibility.', "Developed and maintained serverless backend APIs and application logic.", "Updated count, listed notifications.", "Implemented logging for error tracking, debugging, and monitoring."]
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
    intro: "I build reliable REST APIs, microservices, and event-driven backend applications using Node.js, TypeScript, MongoDB, Redis, and AWS services. Focused on clean code, secure API development, performance optimization, and scalable backend solutions. Recently, I’ve upskilled in React.js and explored Claude AI to expand my frontend development and Generative AI knowledge",
    download: AiOutlineVerticalAlignBottom,
    contact: AiFillPhone
  }
];
const about = [
  {
    one: "I’m a Senior Node.js Backend Engineer with 5 years of professional experience building REST APIs, microservices, and backend applications using Node.js, TypeScript, Express.js, MongoDB, and Redis.",

    two: "I have experience integrating AWS services such as Lambda, API Gateway, SQS, and SNS into backend applications to support serverless workflows and asynchronous processing. I enjoy solving technical challenges, optimizing API performance, troubleshooting issues, and building secure, maintainable solutions.",

    three: "Recently, I’ve upskilled in React.js and explored Claude AI to expand my frontend development and Generative AI knowledge. I’m passionate about continuous learning, writing clean code, and building reliable applications that solve real-world problems.",

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