import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Article = (props) => {
    console.log('props', props)
    const [article, setArticle] = useState();
    const id = props.match.params.id;

    useEffect(() => {
        axios
            .get(`https://pintereach2.herokuapp.com/users/:id/pins`)
            .then(response => {
                setArticle(response.data);
            })
            .catch(error => {
                console.error(error)
            });
    }, [id]);

    const saveArticle = () => {
        const addToProfile = props.addToProfile;
        addToProfile(article)
    }

    if (!article) {
        return <div>Loading your articles...</div>;
    }

    const { title, author, category, link, id } = article;
    return (
        <div className="save-wrapper">

            <div className="article-card">
                <h2>{title}</h2>
                <h4>{author}</h4>
                <h6>{category}</h6>
                <p>{link}</p>
                <p>{id}</p>
            </div>

            <div className="save-button" onClick={saveArticle}>Save</div>

        </div>
    );      
}

export default Article;