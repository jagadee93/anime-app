
import { genreList } from "../assets/data";

import { useState, useRef } from "react";
import MainContent from "./Maincontent";

import PageNation from "../components/PageNation";
import useDataSource from "../components/hooks/useDataSource";
function Filter() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [type, setType] = useState("movie");
    const [status, setStatus] = useState("complete");
    const [rating, setRating] = useState("pg");
    const [orderBy, setOrderBy] = useState("popularity");
    const divRef = useRef(null);
    const handleClick = (e) => {
        if (!selectedGenres.includes(e.target.getAttribute('data-id'))) {
            setSelectedGenres([...selectedGenres, e.target.getAttribute('data-id')]);
        } else {
            setSelectedGenres(
                selectedGenres.filter((genre) => genre !== e.target.getAttribute('data-id'))
            );
        }
    };


    const genres = genreList.map((genre) => {
        return (
            <div
                className={
                    selectedGenres.includes(genre.id.toLocaleString()) ? "genre selected" : "genre"
                }
                data-id={genre.id}
                key={genre.id}

                onClick={handleClick}
            >
                {genre.genre}
            </div>
        );
    });



    const genre = selectedGenres.sort().join(",");
    const searchResult = useDataSource(`https://api.jikan.moe/v4/anime?q=type=${type ? type : ""}&rating=${rating ? rating : ""}&status=${status ? status : ""}&order_by=${orderBy ? orderBy : ""}&page=${currentPage}&limit=15&genre=${genre}`);
    const animeList = searchResult?.data || []
    return (
        <section className="filter_results">

            <div className="filter__container">
                <h1>filter</h1>
                <div className="type__out_box">
                    <div className="type">Type</div>
                    <div className="type">
                        <select
                            onChange={(event) => setType(event.target.value)}
                            value={type}
                            required

                        >

                            <option value="tv">tv</option>
                            <option value="ova">ova</option>
                            <option value="special">special</option>
                            <option value="ona">ona</option>
                            <option value="music">music</option>

                        </select >
                    </div >
                </div >
                <div className="type__out_box">
                    <div className="type">Status</div>
                    <div className="type">
                        <select
                            onChange={(event) => setStatus(event.target.value)}
                            value={status}
                            required

                        >

                            <option value="airing">airing</option>
                            <option value="upcoming">upcoming</option>
                            <option value="upcoming">favorite</option>
                            <option value="upcoming">popularity</option>

                        </select >
                    </div >
                </div >
                <div className="type__out_box">
                    <div className="type">Rating</div>
                    <div className="type">
                        <select
                            onChange={(event) => setRating(event.target.value)}
                            value={rating}
                            required

                        >

                            <option value="pg">pg</option>
                            <option value="pg13">PG-13 </option>
                            <option value="r17">R-17+</option>
                            <option value="r">R+(Mild nudity)</option>
                            <option value="rx">Rx(Hentai)</option>

                        </select>
                    </div>
                </div>
                <div className="type__out_box">
                    <div className="type">order by</div>
                    <div className="type">
                        <select
                            onChange={(event) => setOrderBy(event.target.value)}
                            value={orderBy}
                            required

                        >


                            <option value="popularity">Popularity</option>
                            <option value="rank">Rank </option>
                            <option value="title">Title</option>
                            <option value="rating">Rating</option>
                            <option value="episodes">episodes</option>

                        </select >
                    </div >
                </div >
                <div className="genre__container">

                    <h3>Select  genre:</h3>
                    {genres}
                </div >
                <button className="cta">Filter</button>
            </div >
            <div ref={divRef} tabIndex="-1">
                <MainContent animeList={animeList} >
                    <PageNation pagiNation={searchResult?.pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </MainContent>
            </div>

        </section >
    );
}

export default Filter;