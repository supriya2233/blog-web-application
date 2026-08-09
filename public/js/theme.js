const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");

    if (isDarkMode) {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "☀";

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "☾";

    }

});