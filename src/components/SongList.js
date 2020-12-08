import Song from './Song';
import './SongList.css';

const SongList = ({songs}) => {

    const songList = songs.map((song, index) => {
        return (
           <Song 
            title={song["im:name"]["label"]}
            key={index}
            position={index + 1}
            artist={song["im:artist"]["label"]}
            image={song["im:image"][2]["label"]}
            >
           </Song> 
        )
    })

    return (
        <div className="song-list">
        <ul>
            {songList}
        </ul>
        </div>
    )
}

export default SongList;