import { fetchArticlesPending, fetchAriclesSuccess, fetchArticlesError } from './action';

function fetchArticles() {
    return dispatch => {
        dispatch(fetchArticlesPending());
        fetch('#')
        .then (res => res.json())
        .then (res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchArticlesSuccess(res.articles));
            return res.articles;
        })
        .catch(error => {
            dispatch(fetchArticlesError(error));
        })
    }
}

export default fetchArticles;