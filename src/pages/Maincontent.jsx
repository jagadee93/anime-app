

import AnimeCard from './animeCard';
const MainContent = ({ animeList, children }) => {
  const animeData = animeList || [];
  return animeData.length > 0 ? (
    <div className="div">
      <div className="anime-list">
        {
          animeData?.map(anime => (
            <AnimeCard
              key={anime?.mal_id}
              id={anime.mal_id}
              anime={anime}
            />
          ))
        }
      </div>

      {
        children
      }

    </div >
  ) : (
    <div className='anime-list'>
      {animeData.length === 0 &&
        Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className='card skeleton-card'>
            <img alt="" className='s-loading' style={{ height: "90%", border: "none" }} />
            <div className='s-loading skeleton-text'></div>
            <div className='s-loading skeleton-text'></div>
          </div>
        ))}

    </div>)




}




export default MainContent