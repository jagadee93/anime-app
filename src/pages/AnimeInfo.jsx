

import { useParams } from 'react-router-dom';
import YoutubePlayer from '../components/Youtube/YoutubePlayer';
import useDataSource from '../components/hooks/useDataSource';
import UseWatchList from '../components/hooks/UseWatchlist';
import { toast } from 'react-toastify';

const AnimeInfo = () => {
    const params = useParams();
    const response = useDataSource(`https://api.jikan.moe/v4/anime/${params?.id}`);
    const animeData = response?.data || {};
    const { addItem } = UseWatchList()


    function handleAdd(data) {
        const message = addItem(data)
        toast.info(message);
    }

    function isEmpty(obj) {
        for (let key in obj) {
            return false
        }
        return true
    }



    return !isEmpty(animeData) ? (
        <article className="info">
            <div className='--flex-col'>
                <img className="d-img" src={animeData?.images?.jpg?.large_image_url} alt={animeData?.title} />
                <div className="details-data">
                    <h1 className="a-title">{animeData?.title} <span className='font-13'>({animeData.status})</span></h1>
                    <span >{animeData?.year}</span>
                    <h3>{animeData?.rating}</h3>
                    <h3>rank:{" " + animeData?.rank}</h3>
                    <h3>❤️{animeData?.popularity}</h3>
                    <h3>{animeData?.genres?.map((genre) => genre?.name + ", ")}</h3>
                    <h3>aired:{" " + animeData?.aired?.string}</h3>
                    <button onClick={() => handleAdd({ image: animeData?.images?.jpg?.large_image_url, title: animeData?.title, id: animeData?.mal_id })} className='cta mtb-1'> Add To watch list</button>
                </div>
            </div>


            <YoutubePlayer url={animeData?.trailer?.embed_url} />
            <p className='mobile--font' > <span className='--text--green'>Synopsis</span>:{animeData?.synopsis}</p>
        </article>

    ) : (
        <div>
            <article className="info">
                <div className='--flex-col'>
                    <img className="d-img s-loading" alt="" />
                    <div className="details-loading">
                        <div className="a-title skeleton-text s-loading"></div>
                        <div className="a-title skeleton-text s-loading"></div>
                        <div className="a-title skeleton-text s-loading"></div>
                        <div className="a-title skeleton-text s-loading"></div>
                        <div className="a-title skeleton-text s-loading"></div>
                        <div className="a-title skeleton-text s-loading"></div>
                        <div className="a-title skeleton-text s-loading"></div>
                        <div className="fixed-row gap-1 mtb-1">
                            <div className="a-title skeleton-text s-loading"></div>
                            <div className="a-title skeleton-text s-loading"></div>
                        </div>
                    </div>
                </div>


                <div className='youtube_loading s-loading' />

                <div className="a-title skeleton-text s-loading"></div>
                <div className="a-title skeleton-text s-loading"></div>
                <div className="a-title skeleton-text s-loading"></div>
                <div className="a-title skeleton-text s-loading"></div>


            </article>
        </div>
    )
}
export default AnimeInfo
