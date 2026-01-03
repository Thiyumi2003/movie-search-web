function register() {
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!name || !username || !password) {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.find(u => u.username === username);
    if (exists) {
        alert("Username already exists");
        return;
    }

    users.push({
        name,
        username,
        password,
        favourites: []
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    window.location.href = "../login/login.html";
}
