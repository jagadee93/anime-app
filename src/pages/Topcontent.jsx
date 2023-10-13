
import { Link } from 'react-router-dom'
const TopContent = ({ topAnime }) => {
    const topAnimeList = topAnime || []
    return topAnimeList.length > 0 ? (
        <div className="movie-box">
            {
                topAnimeList.map((anime, index) => {
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


    ) : (
        <div className='movie-slide'>
            <div className="container-title">TOP&nbsp;
                <span style={{ color: '#f93' }}>Anime</span>
            </div>
            <div className='movie-box'>
                {topAnimeList.length === 0 &&
                    Array.from({ length: 9 }).map((_, index) => (
                        <div key={index} className='card movie-info'>
                            <img className='movie poster s-loading' alt="" />
                            <div className="skeleton-text s-loading"></div>
                            <div className="skeleton-text s-loading"></div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default TopContent