import React from 'react';
const DATE = new Date().getFullYear()
const Footer = () => {
    return (

        <footer className="footer-distributed">

            <div className="footer-right --flex-col">
                <a target="_blank" href="https://github.com/jagdeeshgongidi"><img src='https://res.cloudinary.com/dcduqfohf/image/upload/v1675072522/svg/github-icon-svgrepo-com_1_bctpsa.svg' loading='lazy' alt="github" /></a>
                <a target="_blank" href="mailto:jagadeeshgoud001@gmail.com?subject=Mail from Anime World"><img src='https://res.cloudinary.com/dcduqfohf/image/upload/v1674835111/svg/gmail_za6gp6.svg' loading='lazy' alt='gmail' /></a>
                <a target="_blank" href="https://www.linkedin.com/in/jagadeeshgongidi/"><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835113/svg/linkedinround_aqr8x7.svg" loading='lazy' alt="linked in" /></a>
                <a target="_blank" href="https://facebook.com/jagadeeshgongidi"><img src="https://res.cloudinary.com/dcduqfohf/image/upload/v1674835111/svg/fbiconsvg_hiixlp.svg" loading='lazy' alt="facebook" /></a>
            </div>

            <div className="footer-left">

                <p className="footer-links">
                    <a className="link-1 --text--green " href="/">Home</a>
                </p >
                <p className='--text--green font-13'> Animeworld &copy;{DATE}</p>

            </div>

        </footer>


    )
}

export default Footer