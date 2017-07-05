function getArticleGenerator(articles) {
    let copiedArticles = Object.assign(articles, []);
    let container = $('#content');


    return function () {
        if (copiedArticles.length > 0) {
            let article = $('<article>');
            let div = $(`<div>${copiedArticles.shift()}</div>`)
            article.append(div);

            container.append(article);
        }
    }
}
