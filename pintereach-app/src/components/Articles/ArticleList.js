import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
// insert nav link here
// import axios here

const ArticleList = props => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = () => {
            axios
            .get('#')
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => {
                console.error('Sever Error', error);
            });
        }

        getArticles()
    }, []);

    return (
        <div className="article-list">
            {articles.map(article => (
                <ArticleDetails key={article.id} article={article} />
            ))}
        </div>
    );
}

function ArticleDetails ({ article }) {
    const { title, author, category, link, id } = article;
    return (
        // Nav link to
        <div className="article-card">
            <h2>{title}</h2>
            <h4>{author}</h4>
            <h6>{category}</h6>
            <p>{link}</p>
            <p>{id}</p>
        </div>
        // </NavLink>
    );
}

export default ArticleList