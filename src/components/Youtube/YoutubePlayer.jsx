import React, { createRef, useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
const YoutubePlayer = ({ url }) => {
    console.log('url', url)
    const iframeRef = createRef();
    const [loading, setLoading] = useState(true);
    const handleLoad = () => {
        setLoading(false);
    }
    console.log(loading);
    return (
        <div className='youtube'>
            {loading && <><Spinner /> <span className='loading-text'>Trailer loading...</span></>
             }
            <iframe onLoad={handleLoad} ref={iframeRef} src={url} title="YouTube video player" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );

    // useEffect(() => {
    //     const handleLoad = () => {
    //       setLoading(false);
    //     };
    //     iframeRef.current.addEventListener('load', handleLoad);
    //     return () => {
    //         if (iframeRef.current) {
    //             iframeRef.current.removeEventListener('load', handleLoad);
    //           }
    //       };
    //   }, []);
    //   console.log(iframeRef)
    //   console.log('url',url)
   
}

export default YoutubePlayer