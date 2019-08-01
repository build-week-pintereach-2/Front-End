import { FETCH_ARTICLES_PENDING, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_ERROR } from "./action";

const initialState = {
    pending: false,
    products: [], 
    error: null
}

export function articlesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ARTICLES_PENDING:
            return {
                ...state,
                pending: true
        }
        case FETCH_ARTCILES_SUCCESS:
            return {
                ...state,
                pending: false,
                articles: action.payload
            }
        case FETCH_ARTICLES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
};

export const getArticles = state => state.articles;
export const getArticlesPending = state => state.pending;
export const getArticlesError = state => state.error;