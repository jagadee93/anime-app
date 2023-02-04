
import { genreList } from "../assets/data";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { MainContent } from "./Maincontent";
import Spinner from "../components/Spinner/Spinner";
import PageNation from "../components/PageNation";
function Filter() {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [rating, setRating] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const [animeList, setAnimeList] = useState([]);
    const [pageInfo, setPageInfo] = useState({})
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



    useEffect(() => {
        async function filterResults() {
            setLoading(false)
            const genre = selectedGenres.sort().join(",");
            const searchResult = await axios.get(`https://api.jikan.moe/v4/anime?q=&type=${type ? type : ""}&rating=${rating ? rating : ""}&status=${status ? status : ""}&order_by=${orderBy ? orderBy : ""}&page=${currentPage}&limit=15&genre=${genre}`);
            setAnimeList(searchResult.data.data)
            setPageInfo(searchResult.data.pagination)
            setLoading(true)
            console.log(divRef)
        }
        filterResults();

    }, [type, status, rating, orderBy, buttonClicked, currentPage]);


    const nextPage = () => {

        setCurrentPage(prev => {
            return prev + 1
        })
    }
    const prevPage = () => {

        setCurrentPage(prev => {
            if (prev === 1) {
                return prev
            } else {
                return prev - 1
            }

        })
    }


    return (
        <section className="filter_results">
            <span className="filter_text">
                <a className="--text--green" href="/">Home</a>.filter
            </span>
            <div className="filter__container">
                <h1>filter</h1>
                <div className="type__out_box">
                    <div className="type">Type</div>
                    <div className="type">
                        <select
                            onChange={(event) => setType(event.target.value)}
                            value={type}
                            required
                        >   <option value="">All</option>
                            <option value="tv">tv</option>
                            <option value="ova">ova</option>
                            <option value="special">special</option>
                            <option value="ona">ona</option>
                            <option value="music">music</option>

                        </select>
                    </div>
                </div>
                <div className="type__out_box">
                    <div className="type">Status</div>
                    <div className="type">
                        <select
                            onChange={(event) => setStatus(event.target.value)}
                            value={status}
                            required

                        >
                            <option value="">All</option>
                            <option value="airing">airing</option>
                            <option value="upcoming">upcoming</option>
                            <option value="upcoming">favorite</option>
                            <option value="upcoming">popularity</option>

                        </select>
                    </div>
                </div>
                <div className="type__out_box">
                    <div className="type">Rating</div>
                    <div className="type">
                        <select
                            onChange={(event) => setRating(event.target.value)}
                            value={rating}
                            required
                        >    <option value="">All</option>
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
                        > <option value="">All</option>
                            <option value="popularity">Popularity</option>
                            <option value="rank">Rank </option>
                            <option value="title">Title</option>
                            <option value="rating">Rating</option>
                            <option value="episodes">episodes</option>
                            <option value="">All</option>
                        </select>
                    </div>
                </div>
                <div className="genre__container">
                    <h3> genre:</h3>
                    {genres}
                </div>

                <button className="button" onClick={() => setButtonClicked((p) => !p)}>Filter</button>

            </div>

            {
                loading ?
                    <div ref={divRef} tabIndex="-1">
                        <MainContent animeList={animeList} />
                        <div className="pageBtns">
                            <PageNation pageInfo={pageInfo} currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} />
                        </div>
                    </div>
                    : <Spinner />
            }
        </section>
    );
}

export default Filter;