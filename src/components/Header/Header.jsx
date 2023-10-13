import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa"
import { BiFilterAlt } from "react-icons/bi"
import styles from "./Header.module.scss";
import { MdOutlineBookmarkAdded } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom";
import UseWatchList from "../hooks/UseWatchlist";
const Header = () => {
    const navigate = useNavigate();
    const { watchList } = UseWatchList();
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
                        <form id={styles.nav__form} className={`${styles.nav__item} ${styles.nav__search__bar}`} onSubmit={searchHandler}>
                            <input type="text" placeholder="Search  anime ....."
                                value={search} onChange={(e) => setSearch(e.target.value)}
                            />
                            <FaSearch className={styles.nav__icon} onClick={searchHandler} />
                        </form>
                        <BiFilterAlt className={styles.nav__icon} onClick={() => navigate("/filter")} title="filter"> </BiFilterAlt>

                        <div className={styles.watch} datacount={watchList.length}>
                            <MdOutlineBookmarkAdded className={`${styles.nav__icon}`} onClick={() => navigate("/watchlist")} title="watchlist">
                            </MdOutlineBookmarkAdded>

                        </div>

                        <div className={styles.nav__button_container}>
                            <AiOutlineClose onClick={menuToggler} />
                        </div>
                    </nav >
                </div >

                <div>

                    <button className={styles.header__toggler} onClick={menuToggler} aria-label="open navigation">

                        <BiMenuAltRight />
                    </button>


                </div>
            </div >

        </header >

    );
}

export default Header
