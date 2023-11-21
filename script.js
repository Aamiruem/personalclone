// JavaScript for interactivity

// Toggle visibility of the "Projects" section
const projectsSection = document.getElementById('projects');
const projectsToggleBtn = document.createElement('button');
projectsToggleBtn.textContent = 'Toggle Projects';
projectsToggleBtn.addEventListener('click', () => {
    projectsSection.classList.toggle('hidden');
});

// Add dark mode toggle
const darkModeToggleBtn = document.createElement('button');
darkModeToggleBtn.textContent = 'Toggle Dark Mode';
darkModeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Append buttons to the header
const header = document.querySelector('header');
header.appendChild(projectsToggleBtn);
header.appendChild(darkModeToggleBtn);
