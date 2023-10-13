
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import MainContent from './Maincontent';
import PageNation from '../components/PageNation';
import useDataSource from '../components/hooks/useDataSource';
const SearchResults = () => {

  const params = useParams();
  let query = params.id
  const [currentPage, setCurrentPage] = useState(1);
  const searchResult = useDataSource(`https://api.jikan.moe/v4/anime?q=${query}&sfw=true&order_by=popularity&sort=asc&limit=12&page=${currentPage}`)
  const animeList = searchResult?.data || []
  return animeList.length > 0 ? (
    <div className='content-wrap'>
      <MainContent animeList={animeList} >
        <PageNation pagiNation={searchResult?.pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </MainContent>
    </div>
  ) : <div className='content-wrap mtb-1 '><h1 className='mtb-1 center '>No Matching Anime Found .....</h1></div>

}

export default SearchResults