import React, { useEffect, useRef } from 'react'
import AnimeCard from './animeCard'
import UseWatchList from '../components/hooks/UseWatchlist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainContent = (props) => {

  const [watchList, setWatchList] = UseWatchList();
  function checkDuplicate_objet(data) {
    let duplicate = false;
    watchList.forEach((item) => {
      if (item.id === data.id) {
        duplicate = true;
        return;
      }
    });
    return duplicate;
  }



  const addToWatchList = (data) => {
    if (!checkDuplicate_objet(data)) {
      setWatchList([...watchList, data])
      toast("added to watch list ")
    }
    else {
      // setWatchList(watchList.filter(item => item.id !== data.id))
      toast("already added to watch list")

    }
  }

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList))
  }, [watchList])


  return (
    <>
      <ToastContainer />
      <div className="anime-list">
        {
          props?.animeList?.map(anime => (
            <AnimeCard
              key={anime?.mal_id}
              id={anime?.mal_id}
              title={anime?.title}
              score={anime?.score}
              rating={anime?.rating}
              image={anime?.images.jpg.large_image_url}
              add={addToWatchList}
              status={anime?.status}
              text={"+add"}
            />
          ))
        }
      </div>
    </>
  )
}




