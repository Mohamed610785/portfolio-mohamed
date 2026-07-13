const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if(localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'clair';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        toggleBtn.textContent = "clair";
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = "sombre";
        localStorage.setItem('theme', 'light');
    }
});
