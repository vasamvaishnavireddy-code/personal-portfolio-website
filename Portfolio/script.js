/* =========================================================
   VAISHNAVI REDDY PORTFOLIO
   COMPLETE UPDATED JAVASCRIPT
========================================================= */


/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    agritech: {
        title: "AgriTech",
        category: "Web Development • Agriculture",

        description:
            "AgriTech is a farmer-support web platform designed to provide useful agricultural information and digital support. The project focuses on helping farmers access crop suggestions, smart farming techniques and agriculture-related information through a simple and user-friendly interface.",

        features: [
            "Crop suggestion based on season, soil and water availability",
            "Smart farming techniques",
            "Agriculture-focused user interface",
            "Farmer-friendly navigation",
            "Support for multilingual agricultural information"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github:
            "https://github.com/vasamvaishnavireddy-code/AgriTech-FarmerSupport-App-",

        images: [
            "images/agritech-1.png",
            "images/agritech-2.png",
            "images/agritech-3.png",
            "images/agritech-4.png",
            "images/agritech-5.png"
        ]
    },


    nexthire: {
        title: "Nexthire-AI",
        category: "AI • Resume Analysis",

        description:
            "Nexthire-AI is a resume analyzer project focused on analyzing resume information and presenting useful insights. The project explores how AI-based ideas can be applied to resume analysis and career-oriented applications.",

        features: [
            "Resume analysis interface",
            "Resume information processing",
            "AI-oriented project concept",
            "Simple and user-friendly design",
            "Career-focused analysis"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "AI"
        ],

        github:
            "https://github.com/vasamvaishnavireddy-code/Nexthire-AI",

        images: [
            "images/nexthire-1.png",
            "images/nexthire-2.png"
        ]
    },


    campus: {
        title: "Campus Event Hub",
        category: "Web Development • Campus",

        description:
            "Campus Event Hub is a responsive college event management webpage created for bringing different college events into one organized platform. Students can search and explore technical, cultural, sports and departmental events.",

        features: [
            "Department-based event selection",
            "Live event search",
            "Event details including venue and timing",
            "Registration functionality",
            "WhatsApp group links",
            "Event coordinator information",
            "Interactive calendar",
            "Registered event date highlighting",
            "Responsive design"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "LocalStorage"
        ],

        github:
            "https://github.com/vasamvaishnavireddy-code/Campus-event-hub",

        images: [
            "images/campus-event-1.png",
            "images/campus-event-2.png",
            "images/campus-event-3.png",
            "images/campus-event-4.png",
            "images/campus-event-5.png"
        ]
    },


    agrivision: {
        title: "AgriVision",
        category: "Agriculture • Web Platform",

        description:
            "AgriVision is an agriculture ecosystem web platform designed to connect different participants of the agricultural sector. The concept brings farmers, equipment owners, suppliers, retailers, consumers, logistics partners and other stakeholders into a connected digital ecosystem.",

        features: [
            "Farmer support",
            "Equipment rental",
            "Agricultural marketplace",
            "Logistics support",
            "Government support information",
            "AI-powered agricultural assistance",
            "Role-based platform concept",
            "Agriculture ecosystem connectivity"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "AI"
        ],

        github:
            "https://github.com/vasamvaishnavireddy-code/Agri-Vision",

        images: [
            "images/agrivision-1.png",
            "images/agrivision-2.png",
            "images/agrivision-3.png",
            "images/agrivision-4.png",
            "images/agrivision-5.png"
        ]
    }

};


/* =========================================================
   CERTIFICATE DATA
========================================================= */

const certificateData = [

    {
        title: "Cisco Certificate 01",
        category: "Cisco Certification",
        image: "certificates/cisco-1.png"
    },

    {
        title: "Cisco Certificate 02",
        category: "Cisco Certification",
        image: "certificates/cisco-2.png"
    },

    {
        title: "Cisco Certificate 03",
        category: "Cisco Certification",
        image: "certificates/cisco-3.png"
    },

    {
        title: "Cisco Certificate 04",
        category: "Cisco Certification",
        image: "certificates/cisco-4.png"
    },

    {
        title: "Cisco Certificate 05",
        category: "Cisco Certification",
        image: "certificates/cisco-5.png"
    },

    {
        title: "Cisco Certificate 06",
        category: "Cisco Certification",
        image: "certificates/cisco-6.png"
    },

    {
        title: "Oracle Certificate 01",
        category: "Oracle Certification",
        image: "certificates/oracle-1.png"
    },

    {
        title: "Oracle Certificate 02",
        category: "Oracle Certification",
        image: "certificates/oracle-2.png"
    },

    {
        title: "Oracle Certificate 03",
        category: "Oracle Certification",
        image: "certificates/oracle-3.png"
    },

    {
        title: "Next Gen Hack",
        category: "Hackathon",
        image: "certificates/hackathon-1.png"
    },

    {
        title: "Buildathon",
        category: "Buildathon",
        image: "certificates/buildathon-1.png"
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const body = document.body;

const header =
    document.getElementById("header");

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");

const scrollProgress =
    document.getElementById("scrollProgress");

const revealElements =
    document.querySelectorAll(".reveal");


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen =
            navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}


/* =========================================================
   SCROLL EFFECTS
========================================================= */

function handleScroll() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;


    if (scrollProgress) {

        scrollProgress.style.width =
            `${progress}%`;

    }


    if (header) {

        if (scrollTop > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

}


window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
);

handleScroll();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");


function updateActiveNav() {

    const currentPosition =
        window.scrollY + 180;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            currentPosition >= sectionTop &&
            currentPosition < sectionBottom
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);

updateActiveNav();


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =========================================================
   PROJECT MODAL ELEMENTS
========================================================= */

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalImage =
    document.getElementById("modalImage");

const modalDescription =
    document.getElementById("modalDescription");

const modalFeatures =
    document.getElementById("modalFeatures");

const modalTech =
    document.getElementById("modalTech");

const modalGithub =
    document.getElementById("modalGithub");

const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");

const galleryCounter =
    document.getElementById("galleryCounter");

const galleryDots =
    document.getElementById("galleryDots");


let currentProject = null;

let currentImageIndex = 0;


/* =========================================================
   PROJECT BUTTONS
========================================================= */

const projectButtons =
    document.querySelectorAll(
        ".project-details-btn"
    );


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectId =
            button.dataset.project;

        openProjectModal(projectId);

    });

});


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

function openProjectModal(projectId) {

    const project =
        projectData[projectId];


    if (!project || !projectModal) {

        return;

    }


    currentProject =
        project;

    currentImageIndex =
        0;


    if (modalTitle) {

        modalTitle.textContent =
            project.title;

    }


    if (modalCategory) {

        modalCategory.textContent =
            project.category;

    }


    if (modalDescription) {

        modalDescription.textContent =
            project.description;

    }


    if (modalGithub) {

        modalGithub.href =
            project.github;

        modalGithub.target =
            "_blank";

        modalGithub.rel =
            "noopener noreferrer";

    }


    /* FEATURES */

    if (modalFeatures) {

        modalFeatures.innerHTML = "";


        project.features.forEach(feature => {

            const li =
                document.createElement("li");

            li.textContent =
                feature;

            modalFeatures.appendChild(li);

        });

    }


    /* TECHNOLOGIES */

    if (modalTech) {

        modalTech.innerHTML = "";


        project.technologies.forEach(technology => {

            const span =
                document.createElement("span");

            span.textContent =
                technology;

            modalTech.appendChild(span);

        });

    }


    createGalleryDots();

    updateGallery();


    projectModal.classList.add(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CLOSE PROJECT MODAL
========================================================= */

function closeProjectModal() {

    if (!projectModal) {

        return;

    }


    projectModal.classList.remove(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    body.classList.remove(
        "modal-open"
    );


    currentProject =
        null;

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


/* =========================================================
   PROJECT MODAL OVERLAY
========================================================= */

if (projectModal) {

    projectModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                projectModal
            ) {

                closeProjectModal();

            }

        }
    );

}


/* =========================================================
   CREATE PROJECT GALLERY DOTS
========================================================= */

function createGalleryDots() {

    if (!galleryDots || !currentProject) {

        return;

    }


    galleryDots.innerHTML = "";


    currentProject.images.forEach(
        (image, index) => {

            const dot =
                document.createElement("button");


            dot.type =
                "button";


            dot.className =
                "gallery-dot";


            dot.setAttribute(
                "aria-label",
                `Show screenshot ${index + 1}`
            );


            dot.addEventListener(
                "click",
                () => {

                    currentImageIndex =
                        index;

                    updateGallery();

                }
            );


            galleryDots.appendChild(
                dot
            );

        }
    );

}


/* =========================================================
   UPDATE PROJECT GALLERY
========================================================= */

function updateGallery() {

    if (
        !currentProject ||
        !currentProject.images.length ||
        !modalImage
    ) {

        return;

    }


    const image =
        currentProject.images[
            currentImageIndex
        ];


    modalImage.style.opacity =
        "0";


    setTimeout(() => {

        modalImage.src =
            image;

        modalImage.alt =
            `${currentProject.title} screenshot ${currentImageIndex + 1}`;

        modalImage.style.opacity =
            "1";

    }, 100);


    if (galleryCounter) {

        galleryCounter.textContent =
            `${currentImageIndex + 1} / ${currentProject.images.length}`;

    }


    if (galleryDots) {

        const dots =
            galleryDots.querySelectorAll(
                ".gallery-dot"
            );


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentImageIndex
            );

        });

    }

}


/* =========================================================
   NEXT PROJECT IMAGE
========================================================= */

function nextImage() {

    if (!currentProject) {

        return;

    }


    currentImageIndex++;


    if (
        currentImageIndex >=
        currentProject.images.length
    ) {

        currentImageIndex =
            0;

    }


    updateGallery();

}


if (galleryNext) {

    galleryNext.addEventListener(
        "click",
        nextImage
    );

}


/* =========================================================
   PREVIOUS PROJECT IMAGE
========================================================= */

function previousImage() {

    if (!currentProject) {

        return;

    }


    currentImageIndex--;


    if (currentImageIndex < 0) {

        currentImageIndex =
            currentProject.images.length - 1;

    }


    updateGallery();

}


if (galleryPrev) {

    galleryPrev.addEventListener(
        "click",
        previousImage
    );

}


/* =========================================================
   CERTIFICATE MODAL ELEMENTS
========================================================= */

const certificateModal =
    document.getElementById(
        "certificateModal"
    );

const certificateClose =
    document.getElementById(
        "certificateClose"
    );

const certificateTitle =
    document.getElementById(
        "certificateTitle"
    );

const certificateCategory =
    document.getElementById(
        "certificateCategory"
    );

const certificateImage =
    document.getElementById(
        "certificateImage"
    );

const certificateCounter =
    document.getElementById(
        "certificateCounter"
    );

const certificateDots =
    document.getElementById(
        "certificateDots"
    );

const certificatePrev =
    document.getElementById(
        "certificatePrev"
    );

const certificateNext =
    document.getElementById(
        "certificateNext"
    );


let currentCertificateIndex =
    0;


/* =========================================================
   CERTIFICATE BUTTONS
========================================================= */

const certificateButtons =
    document.querySelectorAll(
        ".certificate-details-btn"
    );


certificateButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const certificateIndex =
                Number(
                    button.dataset.certificate
                );


            openCertificateModal(
                certificateIndex
            );

        }
    );

});


/* =========================================================
   OPEN CERTIFICATE MODAL
========================================================= */

function openCertificateModal(index) {

    if (
        !certificateModal ||
        !certificateData[index]
    ) {

        return;

    }


    currentCertificateIndex =
        index;


    updateCertificate();


    certificateModal.classList.add(
        "active"
    );


    certificateModal.setAttribute(
        "aria-hidden",
        "false"
    );


    body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   UPDATE CERTIFICATE
========================================================= */

function updateCertificate() {

    const certificate =
        certificateData[
            currentCertificateIndex
        ];


    if (!certificate) {

        return;

    }


    if (certificateTitle) {

        certificateTitle.textContent =
            certificate.title;

    }


    if (certificateCategory) {

        certificateCategory.textContent =
            certificate.category;

    }


    if (certificateImage) {

        certificateImage.style.opacity =
            "0";


        setTimeout(() => {

            certificateImage.src =
                certificate.image;

            certificateImage.alt =
                certificate.title;

            certificateImage.style.opacity =
                "1";

        }, 100);

    }


    if (certificateCounter) {

        certificateCounter.textContent =
            `${currentCertificateIndex + 1} / ${certificateData.length}`;

    }


    createCertificateDots();

}


/* =========================================================
   CREATE CERTIFICATE DOTS
========================================================= */

function createCertificateDots() {

    if (!certificateDots) {

        return;

    }


    certificateDots.innerHTML =
        "";


    certificateData.forEach(
        (certificate, index) => {

            const dot =
                document.createElement(
                    "button"
                );


            dot.type =
                "button";


            dot.className =
                "gallery-dot";


            dot.setAttribute(
                "aria-label",
                `Show certificate ${index + 1}`
            );


            if (
                index ===
                currentCertificateIndex
            ) {

                dot.classList.add(
                    "active"
                );

            }


            dot.addEventListener(
                "click",
                () => {

                    currentCertificateIndex =
                        index;

                    updateCertificate();

                }
            );


            certificateDots.appendChild(
                dot
            );

        }
    );

}


/* =========================================================
   NEXT CERTIFICATE
========================================================= */

function nextCertificate() {

    currentCertificateIndex++;


    if (
        currentCertificateIndex >=
        certificateData.length
    ) {

        currentCertificateIndex =
            0;

    }


    updateCertificate();

}


if (certificateNext) {

    certificateNext.addEventListener(
        "click",
        nextCertificate
    );

}


/* =========================================================
   PREVIOUS CERTIFICATE
========================================================= */

function previousCertificate() {

    currentCertificateIndex--;


    if (
        currentCertificateIndex < 0
    ) {

        currentCertificateIndex =
            certificateData.length - 1;

    }


    updateCertificate();

}


/* =========================================================
   CERTIFICATE PREVIOUS BUTTON
========================================================= */

if (certificatePrev) {

    certificatePrev.addEventListener(
        "click",
        previousCertificate
    );

}


/* =========================================================
   CLOSE CERTIFICATE MODAL
========================================================= */

function closeCertificateModal() {

    if (!certificateModal) {

        return;

    }


    certificateModal.classList.remove(
        "active"
    );


    certificateModal.setAttribute(
        "aria-hidden",
        "true"
    );


    body.classList.remove(
        "modal-open"
    );

}


if (certificateClose) {

    certificateClose.addEventListener(
        "click",
        closeCertificateModal
    );

}


/* =========================================================
   CERTIFICATE OVERLAY CLICK
========================================================= */

if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                certificateModal
            ) {

                closeCertificateModal();

            }

        }
    );

}


/* =========================================================
   RESUME MODAL
========================================================= */

// ================= RESUME MODAL =================

function openResume() {
    document.getElementById("resumeModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeResume() {
    document.getElementById("resumeModal").classList.remove("active");
    document.body.style.overflow = "";
}


/* =========================================================
   RESUME FILE
========================================================= */

const resumeFile =
    "resume/Vaishnavi_Reddy_Resume.pdf";


/* =========================================================
   OPEN RESUME MODAL
========================================================= */

function openResumeModal() {

    if (!resumeModal) {

        return;

    }


    if (resumeFrame) {

        resumeFrame.src =
            resumeFile;

    }


    resumeModal.classList.add(
        "active"
    );


    resumeModal.setAttribute(
        "aria-hidden",
        "false"
    );


    body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   RESUME PREVIEW BUTTON
========================================================= */

resumeButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openResumeModal();

        }
    );

});


/* =========================================================
   CLOSE RESUME MODAL
========================================================= */

function closeResumeModal() {

    if (!resumeModal) {

        return;

    }


    resumeModal.classList.remove(
        "active"
    );


    resumeModal.setAttribute(
        "aria-hidden",
        "true"
    );


    body.classList.remove(
        "modal-open"
    );

}


if (resumeClose) {

    resumeClose.addEventListener(
        "click",
        closeResumeModal
    );

}


/* =========================================================
   RESUME OVERLAY CLICK
========================================================= */

if (resumeModal) {

    resumeModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                resumeModal
            ) {

                closeResumeModal();

            }

        }
    );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    event => {


        /* PROJECT MODAL */

        if (
            projectModal &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            if (
                event.key ===
                "Escape"
            ) {

                closeProjectModal();

            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                nextImage();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                previousImage();

            }

            return;

        }


        /* CERTIFICATE MODAL */

        if (
            certificateModal &&
            certificateModal.classList.contains(
                "active"
            )
        ) {

            if (
                event.key ===
                "Escape"
            ) {

                closeCertificateModal();

            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                nextCertificate();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                previousCertificate();

            }

            return;

        }


        /* RESUME MODAL */

        if (
            resumeModal &&
            resumeModal.classList.contains(
                "active"
            )
        ) {

            if (
                event.key ===
                "Escape"
            ) {

                closeResumeModal();

            }

        }

    }
);


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formSuccess =
    document.getElementById(
        "formSuccess"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                );

            const email =
                document.getElementById(
                    "email"
                );

            const subject =
                document.getElementById(
                    "subject"
                );

            const message =
                document.getElementById(
                    "message"
                );


            let valid =
                true;


            clearFormErrors();


            /* NAME */

            if (
                name &&
                name.value.trim() === ""
            ) {

                showError(
                    name,
                    "Please enter your name."
                );

                valid =
                    false;

            }


            /* EMAIL */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                email &&
                email.value.trim() === ""
            ) {

                showError(
                    email,
                    "Please enter your email."
                );

                valid =
                    false;

            } else if (
                email &&
                !emailPattern.test(
                    email.value.trim()
                )
            ) {

                showError(
                    email,
                    "Please enter a valid email."
                );

                valid =
                    false;

            }


            /* SUBJECT */

            if (
                subject &&
                subject.value.trim() === ""
            ) {

                showError(
                    subject,
                    "Please enter a subject."
                );

                valid =
                    false;

            }


            /* MESSAGE */

            if (
                message &&
                message.value.trim() === ""
            ) {

                showError(
                    message,
                    "Please enter your message."
                );

                valid =
                    false;

            }


            if (!valid) {

                return;

            }


            /* SUCCESS */

            if (formSuccess) {

                formSuccess.classList.add(
                    "show"
                );

            }


            contactForm.reset();


            setTimeout(
                () => {

                    if (formSuccess) {

                        formSuccess.classList.remove(
                            "show"
                        );

                    }

                },
                5000
            );

        }
    );

}


/* =========================================================
   FORM ERROR
========================================================= */

function showError(
    input,
    message
) {

    if (!input) {

        return;

    }


    input.classList.add(
        "input-error"
    );


    const error =
        input.parentElement
            ? input.parentElement.querySelector(
                ".error-message"
            )
            : null;


    if (error) {

        error.textContent =
            message;

    }

}


/* =========================================================
   CLEAR FORM ERRORS
========================================================= */

function clearFormErrors() {

    const inputs =
        document.querySelectorAll(
            ".contact-form input, .contact-form textarea"
        );


    inputs.forEach(input => {

        input.classList.remove(
            "input-error"
        );


        const error =
            input.parentElement
                ? input.parentElement.querySelector(
                    ".error-message"
                )
                : null;


        if (error) {

            error.textContent =
                "";

        }

    });

}


/* =========================================================
   LIVE FORM ERROR CLEAR
========================================================= */

const formInputs =
    document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    );


formInputs.forEach(input => {

    input.addEventListener(
        "input",
        () => {

            input.classList.remove(
                "input-error"
            );


            const error =
                input.parentElement
                    ? input.parentElement.querySelector(
                        ".error-message"
                    )
                    : null;


            if (error) {

                error.textContent =
                    "";

            }

        }
    );

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   PROJECT IMAGE ERROR HANDLING
========================================================= */

if (modalImage) {

    modalImage.addEventListener(
        "error",
        () => {

            console.error(
                "Project image not found:",
                modalImage.src
            );


            modalImage.alt =
                "Project screenshot not found";

            modalImage.style.objectFit =
                "contain";

        }
    );

}


/* =========================================================
   CERTIFICATE IMAGE ERROR HANDLING
========================================================= */

if (certificateImage) {

    certificateImage.addEventListener(
        "error",
        () => {

            console.error(
                "Certificate image not found:",
                certificateImage.src
            );


            certificateImage.alt =
                "Certificate image not found";

            certificateImage.style.objectFit =
                "contain";

        }
    );

}


/* =========================================================
   PREVENT BODY SCROLL WHEN MODAL IS OPEN
========================================================= */

function updateBodyModalState() {

    const projectOpen =
        projectModal &&
        projectModal.classList.contains(
            "active"
        );

    const certificateOpen =
        certificateModal &&
        certificateModal.classList.contains(
            "active"
        );

    const resumeOpen =
        resumeModal &&
        resumeModal.classList.contains(
            "active"
        );


    if (
        projectOpen ||
        certificateOpen ||
        resumeOpen
    ) {

        body.classList.add(
            "modal-open"
        );

    } else {

        body.classList.remove(
            "modal-open"
        );

    }

}
