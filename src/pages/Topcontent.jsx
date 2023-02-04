import React from 'react'
import { Link } from 'react-router-dom'
const TopContent = ({ topAnime }) => {
    return (

        <div className="movie-slide" >
            <div className="container-title">TOP&nbsp;
                <span style={{ color: '#f93' }}>Anime</span>
            </div>

            <div className="movie-box">
                {
                    topAnime.map((anime, index) => {
                        return (
                            <Link className='--text--green' key={index} to={`anime/${anime.mal_id}`}>
                                <div id={anime.mal_id} className="movie-info">

                                    <img alt="movie poster" src={anime.images.jpg.large_image_url} />
                                    <h2 className="movie-name">{anime.title}</h2>
                                    <span className="review">❤️{anime.score}/10 </span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopContent