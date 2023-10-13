
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import AnimeInfo from "./pages/AnimeInfo";


import WatchList from "./pages/WatchList";
import Notfound from "./pages/Notfound";
import SearchResults from "./pages/SearchResults";
import Layout from "./components/layout/Layout";
import Filter from "./pages/Filter";
function App() {
    return (
        <Layout >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime/:id" element={<AnimeInfo />} />
                <Route path="/watchlist" element={<WatchList />} />
                <Route path="/watchlist/anime/:id" element={<AnimeInfo />} />

                <Route path="/filter" element={<Filter />} />
                <Route path="/search/:id" element={<SearchResults />} />
                <Route path="/filter/anime/:id" element={<AnimeInfo />} />
                <Route path="/search/:name/anime/:id" element={<AnimeInfo />} />

                <Route path="*" element={<Notfound />} />
            </Routes>
        </Layout>
    );
}

export default App;
