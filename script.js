if (localStorage.getItem("theme")) document.body.classList.add("darkTheme");


function toggleDarkTheme() {

    document.body.classList.toggle("darkTheme")

    document.body.classList.contains("darkTheme") ? localStorage.setItem("theme", 'dark') : localStorage.removeItem("theme");

}

document.getElementById("myButton").addEventListener("click", toggleDarkTheme);
