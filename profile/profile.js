const storedUser = localStorage.getItem("loggedInUser");

if (!storedUser) {
    window.location.href = "../login/login.html";
}

const user = storedUser ? JSON.parse(storedUser) : null;

if (user) {
    document.getElementById("name").innerText = "Name: " + user.name;
    document.getElementById("username").innerText = "Username: " + user.username;

    const favList = document.getElementById("favList");
    (user.favourites || []).forEach(movie => {
        const li = document.createElement("li");
        li.innerText = movie;
        favList.appendChild(li);
    });
}

function goHome() {
    window.location.href = "../index.html";
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "../login/login.html";
}
