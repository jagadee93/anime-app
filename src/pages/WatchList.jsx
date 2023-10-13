
import useWatchList from '../components/hooks/UseWatchlist';
import AnimeCard from './animeCard';

const WatchList = () => {
  const { watchList, removeItem } = useWatchList();


  return (
    <div className='anime-list'>
      {
        watchList.length > 0 ?
          watchList?.map((anime, index) => <AnimeCard key={anime.id} add={removeItem} id={anime.id} anime={anime} />) :
          <h2>Add some anime to binge watch</h2>
      }
    </div>


  )
}

export default WatchList