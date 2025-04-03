document.addEventListener("DOMContentLoaded", loadGames);

function loadGames() {
    fetch("games.json")
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById("game-list");
            gameList.innerHTML = "";
            data.forEach(game => {
                gameList.innerHTML += `
                    <div class="game-item">
                        <h3>${game.title}</h3>
                        <p>${game.description}</p>
                        <a href="${game.file}" download><button>Descargar</button></a>
                    </div>
                `;
            });
        });
}

function searchGames() {
    let searchTerm = document.getElementById("search").value.toLowerCase();
    let games = document.querySelectorAll(".game-item");
    games.forEach(game => {
        game.style.display = game.innerText.toLowerCase().includes(searchTerm) ? "block" : "none";
    });
}

function openUploadModal() {
    document.getElementById("uploadModal").style.display = "flex";
}

function closeUploadModal() {
    document.getElementById("uploadModal").style.display = "none";
}

function uploadGame() {
    let title = document.getElementById("gameTitle").value;
    let description = document.getElementById("gameDescription").value;
    let file = document.getElementById("gameFile").files[0];

    if (title && description && file) {
        alert("Juego subido con éxito!");
        closeUploadModal();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}
