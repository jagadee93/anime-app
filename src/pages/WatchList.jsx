import React from 'react'
import useWatchList from '../components/hooks/UseWatchlist';
import AnimeCard from './animeCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WatchList = () => {
  const [watchList, setWatchList] = useWatchList();
  console.log(watchList);
  const deleteWatchList = (id) => {
    setWatchList((prev) => {
      return prev.filter((item) => item.id !== id);
    })
    localStorage.setItem('watchList', JSON.stringify(watchList));
    toast("deleted from watchList")
  }
  return (
    <>
      <ToastContainer />
      <div className='anime-list'>  
        {
          watchList.length > 0 ?
            watchList?.map((each, index) => <AnimeCard add={deleteWatchList} key={index} id={each.id} title={each.title} image={each.image} text="delete" score={each.score} />) :
            <> <h2>Add some anime to binge watch</h2></>

        }
      </div>
    </>
  )
}

export default WatchList