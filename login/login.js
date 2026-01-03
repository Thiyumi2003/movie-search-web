function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
        u => u.username === username && u.password === password
    );

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "../index.html";
    } else {
        alert("Invalid login");
    }
}
