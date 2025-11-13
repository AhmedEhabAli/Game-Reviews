const navLinks = document.querySelectorAll(".nav-item a.nav-link");
const loading = document.querySelector(".loading");

export class games {
  constructor(ui) {
    this.ui = ui;
    this.getGames("mmorpg");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        navLinks.forEach((el) => el.classList.remove("active"));

        e.target.classList.add("active");
        const selectedCategory = e.target.getAttribute("category");
        this.getGames(selectedCategory);
      });
    });
  }

  async getGames(category) {
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c0f3534426msh3e93f3973ebd086p12fd5djsna806d12c85e0",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const data = await response.json();
    loading.classList.add("d-none");
    this.ui.displayGame(data);
  }
}
