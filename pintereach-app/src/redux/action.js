export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

export const fetchArticles = () => dispatch => {
        dispatch(fetchArticlesPending());
        fetch('#')
        .then (res => {
            dispatch({type: FETCH_ARTICLES_SUCCESS, payload: res.json()})
        })
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





