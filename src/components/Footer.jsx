import React from 'react';
const DATE = new Date().getFullYear()
const Footer = () => {
    return (
        // <footer className="footer-distributed">
        //     <div className="footer-left">
        //         <h3>AnimeWorld<span>info</span></h3>
        //         <p className="footer-links">
        //             <a href="/" className="link-1">Home</a>
        //         </p>

        //         <p className="footer-company-name" style={{ color: "#FFF" }}>Anime world info@ {DATE}</p>
        //     </div>

        //     <div className="footer-center">
        //         {/* 
        //         <div>
        //             <i className="fa fa-map-marker"></i>
        //             <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        //         </div> */}
        //         <div>
        //             <i className="fa fa-envelope"></i>
        //             <p>Contact:<a href="mailto:jagadeeshgoud001.com">jagadeeshgoud00@gmail.com</a></p>
        //         </div>

        //     </div>

        //     <div className="footer-right">
        //         <p className="footer-company-about">
        //             <span>About  me</span>
        //             Im jagdeeshgongidi, currently pursuing bachelors degree in computer science.
        //             Im aspiring to be a fullstack developer..
        //         </p>
        //         <div className="footer-icons">
        //             <a href="https://www.linkedin.com/in/jagadeeshgongidi/"><FiLinkedin fontSize={35} color="white" /></a>
        //             <a href="https://github.com/jagdeeshgongidi"><FiGithub fontSize={35} color="white" /></a>
        //             <a href="https://www.facebook.com/Jagadeesh.gongidi/"><FiFacebook fontSize={35} color="white" /></a>
        //             <a href="https://twitter.com/Jagadeshgongidi"><FiTwitter fontSize={35} color='white' /></a>

        //         </div>

        //     </div>

        // </footer>


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
                    {/* <a href="#">Blog</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a> */}
                </p>
                <p className='--text--green'> Animeworld &copy;{DATE}</p>
            </div>

        </footer>


    )
}

export default Footer