export default function (news, {id, configCardNode}){
    const newsContainer = document.querySelector(`#${id}`),
          newsCard = newsContainer.children[0];

    cleanOldNews(newsContainer, newsCard);

    for (let oneNews of news){
        const copy = newsCard.cloneNode(true);

        configCardNode(copy, oneNews);
        newsContainer.appendChild(copy);
    }
}

function cleanOldNews(newsContainer, newsCard){
    newsContainer.innerHTML = '';
    newsContainer.appendChild(newsCard);
}