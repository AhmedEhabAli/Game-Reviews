const gameList = document.querySelector("#gameList");

export class ui {
  constructor(detailsGameElement) {
    this.detailsGame = detailsGameElement;
  }
  displayGame(data) {
    let games = "";
    for (let i = 0; i < data.length; i++) {
      games += `<div class="col-lg-3">
                  <div class="card bg-transparent h-100 custom-card" id="${
                    data[i].id
                  }">
                    <img src=${
                      data[i].thumbnail
                    } class="card-img-top" alt="..." />
                    <div class="card-body text-white">
                      <div class="d-flex justify-content-between align-items-center">
                        <span>${data[i].title}</span>
                        <span class="custom-span bg-primary p-1 rounded-2">Free</span>
                      </div>
                      <p class="text-center small opacity-50 mt-3">
                        ${data[i].short_description.split(" ", 8).join(" ")}
                      </p>
                    </div>
                    <div class="card-footer text-white">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="custom-span">${data[i].genre}</span>
                        <span class="custom-span">${data[i].platform}</span>
                      </div>
                    </div>
                  </div>
                </div>`;
    }
    row.innerHTML = games;
  }
  displayDetails(data) {
    const content = `
            <div class="col-lg-4">
              <img src=${data.thumbnail} class="w-100" alt="" />
            </div>
            <div class="col-lg-8">
              <h2 class="h3 text-white">Title:${data.title}</h2>
              <p class="text-white">
                Category: <span class="badge text-bg-info"> ${data.genre}</span>
              </p>
              <p class="text-white">
                Platform: <span class="badge text-bg-info"> ${data.platform}</span>
              </p>
              <p class="text-white">
                Status: <span class="badge text-bg-info">${data.status}</span>
              </p>
              <p class="text-white">${data.description}</p>
              <a
                href=${data.game_url}
                class="btn btn-outline-warning text-white"
                target="_blank"
                >Show Game</a>
            </div>
`;
    gameList.innerHTML = content;
    this.detailsGame.classList.remove("d-none");
    document.body.classList.add("overflow-hidden");
  }
}
