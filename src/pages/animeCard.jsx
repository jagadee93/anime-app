import React from 'react'
import { Link } from 'react-router-dom'
const AnimeCard = ({ title, score, rating, image, id, add, status, text }) => {
    return (

        <div className="card">
            <button className="add-watchList" title='add to watch list' onClick={() => text !== "delete" ? add({ image, id, title, score }) : add(id)} >{text}</button>
            <img className='homeImg' src={image} alt={title} loading="lazy" />
            <Link to={`anime/${id}`} title="view more info"><h1 className="title-text ">{title}</h1> </Link>
            <div className="text mobile--font">{status}</div>
            <div className="catagory mobile--font">{rating ? (rating).split(" ").join("").slice(0, 5) : "..."} </div>
            <div className="views mobile--font">{score ? score : 0}</div>
        </div >

    )
}

export default AnimeCard



