import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner/Spinner';
import YoutubePlayer from '../components/Youtube/YoutubePlayer';
export const AnimeInfo = () => {
    const [animeData, setAnimeData] = useState({})
    const [loading, setLoading] = useState(false)
    const params = useParams();
    useEffect(() => {
        let isMounted = true;
        const getOneAnime = async () => {
            try {
                const anime = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}`)
                isMounted && setAnimeData(anime.data.data)

                setLoading(true)
            } catch (err) {
                console.log(err)
            }
        }
        getOneAnime()
        return () => {
            isMounted = false
        }
    }, [params.id])
    return (
        <article className="info">
            {
                loading ?
                    <>
                        <div className='--flex-col'>
                            <img className="d-img" src={animeData.images.jpg.large_image_url} alt={animeData.title} />
                            <div className="details-data">
                                <h1 className="a-title">{animeData?.title}</h1>
                                <span >{animeData?.year}</span>
                                <h3>{animeData?.rating}</h3>
                                <h3>rank:{" " + animeData?.rank}</h3>
                                <h3>❤️{animeData.popularity}</h3>
                                <h3>{animeData?.genres?.map((genre) => genre?.name + " ")}</h3>
                                <h3>aired:{" " + animeData?.aired?.string}</h3>
                            </div>
                        </div>
                        <YoutubePlayer url={animeData?.trailer?.embed_url} />

                        <p className='mobile--font' > <span className='--text--green'>Synopsis</span>:{animeData?.synopsis}</p>

                    </>
                    : <Spinner />
            }

        </article>

    )
}
