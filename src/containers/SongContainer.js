import { useEffect, useState } from 'react';
import SongList from '../components/SongList'
import './SongContainer.css'

const SongContainer = () => {

    const [songs, setSongs] = useState([]);

    const getSongs = () => {
        console.log("Getting song data");
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
    }

    useEffect(() => {
        getSongs();
    }, []);

    return (
        <div className="song-container">
             <h1>UK iTunes top 20 chart</h1>
             <hr/>
            <SongList 
            songs={songs}
            />
        </div>
    )

}

export default SongContainer;