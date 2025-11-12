let currentProject = 0;
const projects = document.querySelectorAll('.projectsSection');

function showNextProject() {
    projects[currentProject].classList.remove('active');
    currentProject = (currentProject + 1) % projects.length;
    projects[currentProject].classList.add('active');
}

projects[currentProject].classList.add('active');
setInterval(showNextProject, 5000);