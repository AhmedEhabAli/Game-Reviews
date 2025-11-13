const detailsGame = document.querySelector(".detailsGame");
const fa_xmark = document.querySelector(".fa-xmark");
const row = document.querySelector("#row");
const loading = document.querySelector(".loading");

export class details {
  constructor(ui) {
    this.ui = ui;
    fa_xmark.addEventListener("click", () => {
      detailsGame.classList.add("d-none");
      document.body.classList.remove("overflow-hidden");
    });

    row.addEventListener("click", (e) => {
      const gameCard = e.target.closest(".card");
      if (gameCard) {
        const gameID = gameCard.id;
        this.getDetails(gameID);
      }
    });
  }

  getDetails(idGames) {
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c0f3534426msh3e93f3973ebd086p12fd5djsna806d12c85e0",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,
      options
    )
      .then((response) => response.json())
      .then((response) => this.ui.displayDetails(response))
      .catch((err) => console.error(err))
      .finally(() => {
        loading.classList.add("d-none");
      });
  }
}
