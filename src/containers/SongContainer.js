import { useEffect, useState } from 'react';
import SongList from '../components/SongList'

const SongContainer = () => {

    const [songs, setSongs] = useState({});

    const getSongs = () => {
        console.log("Getting song data");
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data))
    }

    useEffect(() => {
        getSongs();
    }, []);

    return (
        <>
        <h1>Song container here</h1>
        <SongList 
        songs={songs}
        />
        </>
    )

}

export default SongContainer;