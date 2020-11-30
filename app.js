let container = document.getElementById("container");

async function getNews() {
  try {
    const fetchApi = await fetch(
      "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=9d33da08e78a4541a26669e980396fc0"
    );
    const newsData = await fetchApi.json();
    let newsHtml = "";
    newsData.articles.map((article) => {
      console.log(article);
      let news = `
                 <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ${article.title}
          <small>${article.author}</small>
        </button>
      </h2>
    </div>
     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
       ${article.content}
       </div>
       <div class="image-container">
       <img src=${article.urlToImage} alt="">
       <a href=${article.url} target="_blank">Read Full News</a>
       </div>
    </div>
    </div>
      `;
      newsHtml += news;
    });
    container.innerHTML = newsHtml;
  } catch (error) {
    console.log(error);
  }
}

getNews();
