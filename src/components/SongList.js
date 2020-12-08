import Song from './Song';

const SongList = ({songs}) => {

    const songList = songs.map(song => {
        return (
           <Song 
            title={song["entry"]["title"]}
            key={song["entry"]["category"]["attributes"]["im:id"]}
            artist={song["entry"]["im:artist"]["label"]}>
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