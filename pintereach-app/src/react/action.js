export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

function fetchArticlesPending() {
    return {
        type: FETCH_ARTICLES_PENDING
    }
};

function fetchArticlesSuccess(articles) {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        articles: articles
    }
};

function fetchArticlesError(error) {
    return {
        type: FETCH_ARTICLES_ERROR,
        error: error
    }
};



