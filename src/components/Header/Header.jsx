import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import UseWatchList from "../hooks/UseWatchlist";
const Header = () => {
    const navigate = useNavigate();
    const [watchList] = UseWatchList();
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("")
    function menuToggler() {
        return setMenuOpen((prev) => !prev)
    }
    const searchHandler = (e) => {
        e.preventDefault();
        if (search.length > 3) navigate(`/search/${search}`)
    }
    return (
        <header className={`${styles.header} ${"navbar"}`}>
            <div className={styles.header__content}>
                <div>
                    <Link to="/" ><span className={`${styles.logo} --text--green`}>AnimeWorld</span></Link>
                </div>

                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles["nav--open"] : {}}`}>
                        <form id={styles.nav__form} className={`${styles.nav__item} ${styles.nav__search__bar}`}>
                            <input type="text" placeholder="Search for an anime ....."
                                value={search} onChange={(e) => setSearch(e.target.value)}
                            />
                            <button onClick={searchHandler} className={`${styles.nav__item} --btn--primary`} >Search</button>
                        </form>
                        <button className={`${styles.nav__item} --btn--primary`} onClick={() => navigate("/filter")}>Filter </button>
                        <button className={`${styles.nav__item} watch`} onClick={() => navigate("/watchlist")} datacount={watchList.length} title="watchlist">
                            WatchList
                        </button>
                        <div className={styles.nav__button_container}>
                            <AiOutlineClose onClick={menuToggler} />
                        </div>
                    </nav>
                </div>


                <div>
                    {/* <div className={`${styles.header__button__container}`}>

                        <button onClick={() => navigate("/watchlist")} datacount={watchList.length} className={`${styles.button} ${'watch'}`} title="watchlist">
                            Watchlist
                        </button>

                    </div> */}

                    <button className={styles.header__toggler} onClick={menuToggler}>
                        <BiMenuAltRight />
                    </button>


                </div>
            </div>
        </header>
    );
}

export default Header

const Button = () => {
    return (
        <button className={styles.button}>Click Me</button>
    )
}
