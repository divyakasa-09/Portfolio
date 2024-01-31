import { meta, shopify, starbucks, tesla, husky, jntuh,cog  } from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    angular,
    java,
    mysql,
    python,
    sqlserver,
    vscode,
    swiftui,
    price_tracker

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: swiftui,
        name: "swiftui",
        type: "Framework",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "frontend",
    },
    {
        imageUrl: mysql,
        name: "MYSQL",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: sqlserver,
        name: "sqlserver",
        type: "Database",
    },
    {
        imageUrl: vscode,
        name: "VSCode",
        type: "IDE",
    },


    {
        imageUrl: java,
        name: "Java",
        type: "backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Software Developer",
        company_name: "Cognizant",
        icon: cog,
        iconBg: "#accbe1",
        date: "Sept 2021 - December 2022",
        points: [
            "Developed and improved an Edtech web Application using React, .ASP NET MVC and SQL SERVER ",
            "Built and integrated Educator dashboard with RESTful web servies to enhance application features using .NET and SQL SERVER",
            "Enhanced application features by modifying backend in C# to eliminate empty file creation during ETL process for acquired data, resulted in a 30% increase in application performance and efficiency",
            "Contributed to successful migration of legacy code to modern C# and .NET platforms, integrated unit-test cases into Azure’s CI/CD pipeline, resulting in a 12.5% improvement in code coverage, and ensuring smooth and reliable software builds",
            "Involved in Agile/Scrum-driven development by actively participating in sprint planning, daily stand-up meetings, and consistently achieving sprint objectives"
        ],
    },
    {
        title: "Full Stack Software Developer Intern",
        company_name: "Cognizant ",
        icon: cog,
        iconBg: "#fbc3bc",
        date: "Feb 2021 - Aug 2021",
        points: [
            "Built a web application with the team of 3 other interns, that could perform all the CRUD functionalities using .NET and SQLSERVER within tight deadlines, resulting in a fully functional System that met all requirements",
            "Developed RESTful APIs for communication between the front-end [Angular] and back-end [ASP.NET MVC] components of the application",
            "Coordinated with cross-functional teams and improve the reusability of UI components by optimizing code, resulted in a 20% decrease in code duplication",
      
        ],
    },
   
    
];
export const education = [
    {
        university_name : "Northeastern University",
        course_name: "Master of Science in Information Systems",
        icon : husky,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points : [
            "Relavant Courses: Application Development Engineering, Web Design and User Experience, Program Structures and Algorithms, Databases, Object Oriented Design, UI/UX"
            
        ]
    },
    {
        university_name : "Jawaharlal Nehru Technological University Hyderabad",
        course_name:  "Bachelor of Technology in Computer Science and Engineering",
        icon : jntuh,
        iconBg: "#a2d2ff",
        date: "Aug 2017 - May 2021",
        points : [
            "Relevant Coursework: Data Structures, Web Technologies, Java, Python, Software Engineering, Object Oriented Programming"
        ]
    }
]
export const socialLinks = [
    
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/divyakasa-09',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/divya-kasa/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Rentaway',
        description: 'Developed a robust and scalable web application that facilitates seamless searching and booking of short-term accommodations.By leveraging our platform, property owners can easily maximize their profits by generating income from their vacant or underutilized spaces.Our application boasts advanced search functionalities that allow users to filter accommodations based on parameters such as location, price range, amenities, and availability.',
        link: 'https://github.com/divyakasa-09/RentawayProject',
    },
    {
        iconUrl: price_tracker,
        theme: 'btn-back-red',
        name: 'Price-Tracker',
        description: 'Built a web application that enables users to track product prices on Amazon with ease. The application periodically collects data from Amazon and automatically alerts users via email when the price of a product drops to a more affordable range. This process ensures users never miss out on significant price reductions and allows them to make informed purchasing decisions. Our platform provides a user-friendly interface where users can effortlessly add products they wish to track.',
        link: 'https://github.com/divyakasa-09/Price_Tracker',
    }
   
];