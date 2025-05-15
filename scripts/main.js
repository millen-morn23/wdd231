// Last modified
document.getElementById("lastmodified").textContent = document.lastModified;

// Course filter
function filterCourses(type) {
  const all = document.querySelectorAll(".course");
  all.forEach(course => {
    course.style.display =
      type === "all" ||
      (type === "wdd" && course.classList.contains("wdd")) ||
      (type === "cse" && course.classList.contains("cse"))
        ? "block"
        : "none";
  });
}

// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("show");
});


// Modal logic
const courseDetails = document.getElementById("course-details");

function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();

  document.getElementById("closeModal").addEventListener("click", () => {
    courseDetails.close();
  });

  courseDetails.addEventListener("click", (event) => {
    if (event.target === courseDetails) {
      courseDetails.close();
    }
  });
}

// Sample data
const courses = [
  {
    subject: "CSE",
    number: "110",
    title: "Intro to Programming",
    credits: 3,
    certificate: "Computer Science",
    description: "Learn programming fundamentals using Python.",
    technology: ["Python"]
  },
  {
    subject: "WDD",
    number: "130",
    title: "Web Fundamentals",
    credits: 3,
    certificate: "Web Dev",
    description: "Build web pages using HTML and CSS.",
    technology: ["HTML", "CSS"]
  },
  {
    subject: "CSE",
    number: "111",
    title: "Programming with Functions",
    credits: 3,
    certificate: "Computer Science",
    description: "Functions and modular code design in Python.",
    technology: ["Python"]
  },
  {
    subject: "WDD",
    number: "131",
    title: "Responsive Web Design",
    credits: 3,
    certificate: "Web Dev",
    description: "Learn how to create mobile-friendly websites.",
    technology: ["CSS Grid", "Flexbox"]
  },
  {
    subject: "CSE",
    number: "210",
    title: "Programming with Classes",
    credits: 3,
    certificate: "Computer Science",
    description: "Object-oriented programming principles.",
    technology: ["Python", "OOP"]
  },
  {
    subject: "WDD",
    number: "231",
    title: "Frontend Development II",
    credits: 3,
    certificate: "Web Dev",
    description: "Advanced HTML, CSS, and JS interactions.",
    technology: ["HTML", "CSS", "JavaScript"]
  }
];

// Attach modal event to course blocks
document.querySelectorAll(".course").forEach((div, index) => {
  div.addEventListener("click", () => {
    displayCourseDetails(courses[index]);
  });
});
