import outCards from "./outCards.js";
import newsMainCardConfig from "./newsMainCardConfig.js";
import {news} from "./index.js";

const nav = document.querySelector('#nav');

nav.addEventListener('click', (event) => {
    const target = event.target;
    activateTagCss();
    const tag = target.id;
    //Здесь должен быть запрос на сервер
    const tagNews = tag === "news" ? news : news.filter(n => n.tag === tag);
    outCards(tagNews, newsMainCardConfig);

    function activateTagCss(){
        for (let div of nav.children){
            div.className = "";
        }
        target.className = "active-tag";
    }
});

const searchButton = document.querySelector('#search'),
      searchInput = document.querySelector('#search-input-container');

searchButton.addEventListener('click', () => {
    if(searchInput.style.display == 'none'){
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }    
});

searchInput.addEventListener('keyup', event => {
    if (event.key !== 'Enter') { 
        return;
    }
    const searchText = event.target.value;
    const resultNews = news.filter(n => ~n.title.indexOf(searchText));

    outCards(resultNews, newsMainCardConfig);

});