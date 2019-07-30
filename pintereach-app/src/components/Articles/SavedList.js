import React from 'react';
// import Link

const SavedList = (props) => {

console.log(props)
    return (
        <div className="saved-list">
            <h3>Articles</h3>
            {props.list.map(article => (
                <Link to={`/Articles/${article.id}`}>
                    <span className="saved-article">{article.title}</span>
                </Link>
            ))}
            <Link to="/" className="dashboard-button">Dashboard</Link>
        </div>
    );
}

export default SavedList
