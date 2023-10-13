
const YoutubePlayer = ({ url }) => {
    return url ? (
        <div className='youtube'>
            <iframe src={url} title="YouTube video player" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    ) : <div className='youtube'><h3 className="center">Trailer Not found</h3></div>



}

export default YoutubePlayer