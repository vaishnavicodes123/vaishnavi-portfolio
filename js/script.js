/*MOBILE MENU*/

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/*  DARK / LIGHT MODE  */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});




const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    const icon = themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}





/*  SCROLL REVEAL  */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ACTIVE NAVIGATION */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* BACK-TOP(Scroll, click)  */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* CURRENT YEAR  */

document.getElementById("currentYear")
    .textContent = new Date().getFullYear();

   /* PROJECT */

const projectData = {

    "video-audio": {

        title: "Video & Audio Detection System",

        subtitle: "Machine Learning Project",

        description:
            "A machine learning-based system developed to analyse and detect patterns in video and audio inputs. The project combines machine learning techniques for processing and classification of multimedia data.",

        technologies: [
            "Python",
            "Machine Learning",
            "SVM",
            "CNN"
        ],

        features: [
            "Analyses video and audio inputs.",
            "Detects relevant patterns using machine learning.",
            "Uses SVM for classification.",
            "Uses CNN for image and video-based analysis.",
            "Supports automated multimedia detection."
        ],

        role:
            "Worked on the development and implementation of the machine learning-based detection system, including data processing and model development."

    },


    "finance": {

        title: "Personal Finance Manager",

        subtitle: "Full-Stack MERN Project",

        description:
            "A full-stack personal finance management application designed to help users track and manage their expenses and financial records through an interactive web interface.",

        technologies: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "JWT"
        ],

        features: [
            "User authentication using JWT.",
            "Create, update and delete financial records.",
            "Track personal expenses and transactions.",
            "Store financial data using MongoDB.",
            "Interactive React-based interface."
        ],

        role:
            "Worked on the full-stack development of the application, including frontend development, backend APIs, database integration and authentication."

    },


    "career": {

        title: "Career Guidance System",

        subtitle: "Java & Database Project",

        description:
            "A career recommendation system designed to provide suitable career suggestions based on a user's interests, skills and academic performance.",

        technologies: [
            "Java",
            "MySQL",
            "Firebase"
        ],

        features: [
            "Collects user interests and skills.",
            "Considers academic performance.",
            "Provides career recommendations.",
            "Stores user information.",
            "Provides a simple and user-friendly interface."
        ],

        role:
            "Contributed to application development, database integration and implementation of the career recommendation functionality."

    }

};


/*  PROJECT MODAL */

function openProject(projectId) {

    const project = projectData[projectId];

    if (!project) {

        console.error("Project not found:", projectId);

        return;

    }


    const modal =
        document.getElementById("projectModal");

    const details =
        document.getElementById("projectDetails");


    /* Create modal content */

    details.innerHTML = `

        <h2>
            ${project.title}
        </h2>


        <p class="modal-subtitle">
            ${project.subtitle}
        </p>


        <h4>
            About the Project
        </h4>

        <p>
            ${project.description}
        </p>


        <h4>
            Technologies Used
        </h4>

        <div class="modal-technologies">

            ${project.technologies
                .map(
                    tech => `<span>${tech}</span>`
                )
                .join("")}

        </div>


        <h4>
            Key Features
        </h4>

        <ul class="modal-features">

            ${project.features
                .map(
                    feature => `<li>${feature}</li>`
                )
                .join("")}

        </ul>


        <h4>
            My Contribution
        </h4>

        <p>
            ${project.role}
        </p>

    `;


    modal.classList.add("active");




    document.body.style.overflow = "hidden";

}




function closeProject() {

    const modal =
        document.getElementById("projectModal");


    modal.classList.remove("active");


    /* Enable page scrolling */

    document.body.style.overflow = "";

}



document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById("projectModal");

        if (
            event.target === modal
        ) {

            closeProject();

        }

    }
);




document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);