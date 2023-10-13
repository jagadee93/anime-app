import React from 'react'

import { FcNext, FcPrevious } from "react-icons/fc";

const PageNation = ({ pagiNation, currentPage, setCurrentPage }) => {
    const { has_next_page, last_visible_page } = pagiNation || {};

    function scrollTop() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }


    const handlePrevPage = () => {
        scrollTop();
        setCurrentPage(prev => {
            if (prev === 1) {
                return prev
            } else {
                return prev - 1
            }
        })
    }








    function handleNextPage() {
        scrollTop();
        setCurrentPage(prev => {
            if (prev < last_visible_page) {
                return prev + 1
            } else {
                return prev
            }
        })
    }

    return (
        <div className="pageBtns">
            <button onClick={handlePrevPage} disabled={currentPage === 1} aria-label='previous page' >
                <FcPrevious className='p-btn' />
            </button>
            <p>{" " + currentPage ? currentPage : '' + " "}{" "}of{" "}{" " + last_visible_page ? last_visible_page : ""}</p>
            <button onClick={handleNextPage} disabled={!has_next_page} aria-label='next page'>
                <FcNext className='p-btn' />

            </button>
            <br></br>
        </div>
    )
}

export default PageNation;

