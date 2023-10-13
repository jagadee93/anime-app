import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from "react-icons/md"
import UseWatchList from '../components/hooks/UseWatchlist'
import { toast } from 'react-toastify'
const AnimeCard = ({ anime, id, }) => {

    const { title, images, image, } = anime || {};
    const image_live = images?.jpg?.image_url;
    const { addItem, removeItem } = UseWatchList()

    function handleAdd(data) {
        const message = addItem(data)
        toast.info(message)
    }

    function handleRemove(id) {
        const message = removeItem(id)
        toast.info(message)
    }



    return anime ? (
        <div className="card">
            {
                image_live ?
                    <MdOutlineBookmarkAdd className="add-watchList" title='add to watch list' onClick={() => handleAdd({ image: image_live ? image_live : image, id, title })} ></MdOutlineBookmarkAdd> :
                    <MdOutlineBookmarkRemove className='add-watchList' title='remove' onClick={() => handleRemove(id)} />
            }

            <img className='homeImg' src={image_live ? image_live : image} alt={title} loading="lazy" />

            <Link to={`anime/${id}`} title="view more info"><h1 className="title-text ">{title}</h1> </Link>

        </div >
    ) : (
        <div className='card'>
            <div className="add-watchList" ></div>
            <img className='homeImg' loading="lazy" />
            <div><h1 className="title-text "></h1> </div>
        </div>)


}

export default AnimeCard



