const VideoTitle = ({title, overview}) => {
    return (
        <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-xl my-4 w-1/4">{overview}</p>
            <div>
                <button className="bg-white px-10 py-2 rounded-lg text-black text-xl hover:bg-slate-300">⏯️ Play</button>
                <button className="bg-gray-400 px-10 py-2 mx-2 rounded-lg text-white text-xl bg-opacity-70 hover:bg-gray-200 hover:text-black">ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;