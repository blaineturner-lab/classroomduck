const games = [
  {
    name: "Bloxorz",
    category: "Puzzle",
    emoji: "🧊",
    description: "Roll the block into the square hole.",
    url: "https://www.coolmathgames.com/0-bloxorz"
  },
  {
    name: "Run 3",
    category: "Platformer",
    emoji: "🏃",
    description: "Run through twisting space tunnels.",
    url: "https://www.coolmathgames.com/0-run-3"
  },
  {
    name: "Slope",
    category: "Arcade",
    emoji: "🟢",
    description: "Race down a fast neon slope.",
    url: "https://poki.com/en/g/slope"
  },
  {
    name: "Retro Bowl",
    category: "Sports",
    emoji: "🏈",
    description: "Build a team and win the championship.",
    url: "https://www.crazygames.com/game/retro-bowl"
  },
  {
    name: "Basketball Stars",
    category: "Sports",
    emoji: "🏀",
    description: "One-on-one basketball action.",
    url: "https://www.crazygames.com/game/basketball-stars"
  },
  {
    name: "Moto X3M",
    category: "Racing",
    emoji: "🏍️",
    description: "Tricky motorcycle stunt tracks.",
    url: "https://www.coolmathgames.com/0-moto-x3m"
  },
  {
    name: "2048",
    category: "Puzzle",
    emoji: "🔢",
    description: "Combine tiles to reach 2048.",
    url: "https://play2048.co/"
  },
  {
    name: "Cookie Clicker",
    category: "Idle",
    emoji: "🍪",
    description: "Bake an unreasonable number of cookies.",
    url: "https://orteil.dashnet.org/cookieclicker/"
  },
  {
    name: "Fireboy & Watergirl",
    category: "Puzzle",
    emoji: "🔥",
    description: "Team up to solve temple puzzles.",
    url: "https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple"
  },
  {
    name: "Chess",
    category: "Strategy",
    emoji: "♟️",
    description: "Play chess in your browser.",
    url: "https://www.chess.com/play/computer"
  },
  {
    name: "Agar.io",
    category: "Arcade",
    emoji: "🫧",
    description: "Grow bigger by collecting cells.",
    url: "https://agar.io/"
  },
  {
    name: "Tetris",
    category: "Puzzle",
    emoji: "🧱",
    description: "Fit the falling blocks together.",
    url: "https://tetris.com/play-tetris"
  },
  {
    name: "Pac-Man",
    category: "Arcade",
    emoji: "👾",
    description: "Clear the maze and dodge ghosts.",
    url: "https://www.google.com/logos/2010/pacman10-i.html"
  },
  {
    name: "Drift Boss",
    category: "Racing",
    emoji: "🚗",
    description: "Time your drifts on a narrow track.",
    url: "https://www.crazygames.com/game/drift-boss"
  },
  {
    name: "Little Alchemy 2",
    category: "Puzzle",
    emoji: "🧪",
    description: "Combine elements to discover things.",
    url: "https://littlealchemy2.com/"
  },
  {
    name: "Shell Shockers",
    category: "Action",
    emoji: "🥚",
    description: "Egg-themed multiplayer shooter.",
    url: "https://shellshock.io/"
  },
  {
    name: "Bloons Tower Defense 5",
    category: "Strategy",
    emoji: "🎈",
    description: "Build defenses and pop the bloons.",
    url: "https://ninjakiwi.com/Games/Mobile/Bloons-TD-5.html"
  },
  {
    name: "World's Hardest Game",
    category: "Arcade",
    emoji: "🟥",
    description: "Dodge hazards in a tough challenge.",
    url: "https://www.coolmathgames.com/0-worlds-hardest-game"
  },
  {
    name: "Stickman Hook",
    category: "Arcade",
    emoji: "🪝",
    description: "Swing your way through each level.",
    url: "https://poki.com/en/g/stickman-hook"
  },
  {
    name: "Subway Surfers",
    category: "Runner",
    emoji: "🚇",
    description: "Dash through the subway and avoid trains.",
    url: "https://poki.com/en/g/subway-surfers"
  },
  {
    name: "Crossy Road",
    category: "Arcade",
    emoji: "🐔",
    description: "Cross roads, rivers, and train tracks.",
    url: "https://poki.com/en/g/crossy-road"
  },
  {
    name: "Geometry Dash",
    category: "Platformer",
    emoji: "🔺",
    description: "Jump and fly through rhythm levels.",
    url: "https://www.crazygames.com/game/geometry-dash"
  },
  {
    name: "Slope 2",
    category: "Arcade",
    emoji: "🌌",
    description: "Another fast downhill rolling challenge.",
    url: "https://poki.com/en/g/slope"
  },
  {
    name: "Chess.com Puzzles",
    category: "Strategy",
    emoji: "🧠",
    description: "Solve tactical chess puzzles.",
    url: "https://www.chess.com/puzzles"
  }
];

const $ = s => document.querySelector(s);

const grid = $("#game-grid");
const favGrid = $("#favorite-grid");

let favorites = new Set(
  JSON.parse(localStorage.getItem("duckArcadeFavorites") || "[]")
);

let activeCategory = "All";

const categories = [
  "All",
  ...new Set(games.map(g => g.category))
];

categories.forEach(c => {
  const option = document.createElement("option");
  option.value = c;
  option.textContent = c === "All" ? "All categories" : c;
  $("#category").append(option);
});

categories.forEach(c => {
  const button = document.createElement("button");
  button.className = "chip" + (c === "All" ? " active" : "");
  button.textContent = c;

  button.onclick = () => {
    activeCategory = c;
    $("#category").value = c;
    render();
  };

  $("#category-chips").append(button);
});

function card(g) {
  const el = document.createElement("article");
  el.className = "game-card";

  el.innerHTML = `
    <div class="game-cover">${g.emoji}</div>
    <div class="game-info">
      <h3>${g.name}</h3>
      <p>${g.description}</p>
      <div class="card-bottom">
        <button class="play-btn">PLAY ↗</button>
        <button class="star ${favorites.has(g.name) ? "saved" : ""}">
          ${favorites.has(g.name) ? "★" : "☆"}
        </button>
      </div>
    </div>
  `;

  el.querySelector(".play-btn").onclick = () => launch(g);

  el.querySelector(".star").onclick = () => {
    favorites.has(g.name)
      ? favorites.delete(g.name)
      : favorites.add(g.name);

    localStorage.setItem(
      "duckArcadeFavorites",
      JSON.stringify([...favorites])
    );

    render();
  };

  return el;
}

function render() {
  const q = $("#search").value.toLowerCase();

  const filtered = games.filter(g =>
    (activeCategory === "All" || g.category === activeCategory) &&
    (`${g.name} ${g.description} ${g.category}`)
      .toLowerCase()
      .includes(q)
  );

  grid.replaceChildren();

  filtered.forEach(g => grid.append(card(g)));

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty">No games found. Try another search.</div>';
  }

  favGrid.replaceChildren();

  const favs = games.filter(g => favorites.has(g.name));

  $("#fav-count").textContent = favs.length;

  if (favs.length) {
    favs.forEach(g => favGrid.append(card(g)));
  } else {
    favGrid.innerHTML =
      '<div class="empty">No favorites yet — tap ☆ on a game to save it.</div>';
  }

  document.querySelectorAll(".chip").forEach(button => {
    button.classList.toggle(
      "active",
      button.textContent === activeCategory
    );
  });
}

function launch(g) {
  $("#player-title").textContent = g.name;
  $("#game-frame").src = g.url;
  $("#open-direct").href = g.url;
  $("#player").hidden = false;
  document.body.style.overflow = "hidden";
}

function close() {
  $("#player").hidden = true;
  $("#game-frame").src = "about:blank";
  document.body.style.overflow = "";
}

$("#search").addEventListener("input", render);

$("#category").addEventListener("change", e => {
  activeCategory = e.target.value;
  render();
});

$("#close-player").onclick = close;

$("#player").addEventListener("click", e => {
  if (e.target.id === "player") close();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") close();
});

render();
