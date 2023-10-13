
import { useState } from 'react'
import MainContent from './Maincontent';
import PageNation from '../components/PageNation';
import TopContent from './Topcontent';

import useDataSource from '../components/hooks/useDataSource';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const TopAnime = useDataSource(`https://api.jikan.moe/v4/top/anime?order_by=bypopularity&limit=15`);
    const animeList = useDataSource(`https://api.jikan.moe/v4/anime?limit=15&sfw=true&sort=asc&page=${currentPage}`);
    return (
        <>
            {
                currentPage === 1 &&
                <TopContent topAnime={TopAnime?.data} />
            }
            <MainContent animeList={animeList?.data}>
                <PageNation pagiNation={animeList?.pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </MainContent>
        </>

    )
}

export default Home