import Song from './Song';

const SongList = ({songs}) => {

    const songList = songs.map((song, index) => {
        return (
           <Song 
            title={song.title.label}
            key={index}
            position={index + 1}
            artist={song["im:artist"]["label"]}>
           </Song> 
        )
    })

    return (
        <>
        <h2>Song list here</h2>
        <ul>
            {songList}
        </ul>
        </>
    )
}

export default SongList;