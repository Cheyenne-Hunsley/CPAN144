import React from 'react'

const MainContent = ({title, content} : {title: string; content: string;}) => {
    return(
        <article>
            <h1>{title}</h1>
            <p>{content}</p>
        </article>
    )
}

export default MainContent;