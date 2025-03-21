document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeIcon.src = "assets/light-mode.png";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            themeIcon.src = "assets/light-mode.png";
            localStorage.setItem("theme", "light");
        } else {
            themeIcon.src = "assets/dark-mode.png";
            localStorage.setItem("theme", "dark");
        }
    });
});
