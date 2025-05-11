/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gerson Higgins",
  title: "Hi all, I'm Gerson",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Ruby & Rails and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1uFWULU4ZuOwSsz9bT1RO_yf37ZuqyJNSaLc6EQdHYdA/edit?tab=t.0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gersonhiggins",
  linkedin: "https://www.linkedin.com/in/gersonh/",
  gmail: "gersonhiggins28@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER EXPLORING INNOVATIVE TECHNOLOGIES AND BUILDING IMPACTFUL SOLUTIONS",
skills: [
  emoji(
    "⚡ Build dynamic and responsive user interfaces using React.js and modern JavaScript libraries"
  ),
  emoji(
    "⚡ Develop robust back-end systems and RESTful APIs with Ruby on Rails"
  ),
  emoji(
    "⚡ Seamlessly integrate third-party services and APIs to enhance application functionality"
  ),
  emoji(
    "⚡ Optimize performance and scalability for full-stack web applications"
  )
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "ruby on rails",
      fontAwesomeClassname: "fa-solid fa-gem"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Simon Bolivar University",
      logo: require("./assets/images/usb-logo-clipart-xl.png"),
      subHeader: "Degree on Physics",
      duration: "2014 - 2018",
      desc: "",
      descBullets: [
        "Developed strong analytical and problem-solving skills through coursework in advanced mathematics and physics.",
        "Collaborated with peers on group projects, enhancing teamwork and communication skills."
      ]
    },
    {
      schoolName: "Microverse",
      logo: require("./assets/images/microverse.jpg"),
      subHeader: "Full Stack Software Developer",
      duration: "2023 - 2024",
      desc: "",
      descBullets: [
        "Completed 1300+ hours of hands-on coding, mastering React, Ruby on Rails, and PostgreSQL.",
        "Collaborated with international teams on 30+ projects, adhering to Agile methodologies.",
        "Gained expertise in remote pair programming, Git workflows, and test-driven development (TDD)."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some Projects that I have worked on",
  projects: [
    {
      image: require("./assets/images/cima.png"),
      projectName: "Cima Bar Landing Page",
      projectDesc: "React application for a restaurant bar in Venezuela",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://gersonhiggins.github.io/cima-bar/"
        },
        {
          name: "Github",
          url: "https://github.com/gersonhiggins/cima-bar"
        }
         //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mathmagicians.png"),
      projectName: "Math Magicians",
      projectDesc: "A simple yet powerful web-based calculator built using React.js. This application allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gersonhiggins.github.io/math-magicians"
        },
                {
          name: "Github",
          url: "https://github.com/gersonhiggins/math-magicians"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microverse Software Development Program",
      subtitle:
        "Students earn this credential after working through 1500+ hours of remote pair programming, learning to code with teams from around the world.",
      image: require("./assets/images/fullstackcertificate.webp"),
      imageAlt: "Full Stack developer Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "http://credential.net/05a35146-b0b1-47c9-8ce7-6a13e3c1a7cb#acc.wx1TNKYC"
        },
      ]
    },
    {
      title: "Microverse Ruby on Rails Module",
      subtitle:
        "Students earn this credential upon demonstrating mastery of Ruby on Rails by building multiple real-world Rails applications alongside software developers from all over the world.",
      image: require("./assets/images/rubyonrails.webp"),
      imageAlt: "Ruby on Rails Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credential.net/9aa5bcb8-44c5-4de2-b341-248bb58ec6df#acc.zRcBrGkp"
        }
      ]
    },

    {
      title: "Microverse Ruby/Databases Module",
      subtitle: "Students earn this credential after demonstrating thorough and complete understanding of Ruby and databases by building multiple projects while collaborating and pair programming remotely with developers across the world.",
      image: require("./assets/images/ruby.webp"),
      imageAlt: "Ruby Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credential.net/67b66e65-6d06-445e-8ded-f45b6bdee331#acc.6dUILfz3"
        },

      ]
    },
    {
      title: "Microverse React and Redux Module",
      subtitle: "Students earn this credential after demonstrating thorough understanding and mastery of React and Redux. Over the course of this module, students build and develop multiple projects using React and Redux, working both independently and while remotely pair-programming.",
      image: require("./assets/images/reactredux.webp"),
      imageAlt: "React and Redux Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credential.net/cd4457d2-b222-4e02-adc5-53be9e253a45#acc.uQfvZSRK"
        },

      ]
    },
    {
      title: "Microverse JavaScript Module",
      subtitle: "Students earn this credential after demonstrating understanding and mastery of JavaScript. During the course of this module, they build several projects using JavaScript while pair-programming remotely with an international team of software developers.",
      image: require("./assets/images/javas.webp"),
      imageAlt: "Java Script Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credential.net/c6ade591-c867-4d58-92a7-a1bc8e590891#acc.ISpvY5n1"
        },

      ]
    },
        {
      title: "Microverse Html/CSS Module",
      subtitle: "Students earn this credential after demonstrating industry standard HTML and CSS skills, achieved working on remote pair programming with teams from around the world.",
      image: require("./assets/images/htmlcss.webp"),
      imageAlt: "Html/Css Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credential.net/34cc0bb8-adcf-4a17-94e3-c3846e114a6a#acc.he74WuBL"
        },

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 804-698-0072",
  email_address: "gersonhiggins28@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
