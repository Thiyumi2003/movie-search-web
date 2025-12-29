let apiKey = "d5a82b51";

function search() {
    let movieName = document.getElementById("movie").value.trim();
    if (!movieName) return;

    let url = "https://www.omdbapi.com/?apikey=" + apiKey + "&t=" + movieName;
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.responseType = "json";
    httpRequest.send();

    httpRequest.onload = function () {
        let movie = httpRequest.response;

        if (movie.Response === "False") {
            alert("Movie not found!");
            return;
        }

        const container = document.getElementById("movies-container");

        // Create new movie card
        const card = document.createElement("div");
        card.className = "movie-card pop";
        
        card.innerHTML = `
            <div class="poster-wrapper">
                <img src="${movie.Poster}" />
            </div>
            <div class="movie-details">
                <div class="movie-title">${movie.Title}</div>
                <div class="rating">IMDb: ${movie.imdbRating}</div>
                <div class="stars">${generateStars(movie.imdbRating)}</div>
                <div class="genres">${movie.Genre}</div>
                <div class="plot">${movie.Plot}</div>
                <div class="director">Director: ${movie.Director}</div>
                <button class="trailer-btn" onclick="watchTrailer('${movie.Title}')">▶ Watch Trailer</button>
            </div>
        `;

        // Insert new movie at the top
        container.insertBefore(card, container.firstChild);
    };
}

function generateStars(imdbRating) {
    let rating = Math.round(imdbRating / 2);
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "★" : "☆";
    }
    return stars;
}

function watchTrailer(title) {
    let query = title + " official trailer";
    let url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
    window.open(url, "_blank");
}
