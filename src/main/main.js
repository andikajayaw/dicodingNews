const searchForm = document.querySelector(".search");
const input = document.querySelector("#searchNews");
const result = document.querySelector(".container");

function retrieve(e) {
  e.preventDefault();
  const apiKey = "a2a93c75a2874a898a186a3c9e65dad4";
  let topic = input.value;
  let url = `http://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.articles
        .forEach((article) => {
          if (!topic) {
            return (result.innerHTML += `${topic} is not found`);
          } else {
            result.innerHTML += `
                    <style>
                      .card p{
                        text-align: justify;
                      }
                      .card .card-reveal{
                        z-index: 1;
                      }
                    </style>
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${article.urlToImage}">
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4" style="font-weight: bold;">${article.title}<i class="material-icons right">arrow_upward</i></span>
                        <p style="font-family:'IBM Plex Mono', monospace; padding-bottom: 10px;">${article.description}</p>
                        <p style="font-weight: bold; font-family:'B612', sans-serif;"><a href="#">${article.source.name}</a></p>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${article.title}<i class="material-icons right">close</i></span>
                        <p style="font-family:'IBM Plex Mono', monospace">${article.description}</p>
                        <p style="font-family:'IBM Plex Mono', monospace">${article.content}<a href="${article.url}">Read more</a></p>
                        </div>
                    </div>
                  `;
          }
        })
        .catch((error) => {
          showResponseMessage(error);
        });
    });
}

searchForm.addEventListener("submit", retrieve);
