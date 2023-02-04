import React from 'react'
import useWatchList from '../components/hooks/UseWatchlist';
import { Link } from 'react-router-dom';
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
    <div className='anime-list'>
      <ToastContainer />
      {
        watchList.length > 0 ? 
        watchList?.map((each, index) => <AnimeCard add={deleteWatchList} key={index} id={each.id} title={each.title} image={each.image} text="delete" score={each.score} />) :
         <div className='center'><h2>Add some anime to binge watch</h2><Link className='home' to="/">Home</Link></div>
      }
    </div>
  )
}

export default WatchList